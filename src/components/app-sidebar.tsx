import { InnerSidebar } from "@/components/inner-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <SidebarProvider>
      <InnerSidebar />
    </SidebarProvider>
  );
}
