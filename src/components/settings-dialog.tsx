// 設定ダイアログのヘッダー・左メニュー・右パネル構成サンプル

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export default function SettingsDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [selectedTab, setSelectedTab] = useState("general");

  const tabs = [
    { key: "general", label: "一般" },
    { key: "notifications", label: "通知" },
    { key: "personalize", label: "パーソナライズ" },
    { key: "security", label: "セキュリティ" },
    { key: "subscription", label: "サブスクリプション" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="flex h-[600px]">
          {/* 左メニュー */}
          <div className="w-48 border-r bg-muted/40 p-4">
            <DialogTitle className="text-md font-bold mb-4">設定</DialogTitle>{" "}
            {/* 必須 */}
            <div className="flex flex-col space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedTab(tab.key)}
                  className={`text-left px-2 py-1 rounded hover:bg-muted transition-all ${
                    selectedTab === tab.key
                      ? "bg-muted text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 右パネル */}
          <div className="flex-1 p-6 overflow-y-auto">
            {selectedTab === "general" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">一般設定</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>テーマ</span>
                    <select className="border rounded px-2 py-1">
                      <option>ライト</option>
                      <option>ダーク</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>言語</span>
                    <select className="border rounded px-2 py-1">
                      <option>日本語</option>
                      <option>English</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "notifications" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">通知</h3>
                <p>通知設定をここに記述</p>
              </div>
            )}

            {selectedTab === "personalize" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">パーソナライズ</h3>
                <p>パーソナライズ設定をここに記述</p>
              </div>
            )}

            {selectedTab === "security" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">セキュリティ</h3>
                <p>セキュリティ設定をここに記述</p>
              </div>
            )}

            {selectedTab === "subscription" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  サブスクリプション
                </h3>
                <p>プランや支払い情報など</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
