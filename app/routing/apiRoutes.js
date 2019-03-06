
    
// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

module.exports = function(app) {
  //  display JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    return res.json(packmembers);
  });


  // handle incoming survey results.
  // handle  compatibility logic.

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend= req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    newfriend.routeName = newfriend.humanName.replace(/\s+/g, "").toLowerCase();
    newfriend.humanName = newfriend.humanName.replace(/\s+/g, "").toLowerCase();
    // newfriend.dogs[i].name = newfriend.dog[0].name.replace(/\s+/g, "").toLowerCase();
    // newfriend.dogs[i].size = 

  console.log(newfriend);

  //add new friend to pack 
  packmembers.push(newfriend);

  res.json(newfriend);
});

}