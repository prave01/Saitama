import { z, ZodSchema } from "zod";
import { Ollama } from "@langchain/ollama";
import type { BaseMessage } from "@langchain/core/messages";
import chalk from "chalk";

// LLM_Client
export default class LLM_Client extends Ollama {
 public purpose;

 constructor(ollama_url: string, model: string, purpose: string) {
  super();
  this.baseUrl = ollama_url;
  this.purpose = purpose; // sets the purpose of each instances created
  this.model = model;
 }

 async runLLM(
  args: {
   content: string | Promise<BaseMessage[]>;
   stream?: boolean;
   log?: boolean;
  } = { log: false, content: "", stream: false },
 ) {
  try {
   if (!args?.stream) {
    const response = await this.invoke(await args.content);
    if (args.log) {
     console.log(response);
    }
    return { Response: response };
   }
   const response = await this.stream(await args.content);
   var final_response = "";
   for await (const chunks of response) {
    final_response = final_response + chunks;
    process.stdout.write(chalk.bgGreenBright(chunks));
   }
   return { Response: final_response };
  } catch (err) {
   console.error(err);
   return;
  }
 }
}
