import { StringLiteralUnion } from "hono/utils/types";
import OpenAI from "openai";

class LLM_Client {
 private client_url: string;
 private client_name: string;
 private client?: OpenAI;

 constructor(clientUrl: string, clientName: string) {
  this.client_url = clientUrl;
  this.client_name = clientName;
  this.client = undefined;
 }

 // Create llm client instance with the OpenAi Api
 createClient() { }

 runLLM() { }
}
