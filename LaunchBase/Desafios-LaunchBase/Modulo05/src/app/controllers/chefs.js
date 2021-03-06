const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");

module.exports = {
  index(req, res) {
    Chef.all(chefs => res.render("chefs/index", { chefs }));
  },
  create(req, res) {
    return res.render("chefs/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    Chef.create(req.body, chef => res.redirect(`/admin/chefs/${chef.id}`));
  },
  show(req, res) {
    Chef.find(req.params.id, chef => {
      if (!chef) return res.send("Chef not found!");
      
      
      Recipe.findByChef(req.params.id, recipes => {
        console.log(recipes)
        return res.render("chefs/show", { chef, recipes });
      })
    });
  },
  edit(req, res) {
    Chef.find(req.params.id, chef => {
      if (!chef) return res.send("Chef not found!");

      return res.render("chefs/edit", { chef });
    });
  },
  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    Chef.update(req.body, () => res.redirect(`/admin/chefs/${req.body.id}`));
  },
  delete(req, res) {
    Chef.delete(req.body.id, () => res.redirect(`/admin/chefs`));
  }
};
