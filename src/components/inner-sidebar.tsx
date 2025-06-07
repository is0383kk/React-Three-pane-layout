"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Blocks,
  Calendar,
  ChevronDown,
  ChevronUp,
  CircleUserRound,
  Home,
  Inbox,
  LogOut,
  Menu,
  PanelLeftClose,
  Search,
  Settings,
  Smile,
} from "lucide-react";
import { useState } from "react";
import SettingsDialog from "./settings-dialog";
import { Button } from "./ui/button";

// Sidebar Header Item
const workspaceItem = [
  {
    title: "Work Space 1",
    url: "#",
    icon: Blocks,
  },
  {
    title: "Work Space 2",
    url: "#",
    icon: Blocks,
  },
  {
    title: "Work Space 3",
    url: "#",
    icon: Blocks,
  },
];

// Sidebar Content Item
const menuItem = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

// Sidebar Footer Item
const footerItem = [
  {
    title: "Account",
    url: "#",
    icon: Smile,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
];

export function InnerSidebar() {
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaceItem[0]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const { open, setOpen } = useSidebar();

  return (
    <>
      <Sidebar collapsible="icon" className="dark:border-gray-700">
        {/* Sidebar Header */}
        <SidebarHeader
          className={`border-gray-200 dark:border-gray-700 ${
            open ? "h-16 border-b-2" : "h-28 border-b-2"
          }`}
        >
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <div
                  className={`relative p-2 flex items-center gap-2 ${
                    open
                      ? "flex-row justify-between"
                      : "flex-col justify-center"
                  }`}
                >
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                      {open && (
                        <span>
                          {open && (
                            <span className="text-sm font-medium ml-2">
                              {selectedWorkspace.title}
                            </span>
                          )}
                        </span>
                      )}
                      <ChevronDown />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>

                  {/* Sidebar Toggle */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full aspect-square p-2"
                    onClick={() => setOpen(!open)}
                    aria-label="Open&Close Sidebar"
                  >
                    {open ? (
                      <PanelLeftClose className="w-4 h-4" />
                    ) : (
                      <Menu className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                  {workspaceItem.map((item) => (
                    <DropdownMenuItem
                      key={item.title}
                      onClick={() => setSelectedWorkspace(item)}
                    >
                      <a href={item.url} className="flex items-center gap-2">
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.title}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* Sidebar content */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItem.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        {open && <span>{item.title}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Sidebar footer */}
        <SidebarFooter className="border-t-2 border-gray-200 dark:border-gray-700">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <CircleUserRound /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  {footerItem.map((item) => (
                    <DropdownMenuItem
                      key={item.title}
                      onClick={() => {
                        if (item.title === "Settings") {
                          setIsSettingsOpen(true);
                        } else if (item.title === "Logout") {
                          setIsLogoutDialogOpen(true);
                        }
                      }}
                    >
                      <a href={item.url} className="flex items-center gap-2">
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.title}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        {/* Settings dialog */}
        <SettingsDialog
          open={isSettingsOpen}
          onOpenChange={setIsSettingsOpen}
        />

        {/* Alert Dialog */}
        <AlertDialog
          open={isLogoutDialogOpen}
          onOpenChange={setIsLogoutDialogOpen}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to log out?
              </AlertDialogTitle>
              <AlertDialogDescription>
                The session will end and you will need to log in again.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  setIsLogoutDialogOpen(false);
                  alert("Logged out");
                }}
              >
                Log out
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Sidebar>
    </>
  );
}
