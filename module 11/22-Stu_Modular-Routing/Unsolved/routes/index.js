// TODO: Import express
const express = require("express");

// TODO: Import modules for tips/feedback
const feedback = require("./feedback");
const tips = require("./tips");

// TODO: Create app variable to create an instance of express()
const app = express();

// TODO: Use our routes
app.use("/feedback", feedback);
app.use("/tips", tips);

// TODO: Export app
module.exports = app;
