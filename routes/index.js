const express = require('express');
const router = express.Router();
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const { supabase } = require('../app');

// Página inicial
router.get('/', (req, res) => res.render('layout', { body: 'index', title: 'Home' }));

// Página sobre nós
router.get('/about', (req, res) => res.render('layout', {  body: 'about', title: 'Sobre Nós' }));

// Página serviços
router.get('/services', (req, res) => res.render('layout', {  body: 'services', title: 'Serviços' }));

// Página serviço de mudança residencial
router.get('/services/house-delivery', (req, res) => res.render('layout', {  body: 'service-detail-1', title: 'Mudança Residêncial' }));

// Página serviço de envio de pequenos fretes
router.get('/services/small-delivery', (req, res) => res.render('layout', {  body: 'service-detail-2', title: 'Envio de Pequenos Fretes' }));

// Página serviço de envio de pequenas cargas
router.get('/services/small-cargo', (req, res) => res.render('layout', {  body: 'service-detail-3', title: 'Envio de Pequenas Cargas' }));

// Página de contato
router.get('/contact', (req, res) => res.render('layout', {  body: 'contact', title: 'Contato' }));

// Página de contato
router.get('/faq', (req, res) => res.render('layout', {  body: 'faq', title: 'FAQ' }));

// Página seja motorista
router.get('/driver', async (req, res) => {
    // Simulação de API para buscar bairros de Macapá
    const bairros = ['Centro', 'Trem', 'Buritizal', 'Jardim Felicidade'];
    res.render('layout', {  body: 'driver', title: 'Seja Motorista', bairros });
});

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

