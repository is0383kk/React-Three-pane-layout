"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useRef, useState } from "react";
import "./globals.css";

// Interフォントを使用設定
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [rightPaneWidth, setRightPaneWidth] = useState(500); // 右ペインの幅を状態で保持
  const isDragging = useRef(false); // ドラッグ中かどうかを保持（useRefで再レンダリング回避）

  // マウス移動時に右ペインの幅を変更
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      const newWidth = window.innerWidth - e.clientX; // 画面右端からカーソル位置までの距離
      const clampedWidth = Math.min(Math.max(newWidth, 200), 800); // 幅を200〜600pxに制限
      setRightPaneWidth(clampedWidth);
    }
  };

  // ドラッグ開始時にフラグをON
  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.userSelect = "none";
  };
  // ドラッグ終了時にフラグをOFF
  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = "";
  };
  // ドラッグ用のイベントをマウント時に登録・アンマウント時に解除
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <html lang="ja">
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar />

          <main className="flex h-screen overflow-hidden">
            {/* #################
                # 中央ペイン定義 #
                #################
             */}
            <section className="flex-1 p-6 overflow-auto">{children}</section>

            {/* ###############
                # 右ペイン定義 #
                ###############
             */}
            {/* リサイズハンドル（右ペインをドラッグで拡縮） */}
            <div
              className="w-1 cursor-col-resize bg-gray-300 dark:bg-gray-600"
              onMouseDown={handleMouseDown}
            />
            {/* 右ペイン（詳細や補足など） */}
            <aside
              className="border-l border-gray-300 dark:border-gray-700 p-4 overflow-auto"
              style={{ width: `${rightPaneWidth}px` }} // 状態で可変
            >
              <h2 className="text-lg font-semibold">右ペイン</h2>
              <p>詳細情報や補足説明などを表示できます。</p>
            </aside>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
