
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

//adding CSS
server.use(express.static('public'))
server.use(routes)


//configure template engine
server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


//start server
server.listen(3000, function() {
    console.log("server is running")
})