import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function CreatePalette() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={60} minSize={50}></ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={40}
        maxSize={50}
        minSize={40}
      ></ResizablePanel>
    </ResizablePanelGroup>
  );
}

export function MobileCreatePalette() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="h-full w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={50} minSize={40}></ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={50}
        maxSize={60}
        minSize={40}
      ></ResizablePanel>
    </ResizablePanelGroup>
  );
}
