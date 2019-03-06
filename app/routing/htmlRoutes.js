
// Pull in required dependencies
var path = require('path');

module.exports = function(app) {

    //     GET Route to `/survey` that displays the survey page.
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //   default, catch-all route that leads to `home.html` which displays the home page.
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}