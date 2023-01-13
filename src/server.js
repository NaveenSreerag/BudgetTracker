require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const DBConnect = require("./config/db");


// routes
const userRoutes= require("./routes/userRoutes")

const app =express();

// database connection
DBConnect();

// middleware 
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));




app.use("/api/v1/",userRoutes)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server running port ${PORT}`);
})