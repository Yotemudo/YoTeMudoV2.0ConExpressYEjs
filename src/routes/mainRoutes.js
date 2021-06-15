const express = require ('express');

const router = express.Router();

const controller = require ('../controllers/indexController')
router.get('/',controller.index);
router.get('/index',controller.index);
router.get ('/home',controller.home);
router.get ('/login',controller.login);
router.get ('/notfound',controller.notfound);
router.get ('/carrito',controller.carrito);
router.get ('/producto',controller.producto);
router.get ('/registro',controller.registro);

module.exports =router;



