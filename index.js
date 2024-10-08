const express = require('express');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


const whitelist = process.env.CORS_ORIGIN
  ? JSON.parse(process.env.CORS_ORIGIN)
  : ["*"];
  
app.use(
    cors({
      origin: whitelist,
      credentials: true,
      maxAge: 14400,
    })
  );


// ================================================================
app.use(cors());  // Allows all origins (be cautious in production)
// OR Restrict to specific origin (e.g., your frontend running on port 3000)
// app.use(cors({
//     origin: '*', // Replace with your frontend URL
//     methods: ['GET', 'POST', 'OPTIONS'] // Allowed methods
// }));
// app.options('/contact', cors()); // Preflight handling for contact route

// ================================================================

app.get("/", (req, res)=>{
    res.status(200).json({
        msg:"foo bar"
    });
})


app.post("/contact", (req, res) => {
    const { email, message } = req.body;

    // Here you can handle the data, e.g., store in a database, send an email, etc.
    console.log("Contact form submitted:", { email, message });

    // Send a response back to the client
    res.json({ message: "Success : Message submitted sucessfully" });
});

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})