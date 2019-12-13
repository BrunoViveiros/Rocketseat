const express = require("express");
const admin = require("./app/controllers/recipes");

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

//ADMIN

routes.get("/admin", admin.redirectIndex); // Mostrar a lista de receitas
routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", admin.post); // Cadastrar nova receita
routes.put("/admin/recipes", admin.put); // Editar uma receita
routes.delete("/admin/recipes", admin.delete); // Deletar uma receita

module.exports = routes;
