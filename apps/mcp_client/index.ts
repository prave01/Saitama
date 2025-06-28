import LLM_Client from "./Controller/chat";
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import * as readline from "readline";

const history = new InMemoryChatMessageHistory();

// this is from prave-main branch

history.addAIMessage(
  "You are a useful assistant for physics and learning it ,, give the response always in json format",
);

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

const client = new LLM_Client("http://127.0.0.1:11434", "gemma3:4b", "testing");

while (true) {
  const userInput = await askQuestion("You: ");

  if (userInput.toLowerCase() === "exit") {
    console.log("Exiting chat...");
    break;
  }

  // Save user message to history
  await history.addUserMessage(userInput);

  const result = await client.runLLM({
    content: history.getMessages(),
    stream: true,
  });

  const aiResponse = result?.Response;

  if (aiResponse) {
    // Save AI message to history
    await history.addAIMessage(aiResponse);
  }

  //console.log(`AI: ${aiResponse}`);
}
