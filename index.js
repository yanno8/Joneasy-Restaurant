const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const route = require("./routes/routes");
require("dotenv").config();

// mongoDb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Successful MongoDB connection !"))
  .catch((err) => console.log("Failed MongoDB connection !" + " " + err));
    
// Middleware for session
app.use(session({
    secret: 'your secret',
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

// Setting routes
app.use(route);

// listening server
server.listen(process.env.PORT, () => {
  console.log("Connected successful on port " + process.env.PORT);
}); 