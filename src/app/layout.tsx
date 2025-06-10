// src/app/layout.tsx
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React-shadcn-pane-layouts",
  description:
    "React-shadcn-pane-layouts is a layout component for React applications using shadcn-ui.",
  openGraph: {
    title: "React-shadcn-pane-layouts",
    description:
      "React-shadcn-pane-layouts is a layout component for React applications using shadcn-ui.",
    url: "https://is0383kk.github.io/React-shadcn-pane-layouts/",
    siteName: "React-shadcn-pane-layouts",
    images: [
      {
        url: "https://is0383kk.github.io/React-shadcn-pane-layouts/ogp.png",
        width: 1200,
        height: 630,
        alt: "React-shadcn-pane-layouts is a layout component for React applications using shadcn-ui.",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@is0383kk",
    images: ["https://is0383kk.github.io/React-shadcn-pane-layouts/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  authors: [{ name: "is0383kk", url: "https://github.com/is0383kk" }],
  creator: "is0383kk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
