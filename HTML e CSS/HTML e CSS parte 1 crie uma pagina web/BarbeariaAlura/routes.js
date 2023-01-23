const express = require('express')
const routes = express.Router()


//create routes
routes.get("/", function(req, res) {
    return res.render("index")
})

routes.get("/contacto", function(req, res) {
    return res.render("contacto")
})

routes.get("/produtos", function(req, res) {
    return res.render("produtos")
})

module.exports = routes