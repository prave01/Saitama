import { Hono } from "hono";
import { McpClient } from "@mcp_client";
import { cors } from "hono/cors";

type Env = {
	Bindings: {};
};

const app = new Hono<Env>();
type Corsoptions = Parameters<typeof cors>[0];

const cors_options: Corsoptions = {
	origin: "http://localhost:3000",
};

app.use("*", cors(cors_options));

app.route("/api/mcp_server/");

app.get("/", (c) => {
	return c.text("Hello Hono!");
});
