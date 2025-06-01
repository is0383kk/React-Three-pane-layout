# React-Three pane layout

A responsive and resizable three-pane layout component built with **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.
Ideal for dashboard-style applications where left navigation, center content, and a resizable right panel are needed.

---

## ✨ Features

- 📐 **Three-pane layout** (left menu, center content, right detail panel)
- 🖱️ **Resizable right pane** with draggable handle
- 🎨 Styled with **Tailwind CSS** and **shadcn/ui**
- ⚛️ Built using **React Server Components** (Next.js App Router)
- 🌙 Dark mode friendly (Scheduled to be created)

---

![](https://github.com/is0383kk/React-Three-pane-layout/blob/main/public/sample.jpeg)

## 📁 Directory structure

```
Parent/
├─ node_modules/ ← Dependent libraries (not touched)
├─ public/ ← Static files such as images and favicons
├─ src/
│ └─ app/ ← Place to add pages and components
│ └─ page.tsx ← Top page (`/`) contents
| └─ components/ ← shadcn & sidebar & settings-dialog components
├─ package. json ← Libraries and scripts used
├─ tailwind.config.js ← Tailwind CSS settings (if included)
├─ postcss.config.js ← PostCSS settings for Tailwind
├─ jsconfig.json ← Import alias (@/) Settings
└─ next.config.js ← Next.js settings (if necessary)
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### 2. Start the development server

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

# 🧩 Component Overview

### ThreePaneLayout

This component defines a layout with:

- left: Sidebar or navigation area (ReactNode)
- centerTitle: Title string for center panel
- centerContent: Main content (ReactNode)
- rightTitle: Title (ReactNode) for right pane
- rightContent: Supplementary detail content (ReactNode)

# 🧱 Technologies Used

- [Next.js （App Router）](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.dev/)
- [Lucide Icons](https://ui.shadcn.dev/)

# 📄 License

This project is open-sourced under the MIT License.
