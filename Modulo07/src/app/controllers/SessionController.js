module.exports = {
  loginForm(req, res) {
    return res.render("session/login");
  },
  login(req, res) {
    req.session.userId = req.user.id;

    return res.redirect("/users");
  },
  logout(req, res) {
    req.session.destroy();
    return res.redirect("/");
  },
  forgotForm(req, res) {
    return res.render("session/forgot-password");
  },
  forgot(req, res) {
    //um token para esse usuario

    //criar uma expiração para o token

    //enviar um email com o um link de recuperação de senha

    //avisar o usuario que enviamos o email
  }
};
