"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThreePaneLayout from "@/layouts/three-pane-layout";
import {
  BadgeHelp,
  Bell,
  CalendarDays,
  CircleUserRound,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";
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
                Web-dev-tools
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
                <User className="mr-2 w-4 h-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BadgeHelp className="mr-2 w-4 h-4" />
                Manual
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 w-4 h-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Logout")}>
                <LogOut className="mr-2 w-4 h-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      }
      left={<AppSidebar />}
      centerTitle={"Dashboard"}
      centerContent={
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-lg font-semibold">Welcome Back!</h2>
              <p className="text-sm text-muted-foreground">
                A summary of your recent activity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <Bell className="w-6 h-6 text-yellow-500" />
              <div>
                <h3 className="font-medium">You have 3 new notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Check your inbox for details.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <CalendarDays className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-medium">Next Meeting</h3>
                <p className="text-sm text-muted-foreground">
                  Scheduled for June 10, 2025 at 10:00 AM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      }
      rightTitle={"Recent Activity"}
      rightContent={
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4 text-sm">
              <p className="mb-1">✅ Updated design document</p>
              <span className="text-muted-foreground">2 hours ago</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-sm">
              <p className="mb-1">📦 Deployed new release</p>
              <span className="text-muted-foreground">Yesterday</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-sm">
              <p className="mb-1">🛠️ Code review completed</p>
              <span className="text-muted-foreground">2 days ago</span>
            </CardContent>
          </Card>
        </div>
      }
    />
  );
}
