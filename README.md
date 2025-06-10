This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

- Node.js **18** or newer
- A running PostgreSQL instance (tested with PostgreSQL **14**+)

Create a `.env` file in the project root with the following variables:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/glodinas"
JWT_SECRET="change-this-secret"
ADMIN_SETUP_KEY="initial-admin-key"
MONEYBIRD_CLIENT_ID="your-moneybird-client-id"
MONEYBIRD_CLIENT_SECRET="your-moneybird-client-secret"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
MAILTRAP_API_TOKEN="your-mailtrap-token"
# Optional but recommended
NOTIFICATION_EMAIL="glodinas@icloud.com"
EMAIL_FROM="noreply@glodinasfinance.nl"
```

## Getting Started



```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Database

Run the Prisma migrations to create the database schema:

```bash
npx prisma migrate dev
```

### Production build

Generate the production build and start the server:

```bash
npm run build
npm start
```

## Deployment



