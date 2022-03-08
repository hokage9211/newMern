const express=require("express")
const dotenv=require("dotenv")
dotenv.config({
    path:"./.env"
})
const app=require("./app")
console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log("listening on port 3200")
})