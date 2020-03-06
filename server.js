const express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    nodemon = require("nodemon");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 5000;



app.get("/", function(req, res) {
    res.render(path.join(__dirname, "index.html"));
  });

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  