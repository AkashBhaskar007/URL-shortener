require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Error ', err);
    }
    console.log('App is running on port ', process.env.PORT);
});
