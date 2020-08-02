const express = require('express')
const nunjucks = require('nunjucks')
const cards = require("./data")
const menuCards = require("./menu")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function (req, res) {

    return res.render("home", { items: cards })
})

server.get("/about", function (req, res) {
    return res.render("about")
})

server.get("/menu", function (req, res) {

    return res.render("menu", { items: menuCards })
})

server.listen(5500, function () {
    console.log("server is running")
})