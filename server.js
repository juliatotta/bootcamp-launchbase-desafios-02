const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cards = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {
    return res.render("courses", { items: cards })
})

server.get("/about", function(req, res) {
    about = {
        img_url: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg",
        name: "Rocketseat",
        content: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        list: [
            {name: "JavaScript"},
            {name: "| ReactJS"},
            {name: "| ReactNative"},
            {name: "| NodeJS"}
        ],
        links: [
            {name: "GitHub" , url: "https://github.com/Rocketseat"},
            {name: "Instagram" , url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Facebook" , url: "https://www.facebook.com/rocketseat"},
        ]
    }

    return res.render("about", { about })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5500, function(){
    console.log("server is running")
})
