import { apiLink } from "./apiLink";

const getCompletion = async (prompt) => {
    let response = await fetch(`${apiLink}/gpt4/getCompletion?prompt="${prompt}"`);
    return response.json();
};

export { getCompletion };
