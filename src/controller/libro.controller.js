const Books = require('../models/class');

let libro1 = new Books('Los seceto de una mari','la mari','tapa blanda', 30, '',5)

const getUser = ( request, response ) =>
{
    let respuesta = '';
    console.log(request.query);

    if(libro1 )
    {
        respuesta= libro1

    }else{
        respuesta = {error: true, codigo: 404, mensaje: 'Libro no encontrado'}
    }

    response.send(respuesta)
   
}


const postUser = (req, res)=>{
    let respuesta = 'libro no existe';
    if(!libro1){
        libro1 = req.body
    }else {
        respuesta = {error: true, codigo: 404, mensaje: 'libro no existe'}
    }
    res.send(respuesta)
}

const putUser =(req, res) =>{
    let respuesta = '';
    if(!libro1){
        libro1 = req.body;
    }else{
        respuesta = {error: true, codigo:404, mensaje: 'libro no encontrado'}
    }
    res.send(respuesta)
}

const deleteUser=(req, res )=>{
    let respuesta = '';
    if(libro1){
        libro1 = null
        respuesta = 'libro borrado'
    }else{
        respuesta = {error: true, codigo: 404, mensaje: 'libro no encontrado'}
    }
}

module.exports = {getUser,postUser,putUser,deleteUser}