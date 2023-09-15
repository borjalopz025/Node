const express = require('express');
const app = express();

app.get('/' , function (req , res){
    console.log('Peticion ecibida del cliente');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers['user-agent']);
    res.send({ ok: true, message: 'Recibido' })
})
app.get('/hey' , function (req , res){
    console.log('Peticion ecibida del cliente');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers['user-agent']);
    res.send({ ok: true, message: 'Adios' })
})
app.listen(200)
