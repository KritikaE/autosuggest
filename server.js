const express = require("express");
const app = express();
const cors= require('cors');
const port = process.env.PORT || 6700; //means: existing port (env var)  or 6700 if not set (any random)



//tells app where static files like html, css, js are stored. here it is stored on frontend

app.use(cors({
  origin: 'http://localhost:6700'
}));

// 2. Create the proxy endpoint
app.get('/api/users', async (req, res) => {
    try {
        // Backend makes the external request safely
        const apiResponse = await fetch('https://randomuser.me/api/');
        const data = await apiResponse.json();
        
        // Send data back to vanilla JS
        res.json(data);
    } catch (error) {
        console.error("Proxy error:", error);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
});
app.use(express.static("frontend"));

app.listen(port, function(){
    console.log("Hey, the app is running on http://localhost:" +port);
});