const express = require("express");
const app = express();

app.use(function(req, res, next) {
    res.locals.ua = req.get('User-Agent');
    console.log(res.locals.ua);
    next();
  });

// Route for input
app.get("/", function (req, res) {
    res.send("Parser");
});

app.get("/:input", function (req, res) {
    res.send(req.params.input);
});

exports.logger = function (req, res) {
    var user = {
        agent: req.header('user-agent'), // User Agent we get from headers
        referrer: req.header('referrer'), //  Likewise for referrer
        ip: req.header('x-forwarded-for') || req.connection.remoteAddress, // Get IP - allow for proxy
        screen: { // Get screen info that we passed in url post data
            width: req.param('width'),
            height: req.param('height')
        }
    };
    // Store the user in your database
    // User.create(user)...
    console.log("user", user);
    res.end();
}

app.listen(3000, headerParser);

function headerParser() {
    console.log("Listening on port 3000");
}