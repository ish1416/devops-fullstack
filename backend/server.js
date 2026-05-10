const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from backend"
    });
});

app.listen(5005, () => {
    console.log("Server running on port 5005");
});