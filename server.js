const express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path");
    const nodemon = require("nodemon");
    const port = process.env.PORT || 5000;

// Sets up the Express App
// =============================================================
const app = express();
app.use(express.static(path.join(__dirname, 'public')));




app.get("/", function(req, res) {
    res.send("index.html");
  });

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Starts the server to begin listening
// =============================================================
app.listen(port,() =>{
    console.log('server started....')
   });
   