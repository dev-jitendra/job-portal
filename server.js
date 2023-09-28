// Import the Express.js module
import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

// Create an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send("Welcome");
});

// Start the server and listen on port 8000
const port = process.env.PORT || 1200
app.listen(port, () => {
    console.log(`Node Server Is Running iN ${process.env.DEV_MODE} on port no. ${port}` );
});
