
const path = require('path');

const mysql = require('mysql2');

const dotenv = require('dotenv');



dotenv.config({ path: './.env'});

const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});



const publicDirectory = path.join(__dirname,'./public');

app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended:false }));

app.use(express.json());

app.use(cookieParser());

app.set('view engine','hbs');

 




app.use('/', require('./routes/pages.js'));
app.use('/auth', require('./routes/auth'));



app.listen(5000, ()=>
console.log('server up') 
);