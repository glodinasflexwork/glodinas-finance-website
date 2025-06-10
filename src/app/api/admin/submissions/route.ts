// src/app/api/admin/submissions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'glodinas-finance-secret-key';

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
