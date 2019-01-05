var friendsData = require("../data/friends.js");

module.exports = function (app) {
    // Basic route that sends the user first to the AJAX Page
 app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

 app.post("/api/friends", function(req, res) {
  var userInput = req.body;
  var userScores = userInput.scores;

  console.log(req.body);
   var totalDifference = 0;
   var matchingFriend;

for (var j = 0; j < friendsData.length; j++) {
  var currentFriendScore = friendsData[j].scores;
  var currentDifference = 0;
  for (var i = 0; i < currentFriendScore.length; i++) {
    currentDifference += Math.abs(userScores[i] - currentFriendScore[i]);
  
  }
  if (totalDifference === 0 || currentDifference < totalDifference) {
    totalDifference = currentDifference;
    matchingFriend = friendsData[j];
  }
}
  friendsData.push(userInput);

  res.json(matchingFriend);
 })
}

