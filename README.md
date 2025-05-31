# 導入

```console
$ npx create-next-app@latest
√ What is your project named? ... react-tutorial
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
√ What import alias would you like configured? ... @/*
```

## ディレクトリ構造

```
親フォルダ名/
├─ node_modules/      ← 依存ライブラリ（触らない）
├─ public/            ← 画像やファビコンなど静的ファイル
├─ src/
│  └─ app/            ← ページやコンポーネントを追加する場所
│     └─ page.tsx     ← トップページ（`/`）の中身
├─ package.json       ← 使用ライブラリ・スクリプト
├─ tailwind.config.js ← Tailwind CSS 設定（入れていれば）
├─ postcss.config.js  ← Tailwind 用のPostCSS設定
├─ jsconfig.json      ← インポートエイリアス（@/）の設定
└─ next.config.js     ← Next.jsの設定（必要なら）
```

## shadcn の導入

```console
npx shadcn@latest init
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
