import express from "express";
import OpenAI from "openai";
import { config } from "dotenv";

config();

let router = express.Router();
const openai = new OpenAI({
    apiKey: process.env.HACKED_API_KEY,
});

router.get("/getCompletion", async (req, res) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `${req.query.prompt}` }],
        model: "gpt-4",
    });

    res.json({ response: completion.choices[0].message.content });
    console.log("completed");
});

export { router };
