"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calender";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";

export function DatetimePicker({
  value,
  onChange,
  className,
}: {
  value: Date | undefined;
  onChange: (date: Date) => void;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn("flex flex-col space-y-1", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "yyyy/MM/dd HH:mm") : "yyyy/mm/dd --:--"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              if (date) {
                const current = value ?? new Date();
                const newDate = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  current.getHours(),
                  current.getMinutes()
                );
                onChange(newDate);
                setOpen(false);
              }
            }}
            showOutsideDays
          />
          <div className="p-4 flex items-center space-x-2 border-t">
            <input
              type="time"
              className="border rounded px-2 py-1 text-sm"
              value={value ? format(value, "HH:mm") : ""}
              onChange={(e) => {
                if (value) {
                  const [h, m] = e.target.value.split(":").map(Number);
                  const updated = new Date(value);
                  updated.setHours(h);
                  updated.setMinutes(m);
                  onChange(updated);
                }
              }}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
