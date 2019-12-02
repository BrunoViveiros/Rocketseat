const express = require("express");
const recipes = require("./data");

const routes = express.Router();

//MAIN
routes.get("/", (req, res) => res.render("home", { recipes }));

routes.get("/about", (req, res) => res.render("about"));

routes.get("/recipes", (req, res) => res.render("recipes", { recipes }));

routes.get("/recipe/:index", (req, res) => {
  const recipeIndex = req.params.index;

  return res.render("recipe", { recipe: recipes[recipeIndex] });
});

module.exports = routes;
