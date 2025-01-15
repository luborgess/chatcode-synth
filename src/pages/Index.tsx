import { Panel, PanelGroup } from "react-resizable-panels";
import { ResizablePanel, ResizableHandle } from "@/components/ResizablePanel";
import { Chat } from "@/components/Chat";

export default function Index() {
  return (
    <div className="h-screen w-full bg-background">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={30} minSize={20}>
          <ResizablePanel>
            <Chat />
          </ResizablePanel>
        </Panel>
        <ResizableHandle />
        <Panel minSize={30}>
          <ResizablePanel className="bg-editor-background">
            <div className="p-4 text-editor-foreground">
              <h2 className="text-lg font-medium mb-2">Editor</h2>
              <p className="text-sm text-muted-foreground">
                O editor será implementado na próxima iteração.
              </p>
            </div>
          </ResizablePanel>
        </Panel>
      </PanelGroup>
    </div>
  );
}