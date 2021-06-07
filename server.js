const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(morgan("dev")); // http istekleri için
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));

dotenv.config();

app.listen(8080, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("8080 port listen ...");
    }
});