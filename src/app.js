const express = require('express');
const cors = require('cors');
const libroRouter = require('./routers/libro.routers');
const librosRouter = require('./routers/lirbos.routers');
const routerSql = require("./routers/sql.router")
const errorHandling = require('./error/errorHandling');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(libroRouter);
app.use(librosRouter);
app.use(routerSql)
app.use((req, res ,next)=>{
    res.status(404).json({
        error:true,
        codigo: 404,
        mensaje: 'Endpoint no econtrado'
    })
})

app.use(errorHandling)

module.exports = app










