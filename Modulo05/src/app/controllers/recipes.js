const Recipe = require("../models/Recipe");

module.exports = {
  index(req, res) {
    Recipe.all(function(recipes) {
      return res.render("recipes/index", { recipes });
    });
  },
  redirectIndex(req, res) {
    return res.redirect("/admin/recipes");
  },
  create(req, res) {
    return res.render("recipes/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    Recipe.create(req.body, function(recipe) {
      return res.redirect(`/admin/recipes/${recipe.id}`);
    });
  },
  show(req, res) {
    Recipe.find(req.params.id, recipe => {
      if (!recipe) return res.send("Recipe not found!");

      return res.render("recipes/show", { recipe });
    });
  },
  edit(req, res) {
    Recipe.find(req.params.id, recipe => {
      if (!recipe) return res.send("Recipe not found!");

      return res.render("recipes/edit", { recipe });
    });
  },
  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    Recipe.update(req.body, function() {
      return res.redirect(`/admin/recipes/${req.body.id}`);
    });
  },
  delete(req, res) {
    return;
  }
};
