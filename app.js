const express = require("express");
const app = express();

app.get("*", function (req, res) {
    const output = {
        IP: req.headers["x-forwarded-for"].split(',')[0], 
        language: req.headers["accept-language"].split(',')[0],
        OS: req.headers["user-agent"].split('(')[1].split(')')[0],
    }
    res.send(output);
});

app.listen(3200, () => console.log("Listening..."));