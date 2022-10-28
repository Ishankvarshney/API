const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const {todoRouter} = require('./api/todo');
const app = express();


app.use(bodyParser.json());
app.use(todoRouter);



mongoose.connect("mongodb://0.0.0.0:27017/ecom");

app.get("/", (req, res) => {
    return res.status(200).send({msg: "hello world"})
})
app.listen(8000, () => {
    console.log('App is listening on http://localhost:8000');
});