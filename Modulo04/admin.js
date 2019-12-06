const fs = require("fs");
const data = require("./data.json");

exports.show = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(recipe => {
    return id == recipe.id;
  });

  if (!foundRecipe) return res.send("Recipe not found!");

  return res.render("admin/show", { recipe: foundRecipe });
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
