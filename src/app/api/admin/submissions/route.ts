// src/app/api/admin/submissions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import env from '@/lib/env';

const prisma = new PrismaClient();
const { JWT_SECRET } = env;

// Middleware to verify JWT token
const verifyToken = (request: NextRequest) => {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    
    const token = authHeader.split(' ')[1];
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export async function GET(request: NextRequest) {
  // Verify authentication
  const user = verifyToken(request);
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  try {
    // Get all submissions, ordered by most recent first
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
