const express = require("express");
const app = express();
const path = require('path');
const entrada = require('./routes/entrada');

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname ,'public')))



app.get('/', (req, res) => {
    res.render('index');
});




app.use('/entrada', entrada);

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server running")
});