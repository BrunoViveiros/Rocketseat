const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const recipes = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server
});

//ROUTES
server.get("/", (req, res) => res.render("home", { recipes }));

server.get("/about", (req, res) => res.render("about"));

server.get("/recipes", (req, res) => res.render("recipes", { recipes }));

server.get("/recipe/:index", (req, res) => {
  const recipeIndex = req.params.index;

  return res.render("recipe", { recipe: recipes[recipeIndex] });
});

server.listen(5000, () => console.log("server is running"));
