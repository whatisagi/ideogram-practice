"use client";
import { cn } from "@/lib/utils";
import { ApertureIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function MainNav() {
  return (
    <nav className="flex items-center mr-2">
      <Link href="/">
        <Button variant="link" className="w-10 px-0">
          <ApertureIcon className={cn("h-[1.75rem] w-[1.75rem]")} />
        </Button>
      </Link>
    </nav>
  );
}
