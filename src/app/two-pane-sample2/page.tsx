"use client";
import "react-day-picker/style.css";

import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { DatetimePicker } from "@/components/ui/date-time-picker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import TwoPaneLayout from "@/layouts/two-pane-layout";
import {
  BadgeHelp,
  CircleUserRound,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  return (
    <TwoPaneLayout
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
      centerTitle="Dashboard"
      centerContent={
        <div className="space-y-6">
          {/* 絞り込み条件 */}
          <Card className="flex-1 border border-border rounded-md shadow-none">
            <CardContent className="p-6 space-y-6">
              {/* Filter Criteria + Switch */}
              <div className="flex items-center justify-between w-1/2">
                <h2 className="text-lg font-semibold">Filter Criteria</h2>
                <div className="flex items-center space-x-2">
                  <Switch id="my-only" defaultChecked />
                  <Label htmlFor="my-only">My Items Only</Label>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                {/* Row 1: Project Name */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-1/2">
                  <div className="flex flex-col">
                    <Label className="mb-1 py-2" htmlFor="project">
                      Project Name
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="projectA">Project A</SelectItem>
                        <SelectItem value="projectB">Project B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 2: Artifact Type + Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2">
                  <div className="flex flex-col">
                    <Label className="mb-1 py-2" htmlFor="type">
                      Artifact Type
                    </Label>
                    <Input id="type" placeholder="e.g., Design Doc, Code" />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-1 py-2" htmlFor="name">
                      Artifact Name
                    </Label>
                    <Input id="name" placeholder="e.g., Login Screen Design" />
                  </div>
                </div>

                {/* Row 3: Creator + Updater */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2">
                  <div className="flex flex-col">
                    <Label className="mb-1 py-2" htmlFor="creator">
                      Creator (Email)
                    </Label>
                    <Input id="creator" placeholder="example@email.com" />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-1 py-2" htmlFor="updater">
                      Updater (Email)
                    </Label>
                    <Input id="updater" placeholder="example@email.com" />
                  </div>
                </div>

                {/* Row 4: Created At + Updated At */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2">
                  <div className="flex flex-col">
                    <Label className="mb-1 py-2" htmlFor="creator">
                      Created At
                    </Label>
                    <DatetimePicker value={startDate} onChange={setStartDate} />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-1 py-2" htmlFor="updater">
                      Updated At
                    </Label>
                    <DatetimePicker value={endDate} onChange={setEndDate} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Table Section */}
          <Card className="flex-1 border border-border rounded-md shadow-none">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Assigned Artifacts</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-border text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-2 text-left font-medium">
                        Project
                      </th>
                      <th className="px-4 py-2 text-left font-medium">Type</th>
                      <th className="px-4 py-2 text-left font-medium">Name</th>
                      <th className="px-4 py-2 text-left font-medium">
                        Created By
                      </th>
                      <th className="px-4 py-2 text-left font-medium">
                        Updated At
                      </th>
                      <th className="px-4 py-2 text-left font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2">Project B</td>
                      <td className="px-4 py-2">UI Design</td>
                      <td className="px-4 py-2">Design Doc B</td>
                      <td className="px-4 py-2">abc@abc.jp</td>
                      <td className="px-4 py-2">2024-01-14 16:45</td>
                      <td className="px-4 py-2 space-x-2">
                        <Button size="sm">Edit</Button>
                        <Button size="sm" variant="destructive">
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">Project C</td>
                      <td className="px-4 py-2">Test Code</td>
                      <td className="px-4 py-2">C Screen Test Code</td>
                      <td className="px-4 py-2">abc@abc.com</td>
                      <td className="px-4 py-2">2024-01-13 11:20</td>
                      <td className="px-4 py-2 space-x-2">
                        <Button size="sm">Edit</Button>
                        <Button size="sm" variant="destructive">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      }
    />
  );
}
