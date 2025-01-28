const express = require('express')
const URLRouter= express.Router()

const { CreateNewURLController } = require("./../../controllers/url.controller")

URLRouter.post("/new" , CreateNewURLController)



module.exports = {
    URLRouter
}