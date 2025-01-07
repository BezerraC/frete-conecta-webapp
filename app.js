const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Supabase
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
// module.exports.supabase = supabase;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuração EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
app.use('/', indexRoutes);
app.use('/admin/', adminRoutes);
app.use('/', authRoutes);

module.exports = app;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
