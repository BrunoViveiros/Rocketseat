const fs = require("fs");
const data = require("./data.json");

exports.index = (req, res) => {
  return res.render("admin/index", { recipes: data.recipes });
};

exports.redirectIndex = (req, res) => {
  return res.redirect("/admin/recipes");
};

exports.show = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(recipe => {
    return id == recipe.id;
  });

  if (!foundRecipe) return res.send("Recipe not found!");

  return res.render("admin/show", { recipe: foundRecipe });
};

exports.create = (req, res) => {
  return res.render("admin/create");
};

exports.post = (req, res) => {
  const keys = Object.keys(req.body);
  let {
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  } = req.body;

  for (key of keys)
    if (req.body[key] == "") return res.send("Please, fill all fields");

  if (typeof ingredients === "string") {
    ingredients = Array(ingredients);
  }
  if (typeof preparation === "string") {
    preparation = Array(preparation);
  }

  const id = Number(data.recipes.length + 1);

  data.recipes.push({
    id,
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
    if (err) return res.send("Write file error!");

    return res.redirect("/admin/recipes");
  });
};

exports.edit = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(recipe => {
    return id == recipe.id;
  });

  if (!foundRecipe) return res.send("Recipe not found!");

  return res.render("admin/edit", { recipe: foundRecipe });
};

exports.put = (req, res) => {
  let {
    id,
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  } = req.body;

  let index = 0;

  const foundRecipe = data.recipes.find((recipe, foundIndex) => {
    if (id == recipe.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundRecipe) return res.send("Recipe not found!");

  if (typeof ingredients === "string") {
    ingredients = Array(ingredients);
  }

  if (typeof preparation === "string") {
    preparation = Array(preparation);
  }

  const recipe = {
    ...foundRecipe,
    id: Number(req.body.id),
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  };

  data.recipes[index] = recipe;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
    if (err) return res.send("Write error!");

    return res.redirect(`/admin/recipes/${id}`);
  });
};

exports.delete = (req, res) => {
  const { id } = req.body;

  const filteredRecipes = data.recipes.filter(recipe => {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
    if (err) return res.send("Write error!");

    return res.redirect("/admin/recipes");
  });
};
