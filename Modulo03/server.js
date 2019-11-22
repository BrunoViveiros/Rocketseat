const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/27422266?s=460&v=4",
    name: "Bruno Fernandes",
    role: "Aluno - Rocketseat",
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, suscipit saepe labore adipisci nostrum ipsum. <a href="#" target="_blank">Site</a>',
    links: [
      { name: "Github", url: "https://github.com/RayZyphs" },
      { name: "Facebook", url: "https://www.facebook.com/bruferviveiros" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/bruno-fv" }
    ]
  };

  return res.render("about", { about });
});

server.get("/portfolio", function(req, res) {
  return res.render("portfolio", { items: videos });
});

server.get("/video", function(req, res) {
  const id = req.query.id;

  const video = videos.find(function(video) {
    return video.id == id;
  });

  if (!video) {
    return res.send("Video not found!");
  }

  return res.render("video", { item: video });
});

server.listen(5000, function() {
  console.log("server is running");
});
