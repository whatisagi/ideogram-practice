"use client";

import { Button } from "@/components/ui/button";

import { CommandDialog } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { CreatePalette, MobileCreatePalette } from "./create-palette";

export const Create = forwardRef(function Create(
  props,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-96"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Start creating...</span>
        <span className="inline-flex lg:hidden">Start creating...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        title="What will you create?"
        description="Describe what you want to see"
        open={open}
        onOpenChange={setOpen}
      >
        <div className="hidden sm:block w-full h-full min-h-[550px]">
          <CreatePalette />
        </div>
        <div className="sm:hidden w-full h-full min-h-[550px]">
          <MobileCreatePalette />
        </div>
      </CommandDialog>
    </>
  );
});
