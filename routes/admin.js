const express = require('express');
const router = express.Router();
const { supabase } = require('../app');

// Página inicial
router.get('/', (req, res) => res.render('adm-layout', { body: 'index', title: 'Dashboard' }));

router.get('/drivers', async (req, res) => {
    try {
        // Consulta todos os motoristas no Supabase
        const { data: drivers, error } = await supabase
            .from('drivers')
            .select('*'); // Seleciona todos os campos da tabela

        if (error) {
            throw error;
        }

        // Renderiza a página com os dados dos motoristas
        res.render('adm-layout', { body: 'driver', title: 'Dashboard', drivers });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar motoristas');
    }
});


module.exports = router;
