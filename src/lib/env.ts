const requiredVars = [
  'JWT_SECRET',
  'ADMIN_SETUP_KEY',
  'MAILTRAP_API_TOKEN',
  'MONEYBIRD_CLIENT_ID',
  'MONEYBIRD_CLIENT_SECRET',
  'NEXT_PUBLIC_BASE_URL',
];

for (const name of requiredVars) {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is required but not defined`);
  }
}

const env = {
  JWT_SECRET: process.env.JWT_SECRET as string,
  ADMIN_SETUP_KEY: process.env.ADMIN_SETUP_KEY as string,
  MAILTRAP_API_TOKEN: process.env.MAILTRAP_API_TOKEN as string,
  MONEYBIRD_CLIENT_ID: process.env.MONEYBIRD_CLIENT_ID as string,
  MONEYBIRD_CLIENT_SECRET: process.env.MONEYBIRD_CLIENT_SECRET as string,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL as string,
  NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL,
  EMAIL_FROM: process.env.EMAIL_FROM,
};

export default env;
