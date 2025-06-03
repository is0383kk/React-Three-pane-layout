"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThreePaneLayout from "@/layouts/three-pane-layout";
import {
  BadgeHelp,
  CircleUserRound,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";

export default function Page() {
  return (
    <ThreePaneLayout
      topNavigation={
        <div className="flex items-center justify-between w-full">
          {/* Header：Logo&Title */}
          <div className="flex items-center space-x-2">
            <Home className="w-5 h-5" />
            <span className="text-lg font-semibold">Product Name</span>
          </div>

          {/* Header：Profile icon */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CircleUserRound className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:ring-2 ring-gray-400 cursor-pointer transition p-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BadgeHelp />
                Manual
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Logout")}>
                <LogOut />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      }
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
