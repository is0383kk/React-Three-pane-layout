// components/three-pane-layout.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function TwoPaneLayout({
  topNavigation,
  left,
  centerTitle,
  centerContent,
}: {
  topNavigation?: React.ReactNode;
  left: React.ReactNode;
  centerTitle: string;
  centerContent: React.ReactNode;
}) {
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
            <section className="flex flex-col flex-1 h-full min-h-0 px-4 py-6">
              <h1 className="text-2xl font-bold mb-4">{centerTitle}</h1>
              <Card className="flex-1 border border-border rounded-md shadow-none">
                <CardContent className="p-4 h-full">
                  {centerContent}
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
