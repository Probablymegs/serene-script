import { apiLink } from "./apiLink";

const getCompletion = async (prompt, sessionId) => {
    let response = await fetch(`${apiLink}/gpt4/getCompletion`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt, sessionId: sessionId }),
    });
    return response.json();
};

export { getCompletion };
