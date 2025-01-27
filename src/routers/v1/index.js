const express = require('express')
const { models } = require('mongoose')
const { URLRouter } = require('./url.router')

const v1Router= express.Router()

v1Router.use("/short-url",URLRouter)

module.exports = {
    v1Router
}