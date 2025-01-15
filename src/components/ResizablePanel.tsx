import { PanelResizeHandle } from "react-resizable-panels";

interface ResizablePanelProps {
  children: React.ReactNode;
  className?: string;
}

export function ResizablePanel({ children, className }: ResizablePanelProps) {
  return (
    <div className={`flex h-full ${className}`}>
      {children}
    </div>
  );
}

export function ResizableHandle() {
  return (
    <PanelResizeHandle className="w-2 bg-muted hover:bg-primary/10 transition-colors">
      <div className="h-full w-[1px] bg-border mx-auto" />
    </PanelResizeHandle>
  );
}