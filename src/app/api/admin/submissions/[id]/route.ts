// src/app/api/admin/submissions/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import env from '@/lib/env';

const prisma = new PrismaClient();
const { JWT_SECRET } = env;

// Middleware to verify JWT token
const verifyToken = (request: NextRequest) => {
  try {
    let token: string | undefined | null = null;

    const authHeader = request.headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    } else {
      token = request.cookies.get('adminToken')?.value;
    }

    if (!token) {
      return null;
    }

    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Using URL-based parameter extraction for Next.js 15 compatibility
export async function PATCH(
  request: NextRequest
) {
  // Verify authentication
  const user = verifyToken(request);
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  try {
    // Extract ID from URL path
    const pathParts = request.nextUrl.pathname.split('/');
    const idStr = pathParts[pathParts.length - 1];
    const id = parseInt(idStr);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid submission ID' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { status } = body;
    
    if (!status || !['new', 'in-progress', 'completed'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      );
    }
    
    // Update submission status
    const updatedSubmission = await prisma.contactSubmission.update({
      where: { id },
      data: { status }
    });
    
    return NextResponse.json(updatedSubmission);
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}
