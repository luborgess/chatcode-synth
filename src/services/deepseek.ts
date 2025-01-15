import OpenAI from "openai";

const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-9078e7704ce24715b0cc4b0bf947b0df',
  dangerouslyAllowBrowser: true // Adicionando esta opção para permitir uso no navegador
});

export async function sendMessage(messages: { role: string; content: string }[]) {
  try {
    const completion = await deepseek.chat.completions.create({
      messages: messages.map(msg => ({
        role: msg.role as "user" | "assistant" | "system",
        content: msg.content
      })),
      model: "deepseek-chat",
    });

    return completion.choices[0].message;
  } catch (error) {
    console.error('Error calling Deepseek API:', error);
    throw error;
  }
}