import { apiLink } from "./apiLink";

const getCompletion = async (prompt, sessionId) => {
    let response = await fetch(`${apiLink}/gpt4/getCompletion?prompt="${prompt}"&sessionId="${sessionId}"`, {
        method: "POST",
        body: {prompt: prompt, sessionId: sessionId}
    });
    return response.json();
};

export { getCompletion };
