"use client";
import "react-day-picker/style.css";

import { AppSidebar } from "@/components/app-sidebar";

import TwoPaneLayout from "@/layouts/two-pane-layout";

export default function Page() {
  return (
    <TwoPaneLayout
      left={<AppSidebar />}
      centerTitle="Center Pane"
      centerContent={
        <section className="flex flex-col flex-1 h-full min-h-0 px-4 py-6">
          <h1 className="text-2xl font-bold mb-4">Center pane content</h1>
        </section>
      }
    />
  );
}
