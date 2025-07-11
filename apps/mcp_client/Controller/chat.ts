import { Ollama } from "@langchain/ollama";
import type { BaseMessage } from "@langchain/core/messages";
import chalk from "chalk";

type LLMArgs = {
  content: string | Promise<BaseMessage[]>;
  stream?: boolean;
  log?: boolean;
};

export default class LLM_Client extends Ollama {
  public purpose: string;


  constructor(ollama_url: string, model: string, purpose: string) {
    super({ baseUrl: ollama_url, model });

    this.purpose = purpose;
  }

  async runLLM(args: LLMArgs) {
    try {
      const content = await args.content;

      if (!args.stream) {
        const response = await this.invoke(content);
        if (args.log) {
          console.log(response);
        }

        return { Response: response };
      }

      const response = await this.stream(content);
      let final_response = "";

      console.log(chalk.blue("AI:"));
      for await (const chunk of response) {
        final_response += chunk;
        process.stdout.write(chalk.yellow(chunk));
      }

      return { Response: final_response };
    } catch (err) {
      console.error(err);
      return;
    }
  }
}
