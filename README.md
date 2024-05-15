This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/Mahdi-matty/next-full-stack).
Here you can see an example of Nextjs Fullstack serverless app

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Details

Database in use is MoongodbAtlas:
You can check utils/database for more information.
Aws-sdk-s3-client for better connection to S3 bucket:
check app/api/upload for how to configure s3-client with app.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out ours at : next-full-stack.vercel.app
