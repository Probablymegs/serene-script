import express from "express";
const app = express();
const port = 3000;

import { router as gpt4 } from "./routes/gpt4.js";
app.use("/gpt4", gpt4);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
