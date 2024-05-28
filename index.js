require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./Router/router');
require('./DB/connection');

const todoServer = express();

// Middleware
todoServer.use(cors());
todoServer.use(express.json());

// Routes
todoServer.use(router);

const PORT = process.env.PORT || 3000;

// Start the server
todoServer.listen(PORT, () => {
    console.log(`Project server started at port ${PORT}`);
});

// Default route
todoServer.get("/", (req, res) => {
    res.status(200).send(`<h1>Project server started and waiting for client request</h1>`);
});
