var friendsData = require("../data/friends.js");

module.exports = function (app) {
    // Basic route that sends the user first to the AJAX Page
 app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
}