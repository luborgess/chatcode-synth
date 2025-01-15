import {
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SandpackWrapper = () => {
  const { sandpack } = useSandpack();

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
      <SandpackLayout>
        <SandpackWrapper />
      </SandpackLayout>
    </div>
  );
}