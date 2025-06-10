// src/scripts/create-admin.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  const username = process.argv[2] || process.env.ADMIN_USERNAME;
  const password = process.argv[3] || process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    console.error(
      'Error: admin username and password are required.\n' +
        'Provide them as CLI arguments or via the ADMIN_USERNAME and ADMIN_PASSWORD environment variables.'
    );
    process.exit(1);
  }

  try {
    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { username },
    });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
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
