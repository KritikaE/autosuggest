const express = require("express");
const app = express();
const port = process.env.PORT || 6700; //means: existing port (env var)  or 6700 if not set (any random)

//tells app where static files like html, css, js are stored. here it is stored on frontend
app.use(express.static("frontend"));

app.listen(port, function(){
    console.log("Hey, the app is running on http://localhost:" +port);
});