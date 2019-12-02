const express = require("express");
const recipes = require("./data");

const routes = express.Router();

//MAIN
routes.get("/", (req, res) => res.render("main/home", { recipes }));

routes.get("/about", (req, res) => res.render("main/about"));

routes.get("/recipes", (req, res) => res.render("main/recipes", { recipes }));

routes.get("/recipe/:index", (req, res) => {
  const recipeIndex = req.params.index;

  return res.render("main/recipe", { recipe: recipes[recipeIndex] });
});

//ADMIN

routes.get("/admin/", (req, res) => res.render("admin/index")); // Mostrar a lista de receitas

module.exports = routes;
