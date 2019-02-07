require('dotenv').config();
let express = require('express');
let app = express();
let bodyparser = require('body-parser');
let sequelize = require('./bookdb');
let books = require('./controller/bookcontroller');

sequelize.sync();
app.use(bodyparser.json());
app.use(require('./middleware/headers'));
app.use('/books', books)
app.listen('3000', () => {
    console.log('listening on 3000')
})