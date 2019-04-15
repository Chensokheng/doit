const express = require('express');
const app = express();

// port for every host
const port = process.env.PORT || 3000;
const path = require("path");


//connect to the public folder
const publicDir = path.join(__dirname, "../public");
const viewDir = path.join(__dirname, '../views');
app.use(express.static(publicDir));

// connect with the hbs
const hbs = require("hbs");
app.set('view engine', 'hbs');
app.set("views", viewDir);



// The default route
app.get('', (req, res) => {
    res.render('index');
})
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})