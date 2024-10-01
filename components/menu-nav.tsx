"use client";

import { Button, buttonVariants } from "./ui/button";
import { Menu, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function MenuNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="end"
        className="min-w-64 text-muted-foreground min-h-80"
      >
        <DropdownMenuLabel className="flex">
          <Avatar>
            <AvatarFallback>ID</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-2">
            <span className="text-foreground font-bold">ideogram</span>
            <span>ideogram@gmail.com</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem className="focus:bg-background">
          <Link href={"/pricing"} className="w-full">
            <Button variant="default" className="flex w-full">
              <Zap className="mr-2 h-5 w-5" /> Upgrade plan
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>View Profile</DropdownMenuItem>
        <DropdownMenuItem>Helo & documentation</DropdownMenuItem>
        <DropdownMenuItem>Manage muted users</DropdownMenuItem>
        <DropdownMenuItem>API</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
