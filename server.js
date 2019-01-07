// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 3000;
var app = express();
// var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
  


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  


 