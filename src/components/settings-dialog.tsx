// Settings dialog with header, left menu, and right panel layout

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
    { key: "general", label: "General" },
    { key: "notifications", label: "Notifications" },
    { key: "personalize", label: "Personalization" },
    { key: "security", label: "Security" },
    { key: "subscription", label: "Subscription" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="flex h-[600px]">
          {/* Left Menu */}
          <div className="w-48 border-r bg-muted/40 p-4">
            <DialogTitle className="text-md font-bold mb-4">
              Settings
            </DialogTitle>
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

          {/* Right Panel */}
          <div className="flex-1 p-6 overflow-y-auto">
            {selectedTab === "general" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Theme</span>
                    <select className="border rounded px-2 py-1">
                      <option>Light</option>
                      <option>Dark</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Language</span>
                    <select className="border rounded px-2 py-1">
                      <option>English</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "notifications" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                <p>Notification settings go here</p>
              </div>
            )}

            {selectedTab === "personalize" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Personalization</h3>
                <p>Personalization settings go here</p>
              </div>
            )}

            {selectedTab === "security" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Security</h3>
                <p>Security settings go here</p>
              </div>
            )}

            {selectedTab === "subscription" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Subscription</h3>
                <p>Plan and billing information goes here</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
