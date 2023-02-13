const cookieParser = require('cookie-parser');
const express = require('express');
const { connect } = require('http2');
const mongoose = require('mongoose');
const connectDB = require('./Database/connectDB');
const { route } = require('./Routes/Routes');
const routes = require('./Routes/Routes');

const app = express();

app.use(express.json());
app.use(cookieParser());


const url = 'mongodb+srv://zawiyarkhan:Hello1234@cluster0.ujvzuvt.mongodb.net/IBAOVERFLOW?retryWrites=true&w=majority';
const port = 3000;

const start = async() =>{
    try {
        await connectDB(url);
        app.listen(port, ()=>{
            console.log("server is listening on PORT 3000");
        })
    } catch (error) {
        console.log(error)
    }
}
app.use(routes);
start();