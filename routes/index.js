const express = require('express');
const router = express.Router();

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

module.exports = router;

