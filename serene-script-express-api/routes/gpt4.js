import express from "express";
import OpenAI from "openai";

let router = express.Router();
const openai = new OpenAI({
    apiKey: "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",
});

router.get("/getCompletion", async (req, res) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `${req.query.prompt}` }],
        model: "gpt-4",
    });

    res.send(completion.choices[0].message.content);
    console.log("completed");
});

export { router };
