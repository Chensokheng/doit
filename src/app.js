const hbs = require("hbs");
const path = require("path");
const express = require('express');
const app = express();

// port for every host
const port = process.env.PORT || 3000;



//connect to the public folder
const partialDir = path.join(__dirname, '../templates/partials');
const templateView = path.join(__dirname, '../templates/views');
const publicDir = path.join(__dirname, "../public");


/* Connect with the hbs*/
app.set('view engine', 'hbs');
app.set("views", templateView);
hbs.registerPartials(partialDir);

/* Connect to the static file in the public folder */
app.use(express.static(publicDir));


/* This is the home page route */
app.get('', (req, res) => {
    res.render('index');
});


/* This is the sign up route */
app.get('/signup', (req, res) => {
    res.render('signup');
})



/* Hosting the web on the port given */
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});