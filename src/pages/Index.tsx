import { Panel, PanelGroup } from "react-resizable-panels";
import { ResizablePanel, ResizableHandle } from "@/components/ResizablePanel";
import { Chat } from "@/components/Chat";
import { CodeEditor } from "@/components/CodeEditor";

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
          <ResizablePanel>
            <CodeEditor />
          </ResizablePanel>
        </Panel>
      </PanelGroup>
    </div>
  );
}