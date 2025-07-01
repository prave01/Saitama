import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const transport = new StreamableHTTPClientTransport(
  new URL("http://localhost:8080/mcp"),
  { sessionId: "/mcp" },
);
const client = new Client(
  {
    clientInfo: { name: "your-client", version: "1.0.0" },
  },
  { capabilities: {} },
);
await client.connect(transport);
