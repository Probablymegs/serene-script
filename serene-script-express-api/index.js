import express from "express";
import cors from "cors";

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

import { router as gpt4 } from "./routes/gpt4.js";
app.use("/gpt4", gpt4);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
