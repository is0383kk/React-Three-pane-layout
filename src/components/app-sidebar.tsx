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

// ワークスペース項目
const workspaceItem = [
  {
    title: "ワークスペース１",
    url: "#",
    icon: Blocks,
  },
  {
    title: "ワークスペース２",
    url: "#",
    icon: Blocks,
  },
  {
    title: "ワークスペース３",
    url: "#",
    icon: Blocks,
  },
];

// メニュー項目
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

// フッター項目
const footerItem = [
  {
    title: "アカウント",
    url: "#",
    icon: Smile,
  },
  {
    title: "設定",
    url: "#",
    icon: Settings,
  },
  {
    title: "ログアウト",
    url: "#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // 左メニューの開閉状態
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaceItem[0]); // 選択されたワークスペース
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // 設定ダイアログの開閉状態
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
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

                  {/* トグルボタン（開閉制御） */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full aspect-square p-2"
                    onClick={() => setOpen(!open)}
                    aria-label="サイドバーの開閉"
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

      {/* サイドバーコンテンツ */}
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

      {/* サイドバーのフッター */}
      <SidebarFooter>
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
                      if (item.title === "設定") {
                        setIsSettingsOpen(true); // 設定ダイアログを開く
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
      {/* 設定ダイアログ */}
      <SettingsDialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen} />
    </Sidebar>
  );
}
