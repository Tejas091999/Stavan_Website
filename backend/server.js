const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// Contact API
app.post("/contact", (req, res) => {
    const { name, email } = req.body;

    console.log("New Contact:", name, email);

    res.json({
        message: "Data received successfully"
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});