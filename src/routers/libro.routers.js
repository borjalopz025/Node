const {Router} = require('express');
const router = Router();
const libroCtrl = require('../controller/libro.controller')

router.get('/', libroCtrl.getUser);

router.post('/libro', libroCtrl.postUser);

router.put('/libro', libroCtrl.putUser);

router.delete('/libro', libroCtrl.deleteUser);

module.exports = router;
