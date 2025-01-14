const express = require("express");
require('./config/migrate');
const path = require("path");
const bodyParser = require("body-parser");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Supabase
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
// module.exports.supabase = supabase;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "conecta-frete",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

// Middleware para disponibilizar flash messages nos templates
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// app.use((req, res, next) => {
//     console.log("Sessão:", req.session);
//     next();
//   });

// Configuração EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rotas
const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const dashRoutes = require("./routes/dashboards");
app.use("/", indexRoutes);
app.use("/admin/", adminRoutes);
app.use("/", authRoutes);
app.use("/", dashRoutes);

module.exports = app;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
