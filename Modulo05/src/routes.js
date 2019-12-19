const express = require("express");
const adminRecipes = require("./app/controllers/recipes");
const adminChefs = require("./app/controllers/chefs");

const txtData = require("./data");

const routes = express.Router();

//MAIN
routes.get("/", (req, res) => res.render("main/home", { recipes: txtData }));

routes.get("/about", (req, res) => res.render("main/about"));

routes.get("/recipes", (req, res) =>
  res.render("main/recipes", { recipes: txtData })
);

routes.get("/recipe/:index", (req, res) => {
  const recipeIndex = req.params.index;

  return res.render("main/recipe", { recipe: txtData[recipeIndex] });
});

routes.get("/admin", adminRecipes.redirectIndex); // Mostrar a lista de receitas

//ADMIN recipes
routes.get("/admin/recipes", adminRecipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", adminRecipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", adminRecipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", adminRecipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", adminRecipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", adminRecipes.put); // Editar uma receita
routes.delete("/admin/recipes", adminRecipes.delete); // Deletar uma receita

//ADMIN chefs
routes.get("/admin/chefs", adminChefs.index); // Mostrar a lista de receitas
// routes.get("/admin/chefs/create", admin.create); // Mostrar formulário de nova receita
// routes.get("/admin/chefs/:id", admin.show); // Exibir detalhes de uma receita
// routes.get("/admin/chefs/:id/edit", admin.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/chefs", admin.post); // Cadastrar nova receita
// routes.put("/admin/chefs", admin.put); // Editar uma receita
// routes.delete("/admin/chefs", admin.delete); // Deletar uma receita


module.exports = routes;
