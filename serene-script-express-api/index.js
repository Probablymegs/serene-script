import express from "express";
import cors from "cors";

//creates a new express app
const app = express();
const port = 9000;

//enables cors to circumvent browser security issues
app.use(cors());

//enables the json parser so we can retrieve data from the front end
app.use(express.json({ limit: "50mb" }));

//enables the urlencoded parser so we can retrieve data from the front end
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//imports the gpt4 route so it can be exposed to the internet
import { router as gpt4 } from "./routes/gpt4.js";
app.use("/gpt4", gpt4);

//starts the api and makes it listent to the specified port
app.listen(port, () => {
    console.log(`serene script api listening on port ${port}`);
});
