
    
// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var packmembers = require('../data/friends.js');


module.exports = function(app) {
  //  display JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
     res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userInput = req.body;

		var userResponses = userInput.scores;

		// Compute best friend match
    var matchName = '';
    var dogMatchName = '';
		//var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < packmembers.length; i++) {

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(packmembers[i].scores[j] - userResponses[j]);
			}

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				totalDifference = diff;
        matchName = packmembers[i].humanName;
        dogMatchName = packmembers[i].dogs[0].name;
			//	matchImage = friends[i].photo;
			}
		}

  
  res.json({status: 'OK', matchName: matchName, dogMatchName: dogMatchName}); //add matchImage: matchImage}); later

});

}
