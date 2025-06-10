# React-shadcn-pane-layouts

A collection of responsive and resizable pane layout components built with **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

Ideal for dashboard-style applications with flexible layouts such as two-pane and three-pane structures featuring sidebar navigation, main content, and resizable detail panels.

---

## ✨ Features

- 📐 **Two-pane / Three-pane layouts** for modern web apps
- 🖱️ **Resizable panes** with draggable handles
- 🎨 Styled with **Tailwind CSS** and **shadcn/ui**
- ⚛️ Built using **React Server Components** (Next.js App Router)
- 🌙 Dark mode friendly (coming soon)

---

![](https://github.com/is0383kk/React-shadcn-pane-layouts/blob/main/public/sample.jpeg)

![](https://github.com/is0383kk/React-shadcn-pane-layouts/blob/main/public/sample2.png)

## 📁 Directory Structure

```
Parent/
├─ node_modules/ ← Dependent libraries (not touched)
├─ public/ ← Static files such as images and favicons
├─ src/
│ └─ app/ ← Pages and layout usage examples
│ └─ page.tsx ← Top page (/) contents
│ └─ components/ ← Reusable UI components (shadcn, sidebar, dialogs)
│ └─ layouts/ ← TwoPaneLayout, ThreePaneLayout components
├─ package.json ← Libraries and scripts used
├─ tailwind.config.js ← Tailwind CSS settings
├─ postcss.config.js ← PostCSS settings
├─ jsconfig.json ← Import alias (@/) settings
└─ next.config.js ← Next.js settings
```

---

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

Open http://localhost:3000 with your browser to see the result.
You can start editing the layout examples by modifying files under src/app.

# 🧩 Components Overview

TwoPaneLayout

- left: Sidebar or menu (ReactNode)
- centerTitle: Title for the main panel
- centerContent: Main content area

ThreePaneLayout

- left: Sidebar or navigation
- centerTitle: Title string for center panel
- centerContent: Main content (ReactNode)
- rightTitle: Title for right pane
- rightContent: Detail or supplementary content

# 🧱 Technologies Used

- [Next.js （App Router）](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.dev/)
- [Lucide Icons](https://lucide.dev/icons/)

# 📄 License

This project is open-sourced under the MIT License.
