import express from "express";
import OpenAI from "openai";
import { config } from "dotenv";

config();

const sessions = [];

let router = express.Router();
const openai = new OpenAI({
    apiKey: process.env.HACKED_API_KEY,
});

router.post("/getCompletion", async (req, res) => {
    let prompt = req.body.prompt;
    let sessionId = req.body.sessionId;

    if (sessionId == -1) {
        sessionId = sessions.length + 1;
    }

    let currentMessages;
    let userMessage = { role: "user", content: `${prompt}` };

    if (!sessions[sessionId]) {
        currentMessages = [userMessage];
    } else {
        currentMessages = sessions[sessionId];
        currentMessages.push(userMessage);
    }

    sessions[sessionId] = currentMessages;

    const completion = await openai.chat.completions.create({
        messages: currentMessages,
        model: "gpt-4",
    });

    sessions[sessionId].push(userMessage);
    sessions[sessionId].push({ role: "assistant", content: completion.choices[0].message.content });

    res.json({ response: completion.choices[0].message.content, sessionId: sessionId });

    console.log("completed");
});

export { router };
