import { Panel, PanelGroup } from "react-resizable-panels";
import { ResizablePanel, ResizableHandle } from "@/components/ResizablePanel";
import { Chat } from "@/components/Chat";
import { CodeEditor } from "@/components/CodeEditor";
import { SandpackProvider } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

const defaultCode = `import React from 'react';

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}`;

export default function Index() {
  return (
    <div className="h-screen w-full bg-background">
      <SandpackProvider
        theme={nightOwl}
        template="react-ts"
        files={{
          "/App.tsx": defaultCode,
        }}
        options={{
          recompileMode: "delayed",
          recompileDelay: 500,
        }}
      >
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
      </SandpackProvider>
    </div>
  );
}