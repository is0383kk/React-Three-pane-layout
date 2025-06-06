"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
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
  FilePlus,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <ThreePaneLayout
      topNavigation={
        <div className="flex items-center justify-between w-full">
          {/* Header：Logo&Title */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Home className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                React-shadcn-pane-layouts
              </span>
            </div>
            <ThemeToggle />
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
      centerTitle={"Samples"}
      centerContent={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Select a sample layout to view:
          </p>

          <div className="space-y-2">
            <Link
              href="/two-pane-sample1"
              className="block px-4 py-2 bg-muted hover:bg-muted/70 rounded-md text-sm font-medium transition"
            >
              ▶️ Two Pane Sample 1
            </Link>
            <Link
              href="/two-pane-sample2"
              className="block px-4 py-2 bg-muted hover:bg-muted/70 rounded-md text-sm font-medium transition"
            >
              ▶️ Two Pane Sample 2
            </Link>
            <Link
              href="/three-pane-sample1"
              className="block px-4 py-2 bg-muted hover:bg-muted/70 rounded-md text-sm font-medium transition"
            >
              ▶️ Three Pane Sample 1
            </Link>
            <Link
              href="/three-pane-sample2"
              className="block px-4 py-2 bg-muted hover:bg-muted/70 rounded-md text-sm font-medium transition"
            >
              ▶️ Three Pane Sample 2
            </Link>
          </div>
        </div>
      }
      rightTitle={"Latest update"}
      rightContent={
        <div className="space-y-4 text-sm">
          <p className="text-muted-foreground">Recently modified items:</p>
          <ul className="space-y-2">
            <li className="border-l-2 border-primary pl-3">
              <div className="font-medium inline-flex items-center space-x-2">
                <FilePlus />
                <span>Two-Pane-Layout Sample</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Updated by よしを on 2025-06-04
              </p>
            </li>

            <li className="border-l-2 border-primary pl-3">
              <div className="font-medium inline-flex items-center space-x-2">
                <FilePlus />
                <span>Tree-Pane-Layout Sample</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Updated by よしを on 2025-06-04
              </p>
            </li>

            <li className="border-l-2 border-primary pl-3">
              <div className="font-medium inline-flex items-center space-x-2">
                <FilePlus />
                <span>Dark-mode</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Updated by よしを on 2025-06-07
              </p>
            </li>
          </ul>
        </div>
      }
    />
  );
}
