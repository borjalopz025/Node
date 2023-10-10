const {Router} = require('express');
const router = Router();
const sql = require('../controller/sql.controller');

router.get('/sql', sql.getInfoId);

router.get('/sql2', sql.getInformacion)

router.get('/sql3', sql.getTodos);

router.get('/sql4', sql.getProfe);

router.get('/sql5', sql.getAsignatur);

module.exports = router;
