const express = require("express");
const app = express();
const routesEntradas = require('./routes/entradas');
const routesSaidas = require('./routes/saidas');
const path = require('path')

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname ,'public')))

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




app.get('/', (req, res) => {
    res.render('index');
});




app.use('/entradas', routesEntradas);
app.use('/saidas', routesSaidas);


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server running")
});