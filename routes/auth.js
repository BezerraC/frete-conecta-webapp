const express = require('express');
const router = express.Router();
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const { supabase } = require('../app');

// Página cadastro 
router.get('/register', (req, res) => res.render('layout', { body: 'register', title: 'Faça parte' }));

// Página cadastro clientes
router.get('/signup', (req, res) => res.render('layout', { body: 'signup', title: 'Seja cliente' }));

// Página cadastro motoristas
router.get('/driver', async (req, res) => {
    // Simulação de API para buscar bairros de Macapá
    const bairros = ['Centro', 'Trem', 'Buritizal', 'Jardim Felicidade'];
    res.render('layout', {  body: 'driver', title: 'Seja Motorista', bairros });
});

// Página cadastro clientes
router.get('/login', (req, res) => res.render('layout', { body: 'login', title: 'Faça login' }));

// router.post('/driver', upload.single('vehicle_image'), async (req, res) => {
//     try {
//         const {
//             name,
//             phone,
//             work_hours,
//             neighborhood,
//             freight_type,
//             vehicle_size,
//             vehicle_model,
//             has_helper
//         } = req.body;

//         const helper = has_helper === 'true';

//         // Inserir dados do motorista no Supabase
//         const { data, error } = await supabase
//             .from('drivers')
//             .insert([
//                 {
//                     name,
//                     phone,
//                     work_hours: Array.isArray(work_hours) ? work_hours.join(',') : work_hours,
//                     neighborhood,
//                     freight_type: Array.isArray(freight_type) ? freight_type.join(',') : freight_type,
//                     vehicle_size,
//                     vehicle_model,
//                     has_helper: helper,
//                     vehicle_image: req.file ? `/uploads/${req.file.filename}` : null, // Caminho do arquivo de imagem
//                 }
//             ]);

//         if (error) {
//             throw error;
//         }

//         res.redirect('/driver-success'); // Roteamento após sucesso
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Erro ao processar o cadastro');
//     }
// });

module.exports = router;