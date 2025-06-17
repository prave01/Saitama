"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openai_1 = require("openai");
var client = new openai_1.default({
    baseURL: "http://127.0.0.1:11434",
    apiKey: "open-ai",
});
var response = await client.chat.completions.create({
    model: "gemma3:4b",
    messages: [
        { role: "user", content: "Give me top 10 cooking recipes that i must try" },
    ],
});
console.log(response);
