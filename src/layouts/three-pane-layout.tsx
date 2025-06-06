// components/three-pane-layout.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function ThreePaneLayout({
  topNavigation,
  left,
  centerTitle,
  centerContent,
  rightTitle,
  rightContent,
}: {
  topNavigation?: React.ReactNode;
  left: React.ReactNode;
  centerTitle: string;
  centerContent: React.ReactNode;
  rightTitle: React.ReactNode;
  rightContent: React.ReactNode;
}) {
  const [rightPaneWidth, setRightPaneWidth] = useState(400);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const newWidth = window.innerWidth - e.clientX;
        const clamped = Math.max(200, Math.min(800, newWidth));
        setRightPaneWidth(clamped);
      }
    };
    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = "";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.userSelect = "none";
  };

  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-1 overflow-y-auto relative z-0">
        {/* Sidebar */}
        <aside>{left}</aside>

        {/* Main Content Area (Header + Panes) */}
        <div className="flex flex-col flex-1 h-full min-h-0">
          {/* Header */}
          {topNavigation && (
            <header className="h-16 px-6 flex items-center border-b-2 border-border bg-white dark:bg-gray-900 dark:border-gray-700 z-10">
              {topNavigation}
            </header>
          )}

          {/* Panes */}
          <div className="flex flex-1 relative min-h-0">
            {/* Center Pane */}
            <section className="flex flex-col flex-1 h-full min-h-0 px-4 py-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
              <h1 className="text-2xl font-bold mb-4">{centerTitle}</h1>
              <Card className="flex-1 border border-border rounded-md shadow-none dark:bg-gray-900 dark:border-gray-700">
                <CardContent className="p-4 h-full">
                  {centerContent}
                </CardContent>
              </Card>
            </section>

            {/* ⇔ Drag Handle */}
            <div
              onMouseDown={handleMouseDown}
              className="absolute top-0 cursor-col-resize z-[9999] group"
              style={{
                left: `calc(100% - ${rightPaneWidth}px - 4px)`,
                width: "4px",
                height: "100%",
                backgroundColor: "transparent",
                pointerEvents: "auto",
                boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.2s ease",
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-gray-400 dark:text-gray-500 select-none pointer-events-none group-hover:text-gray-600 dark:group-hover:text-gray-300">
                ⇔
              </div>
            </div>

            {/* Right Pane */}
            <section
              style={{ width: `${rightPaneWidth}px` }}
              className="flex flex-col flex-shrink-0 h-full min-h-0 px-4 py-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
            >
              <h1 className="text-2xl font-bold mb-4">{rightTitle}</h1>
              <Card className="flex-1 border border-border rounded-md shadow-none dark:bg-gray-900 dark:border-gray-700">
                <CardContent className="p-4 h-full">{rightContent}</CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
