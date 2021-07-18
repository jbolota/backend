const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

router.get('/lista', UserController.lista);
router.post('/create', UserController.create);
router.get('/info/:id', UserController.getinfo);
router.get('/qrcode/:id', UserController.getqrcode);
router.post('/delete', UserController.delete);
router.post('/estado/:id', UserController.setrole);

module.exports = router;