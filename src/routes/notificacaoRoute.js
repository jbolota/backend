const express = require('express');
const router = express.Router();

const criaNotificacaoController = require('../controllers/criaNotificacaoController');

router.get('/lista', criaNotificacaoController.lista);
router.get('/listatipo', criaNotificacaoController.listatipo);
router.post('/adiciona', criaNotificacaoController.adiciona);

module.exports = router;