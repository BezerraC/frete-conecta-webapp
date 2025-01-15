const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureUserType } = require("../config/authMiddleware");

router.get(
  "/dashboard",
  ensureLoggedIn, // Verifica se o usuário está logado
  ensureUserType("cliente"), // Verifica se o tipo é "cliente"
  (req, res) => {
    res.render("user-layout", { body: "dashboard", title: "Dashboard" });
  }
);

router.get(
  "/driver/dashboard",
  ensureLoggedIn, // Verifica se o usuário está logado
  ensureUserType("motorista"), // Verifica se o tipo é "motorista"
  (req, res) => {
    res.render("user-layout", { body: "dashboard", title: "Dashboard" });
  }
);

router.get(
  "/account",
  ensureLoggedIn, // Apenas usuários logados podem acessar
  (req, res) => {
    res.render("user-layout", { body: "account", title: "Minha Conta" });
  }
);

module.exports = router;
