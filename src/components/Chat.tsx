import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { sendMessage } from "../services/deepseek";
import { useToast } from "@/hooks/use-toast";
import { useSandpack } from "@codesandbox/sandpack-react";

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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { sandpack } = useSandpack();

  const processCodeBlocks = (content: string) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let match;
    
    while ((match = codeBlockRegex.exec(content)) !== null) {
      const language = match[1] || 'javascript';
      const code = match[2].trim();
      
      console.log('Código detectado:', { language, code });
      
      // Atualiza o código no editor
      if (language.toLowerCase().includes('typescript') || 
          language.toLowerCase().includes('javascript') ||
          language.toLowerCase().includes('tsx') ||
          language.toLowerCase().includes('jsx')) {
        sandpack.updateFile("/App.tsx", code);
      }
    }
    
    return content;
  };

  const handleSend = async (content: string) => {
    try {
      setIsLoading(true);
      
      // Adiciona mensagem do usuário
      const userMessage: Message = {
        id: Date.now(),
        type: "user",
        content,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage]);

      // Prepara mensagens para a API
      const apiMessages = messages.concat(userMessage).map(msg => ({
        role: msg.type,
        content: msg.content
      }));

      // Envia para a API
      const response = await sendMessage(apiMessages);

      // Adiciona resposta do assistente
      if (response) {
        const assistantContent = response.content;
        // Processa blocos de código antes de adicionar a mensagem
        processCodeBlocks(assistantContent);
        
        setMessages(prev => [...prev, {
          id: Date.now(),
          type: "assistant",
          content: assistantContent,
          timestamp: new Date(),
        }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar a mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
}