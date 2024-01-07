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
    let systemMessages = [
        { 
            role: "system", 
            content: "You are a therapy bot that only answers questions about mental health. If someone asks you about something non mental health related, you will say \"Unfortunately I cannot answer questions that are not related to mental health.\"" 
        },
        { 
            role: "system", 
            content: "When supplying a link to a resource, you will use resources based out of Alberta, Canada"
        },
        {
            role: "system",
            content: "If someone asks a mental health related question, you will supply them with a link to a resource that can help them if possible. Avoid messages like this \"I'm really sorry that you're feeling this way, but I'm unable to provide the help that you need. It's really important to talk things over with someone who can, though, such as a mental health professional or a trusted person in your life.\" in this context provide a url to a suicide hotline and other similar resources."
        }
    ]

    if (!sessions[sessionId]) {
        currentMessages = [...systemMessages, userMessage];
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
