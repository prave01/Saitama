import { Ollama } from "@langchain/ollama";
import type { Response } from "openai/internal/builtin-types";
import type Stream from "stream";

const Ollama_client = new Ollama({
 model: "gemma3:4b",
 baseUrl: "http://127.0.0.1:11434/",
});

import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";



const history = new InMemoryChatMessageHistory();
history.addAIMessage("You are a chef AI assistance")
history.addUserMessage("give me something to prepare for today's lunch, and my name is pravee")

history.add

const response = await Ollama_client.stream(await history.getMessages());

for await (const res of response) {
 process.stdout.write(res);
}
//import * as ollama from "@langchain/community/chat_models/ollama";
//
//const model = new ollama.ChatOllama({
//  baseUrl: "http://localhost:11434", // Default Ollama URL
//  model: "gemma3:4b", // The model you pulled with Ollama
//});
//
//async function main() {
//  const response = await model.invoke("What is the capital of France?");
//  console.log(response.content);
//}
//
//main();
//
//console.log(response);

//for (const i of response.text){
// console.log(i)
//}

//const client = new OpenAI({
//	apiKey: "openai",
//	baseURL: "http://127.0.0.1:1434/v1",
//});
//
//const params<T>: OpenAI.Chat.ChatCompletionCreateParams<T>= {
//
//};
//
//const response = await client.chat.completions.create{
//}
