const express = require('express');
const router = express.Router();

router.get('/cliente/dashboard', (req, res) => {
    res.send('Bem-vindo ao painel do cliente!');
});

router.get('/motorista/dashboard', (req, res) => {
    res.send('Bem-vindo ao painel do motorista!');
});

module.exports = router;
