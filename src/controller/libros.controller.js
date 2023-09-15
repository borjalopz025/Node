const Books = require('../models/class');
const { getUser } = require('./libro.controller');

let libros=[
    new Books('pan con mantequilla como la vida misma','fran cortes','tapa dura', 20,"",2),
    new Books('La vida es una lenteja o la toma o la deja','javier pacheco', 'tapa blanda',35,'',1),
    new Books('prision','jack ston','tapa dura',45,'',5)
]




const getLibro = (res, req) =>
{
    let resu = '';
    let numero;

    if(req.query.id )
    {
        numero = libros.filter(val => val.id === req.query.id)

        resu = numero == 5 ?  {error: false, codigo: 404, mensaje: 'Libro encontrado',data: libros} : {error: true, codigo: 404, mensaje: 'Libro no encontrado'}
    
    } 
    res.send(resu)
}

const getLibro2 = (req , res) =>
{
    let resu = '';

    if(libros)
    {
        resu = req.body
    }else
        {
            resu = {error: true , codigo: 404, mensaje: 'libros no encontrados'}
        }
    
    res.send(resu)
}

const postLibro = (req , res) => 
{
    let resu= {error: true, codigo: 404, mensaje: 'Libro añadido'}
    
    const { titulo , autor , tapa , precio , foto , id} = req.body;
    const nuevoLibro = new Books(titulo, autor, tapa, precio, foto, id);
    libros.push(nuevoLibro)

    res.send(resu)
}

const putLibro = (req , res) =>
{
    let resu = '';
    let modificacion ;

    if(req.query.id)
    {
       modificacion = libros.filter( val => val.id === req.query.id)

       modificacion = req.body

       resu = {error: false, codigo: 404, mensaje: 'Libro encontrado',data: libros}

    }else 
    {
       resu = {error: true, codigo: 404, mensaje: 'Libro no encontrado'}
    }
    res.send(resu)
}

const deleteLibro = (req, res) =>
{
    let resu = 'libro borrado'
    if(req.query.id)
    {
        libros = libros.filter(val => val.id !== req.query.id)

        resu = {error: false, codigo: 404, mensaje: 'Libro borrado',data: libros}

    }else{
        resu = {error: true, codigo: 404, mensaje: 'Libro no borrado'}
    }
}


module.exports = {getLibro,getLibro2,postLibro,putLibro,deleteLibro}