import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("Server ready"));
app.listen(port, () => console.log("Server listening", port));
