# Pdf reading, AI powered SaaS Next.js application.

This project follows the tutorial course hosted by [freeCodeCamp.org](https://youtu.be/r895rFUbGtE?si=tBjdjvhg4bL3801j), and is a SaaS application developed in [Next.js](https://nextjs.org/) together with other technologies such as: DrizzleORM, OpenAI, Stripe, TypeScript, Tailwind, NeonDb(PostgresDB), PineconeDb(Vector DB) and Vercel for cloud hosting and AI SDK.

## Getting Started

First, copy `.env.example`file and rename it to `.env`. Then supply all the environment variables needed.

You need to setup and get the relevant environment variables the following external services:

- Clerk
- OpenAI
- NeonDB
- AWS S3
- PineconeDb
- Stripe

Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
