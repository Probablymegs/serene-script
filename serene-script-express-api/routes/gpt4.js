import express from "express";
import OpenAI from "openai";
import { config } from "dotenv";

config();

//creates an array of sessions which will be used to store all the ongoing conversations
const sessions = [];

//creates a new route than can be imported to the index to allow for more specific urls such as localhost:3000/gpt4/getCompletion
let router = express.Router();

//creates a new instance of the openai api with the api key from the .env file
const openai = new OpenAI({
    apiKey: process.env.HACKED_API_KEY,
});

//creates a new post request that can be used to get a completion from the openai api
router.post("/getCompletion", async (req, res) => {
    //grabs the prompt and session id that are passed in from the front end
    let prompt = req.body.prompt;
    let sessionId = req.body.sessionId;

    //if the session id is -1, then it is a new session and we need to create a new session id
    if (sessionId == -1) {
        sessionId = sessions.length + 1;
    }

    let currentMessages;

    //creates a new message object that will be used to create a chat history that can be stored in the sessions array and sent to the openai api to give context to chatgpt
    let userMessage = { role: "user", content: `${prompt}` };

    //creates an array of system prompts that will be sent to the openai api to give important context to chatgpt
    let systemMessages = [
        {
            role: "system",
            content:
                'You are a therapy bot named Serenity that primarily answers questions about mental health. You may also answer questions about general health. If someone asks you about something non health related, you will say "Unfortunately I cannot answer questions that are not related to mental health."',
        },
        {
            role: "system",
            content: "When supplying a link to a resource, you will use resources based out of Alberta, Canada",
        },
        {
            role: "system",
            content:
                "If someone asks a mental health related question, you will supply them with a link to a resource that can help them if possible. Avoid messages like this \"I'm really sorry that you're feeling this way, but I'm unable to provide the help that you need. It's really important to talk things over with someone who can, though, such as a mental health professional or a trusted person in your life.\" in this context provide a url to a suicide hotline and other similar resources.",
        },
        {
            role: "system",
            content:
                "Once the user has asked a question that relates to health, you may answer questions that are not health related if they are related to the current context of the conversation.",
        },
        {
            role: "system",
            content:
                "Once the user has been provided with a url to a resource, limit the amount of times you reference that same resource unless the question is mental health related and is a high risk question. High risk questions qould be those related to suicide, depression, anxiety, etc.",
        },
    ];

    //if there is nothing in the sessions array at the index of the session id then we set the current messages list to the system prompts and the new user prompt
    //otherwise we grab the messages from session with that session id and add the new user message to the list
    if (!sessions[sessionId]) {
        currentMessages = [...systemMessages, userMessage];
    } else {
        currentMessages = sessions[sessionId];
        currentMessages.push(userMessage);
    }

    //adds all current messages to the session
    sessions[sessionId] = currentMessages;

    //sends the entire session history to the openai api and awaits the reponse
    const completion = await openai.chat.completions.create({
        messages: currentMessages,
        model: "gpt-4",
    });

    //adds the response from the openai api to the session history
    sessions[sessionId].push({
        role: "assistant",
        content: completion.choices[0].message.content,
    });

    //sends the response from the openai api to the front end along with the session id
    res.json({
        response: completion.choices[0].message.content,
        sessionId: sessionId,
    });

    console.log("completed");
});

//creates a new post request that can be used to get a point value for a task from the openai api
router.post("/analyzeTask", async (req, res) => {
    //grabs the prompt that is passed in from the front end
    let prompt = req.body.prompt;

    //creates an array of system prompts that will be sent to the openai api to give important context to chatgpt
    let systemMessages = [
        {
            role: "system",
            content:
                "You are a bot that analyzes tasks and assigns them an integer value based on the difficulty of the task. The higher the value, the more difficult the task is.",
        },
        {
            role: "system",
            content:
                "Make sure that your response is ONLY an integer value. Meaning a number with no text at all whatsoever.",
        },
    ];

    //sends the entire session history to the openai api and awaits the reponse
    const completion = await openai.chat.completions.create({
        messages: [
            ...systemMessages,
            {
                role: "user",
                content: `${prompt}`,
            },
        ],
        model: "gpt-4",
    });

    //sends the response from the openai api to the front end
    res.json({ response: completion.choices[0].message.content });

    console.log("completed");
});

export { router };
