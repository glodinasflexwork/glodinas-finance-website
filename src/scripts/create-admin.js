// src/scripts/create-admin.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { username: 'cihatkaya@glodinas.nl' },
    });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash('Galati123', 10);
    
    // Create admin user
    const admin = await prisma.admin.create({
      data: {
        username: 'cihatkaya@glodinas.nl',
        password: hashedPassword,
      },
    });
    
    console.log('Admin user created successfully:', {
      id: admin.id,
      username: admin.username,
    });
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
