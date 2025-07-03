import { Hono } from "hono";

const MCP_ROUTER = new Hono();

MCP_ROUTER.post("/start_mcp"); // CONTROLLER COMMING IN

export default MCP_ROUTER;
