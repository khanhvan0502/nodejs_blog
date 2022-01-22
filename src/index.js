const express = require('express');
const morgan = require('morgan');
const path = require('path');

const handlebars  = require ('express-handlebars');
// const { engine } = require ('express-handlebars');
const app = express();
const port = 3000;

const route= require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

//XMLHttpRequest, fetch, axios  gửi dữ liệu lên server

//http logger
app.use(morgan('combined'));

//temlate engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.set("views", path.join(__dirname, 'resources/views'));
// console.log(__dirname);

//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})