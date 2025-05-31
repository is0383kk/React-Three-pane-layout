"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"


export default function ComponentsPreviewPage() {
  const { toast } = useToast()

  return (
    <main className="p-8 flex flex-col gap-6 max-w-xl mx-auto text-sm">
      {/* Input & Textarea */}
      <Input placeholder="名前を入力してください" />
      <Textarea placeholder="メッセージを入力してください" />

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>メニューを開く</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>プロフィール</DropdownMenuItem>
          <DropdownMenuItem>設定</DropdownMenuItem>
          <DropdownMenuItem>ログアウト</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Tooltip */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">ホバーしてみて</Button>
          </TooltipTrigger>
          <TooltipContent>これはツールチップです</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Tabs */}
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">ホーム</TabsTrigger>
          <TabsTrigger value="about">情報</TabsTrigger>
        </TabsList>
        <TabsContent value="home">ホームコンテンツ</TabsContent>
        <TabsContent value="about">情報コンテンツ</TabsContent>
      </Tabs>

      {/* Accordion */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>開くセクション</AccordionTrigger>
          <AccordionContent>アコーディオンの中身です</AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Switch */}
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <label htmlFor="airplane-mode">飛行機モード</label>
      </div>

      {/* Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">ポップオーバー</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <p>これはポップオーバーの中身です。</p>
        </PopoverContent>
      </Popover>

      {/* Select */}
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="選択してください" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">ライト</SelectItem>
          <SelectItem value="dark">ダーク</SelectItem>
          <SelectItem value="system">システム</SelectItem>
        </SelectContent>
      </Select>

      {/* Toast */}
      <Button onClick={() => toast({ title: "トースト通知", description: "これはトーストのサンプルです。" })}>
        トーストを表示
      </Button>

      {/* 必ずToasterを配置 */}
      <Toaster />
    </main>
  )
}
