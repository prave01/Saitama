import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import chalk from "chalk";

class McpClient {
	private server_url: URL;
	public client: Client;

	constructor(server_url?: URL) {
		this.server_url = server_url || new URL("http://localhost:8080/sse");
		this.client = new Client({ name: "test", title: "", version: "" });
	}

	async connectServer() {
		if (!this.server_url) return "Server url not provided";
		try {
			const transport = new SSEClientTransport(this.server_url);
			await this.client.connect(transport);
			console.log(chalk.magenta(`Server connected at ${this.server_url}`));
		} catch (err) {
			console.error("Error connecting to server:", err);
		}
	}
}

const mcp = new McpClient();
await mcp.connectServer();
