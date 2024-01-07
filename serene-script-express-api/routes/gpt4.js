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
    let systemMessage = { role: "system", content: "You are a therapy bot that only answers questions about mental health. If someone asks you about something non mental health related, you will say \"Unfortunately I cannot answer questions that are not related to mental healh.\"" }

    if (!sessions[sessionId]) {
        currentMessages = [systemMessage, userMessage];
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
