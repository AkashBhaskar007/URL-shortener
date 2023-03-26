/* eslint-disable no-console */
require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');

require('./src/db/dbconfig');

const routes = require('./src/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Error ', err);
    }
    console.log('App is running on port ', process.env.PORT);
});
