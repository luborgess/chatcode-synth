import OpenAI from "openai";

const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-9078e7704ce24715b0cc4b0bf947b0df',
  dangerouslyAllowBrowser: true
});

export async function sendMessage(messages: { role: string; content: string }[]) {
  try {
    console.log('Enviando mensagens para API:', messages);
    
    const completion = await deepseek.chat.completions.create({
      messages: messages.map(msg => ({
        role: msg.role as "user" | "assistant" | "system",
        content: msg.content
      })),
      model: "deepseek-chat",
    });

    console.log('Resposta da API:', completion.choices[0].message);
    return completion.choices[0].message;
  } catch (error) {
    console.error('Error calling Deepseek API:', error);
    throw error;
  }
}