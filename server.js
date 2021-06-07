const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express(); // server oluşturmak için

app.use(cors()); //dış bağlantılar için kullanılıyor
app.use(morgan("dev")); // http istekleri için
app.use(bodyParser.json()); // gelen veriyi kontrol etmek için
app.use(bodyParser.urlencoded({extends: false}));

dotenv.config(); //çevresel değişkenler için

// mongodb2ye bağlanmak için
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to mongodb ...");
    }
});

app.listen(8080, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("8080 port listen ...");
    }
});