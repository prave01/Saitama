import { Hono } from "hono";
import { McpClient } from "@mcp_client";

type Env = {
	Bindings: {};
};

const app = new Hono<Env>();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

export default app;
