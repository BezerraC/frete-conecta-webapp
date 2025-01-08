const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../config/db");
const jwt = require("jsonwebtoken");

const router = express.Router();
const multer = require("multer");
// const upload = multer({ dest: 'uploads/' });
// const { supabase } = require('../app');

// Página cadastro
router.get("/register", (req, res) =>
  res.render("layout", { body: "register", title: "Faça parte" })
);

// Página cadastro clientes
router.get("/signup", (req, res) =>
  res.render("layout", { body: "signup", title: "Seja cliente" })
);

// Página cadastro motoristas
router.get("/driver", async (req, res) => {
  // Simulação de API para buscar bairros de Macapá
  const bairros = ["Centro", "Trem", "Buritizal", "Jardim Felicidade"];
  res.render("layout", { body: "driver", title: "Seja Motorista", bairros });
});

// Página cadastro clientes
router.get("/login", (req, res) =>
  res.render("layout", { body: "login", title: "Faça login" })
);

// Cadastro de cliente
router.post("/signup", async (req, res) => {
  const { fname, lname, phone, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users (fname, lname, phone, email, password, type) VALUES ($1, $2, $3, $4, $5, $6)",
      [fname, lname, phone, email, hashedPassword, "cliente"]
    );
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao cadastrar cliente");
  }
});

// Cadastro de motorista
router.post("/driver", async (req, res) => {
  const { fname, lname, phone, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users (fname, lname, phone, email, password, type) VALUES ($1, $2, $3, $4, $5, $6)",
      [fname, lname, phone, email, hashedPassword, "motorista"]
    );
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao cadastrar motorista");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length === 0) {
      req.flash("error_msg", "Usuário não encontrado.");
      return res.redirect("/login");
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      req.flash("error_msg", "Senha incorreta.");
      return res.redirect("/login");
    }

    // Salvar informações do usuário na sessão
    req.session.user = {
      id: user.id,
      name: user.fname,
      type: user.type,
    };

    req.flash("success_msg", "Login realizado com sucesso!");
    res.redirect(
      user.type === "cliente" ? "/dashboard-cliente" : "/dashboard-motorista"
    );
  } catch (error) {
    console.error(error);
    req.flash("error_msg", "Erro ao fazer login.");
    res.redirect("/login");
  }
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Erro ao destruir a sessão:", err);
        req.flash("error_msg", "Erro ao fazer logout.");
        return res.redirect("/");
      }
      res.redirect("/login");
    });
  });
  

module.exports = router;