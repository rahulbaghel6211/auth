const express = require("express");
const connect=require("./configs/db")

 const usersController = require("./controllers/users.controllers");
const {register,login}=require("./controllers/auth.controller")
const app = express();

app.use(express.json());

app.use("/users", usersController); 

app.post("/register",register)
app.post("/login",login)



module.exports = app;
