const {Router} = require('express');
const router = Router();
const libCtrl = require('../controller/libros.controller');

router.get('/', libCtrl.getLibro);

router.get('/libro', libCtrl.getLibro2)

router.post('/libro', libCtrl.postLibro);

router.put('/libro', libCtrl.putLibro);

router.delete('/libro', libCtrl.deleteLibro);

module.exports = router;
