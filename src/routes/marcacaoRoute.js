const express = require('express');
const router = express.Router();

const MarcacaoController = require('../controllers/marcacaoController');

router.get('/lista', MarcacaoController.lista);
router.get('/tempoespera/:id', MarcacaoController.tempoespera);
module.exports = router;
