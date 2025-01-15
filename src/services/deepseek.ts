import OpenAI from "openai";

const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
});

export async function sendMessage(messages: { role: string; content: string }[]) {
  try {
    const completion = await deepseek.chat.completions.create({
      messages: messages,
      model: "deepseek-chat",
    });

    return completion.choices[0].message;
  } catch (error) {
    console.error('Error calling Deepseek API:', error);
    throw error;
  }
}