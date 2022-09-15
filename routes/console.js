const express = require('express');

//Router verlo como una mini aplicación
const router = express.Router();
const consolaController = require('../controllers/console');


//Create, Read, Update, Delete (CRUD) Altas Bajas Cambios Consultas

//Servicio para mostrar el formulario
router.get('/altaConsola',consolaController.getAltaConsola);

//Servicio para procesar los datos del formulario
router.post('/altaConsola',consolaController.postAltaConsola);

//Servicio para consultar todos los datos
router.get('/consultaConsola',consolaController.getConsultaConsola);

//Servicio para consultar si una palabra es un palíndromo
router.post('/postIsPalindrome',consolaController.postPalindrome);

//Servicio para decodificar una palabra en idioma F
router.post('/postDecodeWordF',consolaController.postDecodeWordF);

module.exports = router;