import { User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  type: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export function ChatMessage({ type, content, timestamp }: ChatMessageProps) {
  return (
    <div className={cn(
      "flex gap-3 p-4",
      type === "system" && "bg-muted/50"
    )}>
      <div className="flex-shrink-0">
        {type === "user" ? (
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
            <Bot className="w-4 h-4 text-secondary-foreground" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">
            {type === "user" ? "Você" : type === "assistant" ? "Assistente" : "Sistema"}
          </span>
          <span className="text-xs text-muted-foreground">
            {timestamp.toLocaleTimeString()}
          </span>
        </div>
        <div className="mt-1 text-sm">
          {content}
        </div>
      </div>
    </div>
  );
}