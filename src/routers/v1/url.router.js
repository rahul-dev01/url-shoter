const express = require('express')

const URLRouter= express.Router()

URLRouter.post("/new" ,(req , res)=>{
    console.log(req.url)
    res.send("OK")
})

module.exports = {
    URLRouter
}