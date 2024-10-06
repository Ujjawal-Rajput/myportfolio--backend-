const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); // Allow all origins (use cautiously in production)

// GET route
app.get("/", (req, res) => {
    res.status(200).json({ msg: "foo bar" });
});

// Export the Express app for use as a serverless function
module.exports = app;
