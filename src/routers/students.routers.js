const {Router} = require('express');
const router = Router();
const libCtrl = require('../controller/students.controller');

router.get('/librosid', libCtrl.getLibro);

router.get('/libros', libCtrl.getLibro2)

router.post('/libros', libCtrl.postLibro);

router.put('/libros', libCtrl.putLibro);

router.delete('/libros', libCtrl.deleteLibro);

module.exports = router;
