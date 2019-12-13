module.exports = {
  index(req, res) {
    return res.render("admin/index");
  },
  redirectIndex(req, res) {
    return res.redirect("/admin/chefs");
  },
  create(req, res) {
    return res.render("admin/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    let {
      image,
      title,
      author,
      ingredients,
      preparation,
      information
    } = req.body;

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
