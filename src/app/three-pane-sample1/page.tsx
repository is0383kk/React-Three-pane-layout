"use client";

import { AppSidebar } from "@/components/app-sidebar";
import ThreePaneLayout from "@/layouts/three-pane-layout";

export default function Page() {
  return (
    <ThreePaneLayout
      left={<AppSidebar />}
      centerTitle={"Center Pane"}
      centerContent={
        <>
          <p>Center pane content </p>
        </>
      }
      rightTitle={"Right Pane"}
      rightContent={
        <>
          <p>Right pane content</p>
        </>
      }
    />
  );
}
