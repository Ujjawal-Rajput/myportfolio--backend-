const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); // Allow all origins (use cautiously in production)

// POST route
app.post("/", (req, res) => {
    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ error: "Email and message are required." });
    }

    // Handle the data (e.g., store in a database, send an email, etc.)
    console.log("Contact form submitted:", { email, message });

    // Send a response back to the client
    res.json({ message: "Success: Message submitted successfully" });
});

// Export the contact function
module.exports = app;
