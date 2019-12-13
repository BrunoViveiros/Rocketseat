module.exports = {
  index(req, res) {
    return res.render("recipes/index");
  },
  redirectIndex(req, res) {
    return res.redirect("recipes/recipes");
  },
  create(req, res) {
    return res.render("recipes/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    return;
  },
  show(req, res) {
    return;
  },
  edit(req, res) {
    return;
  },
  put(req, res) {
    return;
  },
  delete(req, res) {
    return;
  }
};
