import { useEffect } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const defaultCode = `import React from 'react';

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}`;

const SandpackWrapper = () => {
  const { sandpack } = useSandpack();

  useEffect(() => {
    console.log("Sandpack ready");
  }, []);

  return (
    <Tabs defaultValue="editor" className="w-full">
      <TabsList>
        <TabsTrigger value="editor">Editor</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="console">Console</TabsTrigger>
      </TabsList>
      <TabsContent value="editor">
        <SandpackCodeEditor
          showLineNumbers
          showInlineErrors
          wrapContent
          className="h-[calc(100vh-12rem)]"
        />
      </TabsContent>
      <TabsContent value="preview">
        <SandpackPreview className="h-[calc(100vh-12rem)]" />
      </TabsContent>
      <TabsContent value="console">
        <SandpackConsole className="h-[calc(100vh-12rem)]" />
      </TabsContent>
    </Tabs>
  );
};

export function CodeEditor() {
  return (
    <div className="w-full h-full">
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
        <SandpackLayout>
          <SandpackWrapper />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}