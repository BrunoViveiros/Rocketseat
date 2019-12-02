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

// routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes;
