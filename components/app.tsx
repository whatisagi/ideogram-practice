"use client";

import { SiteHeader } from "./site-header";
import { useApp } from "./providers";

interface AppProps {
  children: React.ReactNode;
}

export function App({ children }: AppProps) {
  const { openCreate } = useApp();

  return (
    <div className="container relative flex flex-col p-2 min-h-screen max-w-7xl bg-background">
      <SiteHeader openCreate={openCreate} />
      {children}
    </div>
  );
}
