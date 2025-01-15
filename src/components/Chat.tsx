import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface Message {
  id: number;
  type: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "system",
      content: "Bem-vindo ao editor interativo! Digite uma mensagem para começar.",
      timestamp: new Date(),
    },
  ]);

  const handleSend = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "user",
        content,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}