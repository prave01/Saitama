import OpenAI from "openai";

const client = new OpenAI({
	baseURL: "http://127.0.0.1:11434/v1",
	apiKey: "open-ai", // This can be any string with Ollama
});

async function run(){
 try {
  const response = await client.chat.completions.create({
   model: "gemma3:4b",
   messages: [
    {
     role: "user",
     content: "Give me top 10 cooking recipes that I must try",
    },
   ],
  });

  console.log(response.choices[0].message.content);
 } catch (error) {
  console.error("Error:", error);
 }
}

run();
