import { cn } from "@/lib/utils";
import { Bell, Home, Zap } from "lucide-react";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { MenuNav } from "./menu-nav";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { Create } from "./create";

interface SideHeaderProps {
  openCreate: boolean;
}

export function SiteHeader({ openCreate }: SideHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="w-full mx-auto flex h-16">
        <MainNav />
        {openCreate && (
          <div className="flex items-center justify-center">
            <Create />
          </div>
        )}
        <div className="flex flex-1 items-center justify-end space-x-3">
          <Link href={"/"}>
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "inline-flex"
              )}
            >
              <Zap className="mr-2 h-5 w-5" /> Upgrade plan
              <span className="sr-only">Home</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-10 px-0 sm:inline-flex hidden"
              )}
            >
              <Home />
              <span className="sr-only">Home</span>
            </div>
          </Link>
          <div
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-10 px-0 sm:inline-flex cursor-pointer hidden"
            )}
          >
            <Bell />
          </div>
          <div className="sm:inline-flex hidden">
            <ModeToggle />
          </div>
          <MenuNav />
        </div>
      </div>
    </header>
  );
}
