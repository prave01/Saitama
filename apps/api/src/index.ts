import { Hono } from "hono";

type Env = {
	Bindings: {
		NEW: string;
	};
};

const app = new Hono<Env>();

app.get("/", (c) => {
	return c.text("Hello Hono!" + c.env.NEW);
});

export default app;
