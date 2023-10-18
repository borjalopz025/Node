const express = require('express');
const cors = require('cors');
const librosRouter = require('./routers/students.routers');
const routerSql = require("./routers/sql.router");
const userRouters= require("./routers/users.routers")
const errorHandling = require('./error/errorHandling');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(librosRouter);
app.use(routerSql)
app.use(userRouters)
app.use((req, res ,next)=>{
    res.status(404).json({
        error:true,
        codigo: 404,
        mensaje: 'Endpoint no econtrado'
    })
})

app.use(errorHandling)

module.exports = app










