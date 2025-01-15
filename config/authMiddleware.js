module.exports = {
    ensureLoggedIn: (req, res, next) => {
      if (req.session.user) {
        return next(); // Usuário está logado, permite continuar
      }
      req.flash("error_msg", "Você precisa estar logado para acessar esta página.");
      return res.redirect("/login"); // Redireciona para a página de login
    },
  
    ensureUserType: (type) => {
      return (req, res, next) => {
        if (req.session.user && req.session.user.type === type) {
          return next(); // Usuário tem o tipo correto, permite continuar
        }
        req.flash("error_msg", "Você não tem permissão para acessar esta página.");
        return res.redirect("/"); // Redireciona para a página inicial
      };
    },
  };
  