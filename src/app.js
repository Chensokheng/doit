const express = require('express');
const hbs = require("hbs");
const path = require("path");

const app = express();

// port for every host
const port = process.env.PORT || 3000;



//connect to the public folder
const publicDir = path.join(__dirname, "../public");
const templateView = path.join(__dirname, '../templates/views');
const partialDir = path.join(__dirname, '../templates/partials');

// connect with the hbs
app.use(express.static(publicDir));
app.set('view engine', 'hbs');
app.set("views", templateView);
hbs.registerPartials(partialDir);



// The default route
app.get('', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});