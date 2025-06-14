// src/app/api/admin/setup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import env from '@/lib/env';

const prisma = new PrismaClient();

// This is a one-time setup endpoint to create the initial admin user
// In production, this should be disabled after first use or protected
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password, setupKey } = body;
    
    // Verify setup key (this should be a strong, unique key known only to the site owner)
    const expectedSetupKey = env.ADMIN_SETUP_KEY;
    if (setupKey !== expectedSetupKey) {
      return NextResponse.json(
        { error: 'Invalid setup key' },
        { status: 403 }
      );
    }
    
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }
    
    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { username },
    });
    
    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin user already exists' },
        { status: 400 }
      );
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create admin user
    const admin = await prisma.admin.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    
    return NextResponse.json({
      success: true,
      message: 'Admin user created successfully',
      id: admin.id,
      username: admin.username,
    });
  } catch (error) {
    console.error('Error creating admin user:', error);
    return NextResponse.json(
      { error: 'Failed to create admin user' },
      { status: 500 }
    );
  }
}
