const express = require("express");
const app = express();

app.get("*", function (req, res) {
    // const jj = req.headers["user-agent"];
    // console.log("split jj", jj.split('(')[3].split(')')[0]);

    const jb = {
        IP: req.headers["x-forwarded-for"].split(',')[0], 
        language: req.headers["accept-language"].split(',')[0],
        OS: req.headers["user-agent"].split('(')[1].split(')')[0],
    }
    res.send(req.headers);
    // res.send(jb);
});

app.listen(3200, () => console.log("Listening..."));