const express = require('express');
const router = express.Router();

const temMarcacaoController = require('../controllers/temMarcacaoController');

router.post('/adicionaratraso', temMarcacaoController.adicionaatraso);

module.exports = router;