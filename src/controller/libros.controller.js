const Book = require('../models/class');

let libros=[
    new Book('pan con mantequilla como la vida misma','fran cortes','tapa dura', 20,"",2),
    new Book('La vida es una lenteja o la toma o la deja','javier pacheco', 'tapa blanda',35,'',1),
    new Book('prision','jack ston','tapa dura',45,'',5)
]




const getLibro = (res, req) =>
{
    let resu = '';
    let respuesta;

    if(req.query.id )
    {
        respuesta = libros.filter(val => val.id === req.query.id)

        
    
    } 
    res.send(respuesta)
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
    let resu;
    if(req.body){
    const { titulo , autor , tapa , precio , foto , id} = req.body;
    const nuevoLibro = new Book(titulo, autor, tapa, precio, foto, id);
    libros.push(nuevoLibro)
    resu = {error: false, codigo: 200, mensaje: 'Libro añadido', data: libros}
    }else{
        resu =  {error: true, codigo: 400, mensaje: 'Libro no añadido'}
    }

    res.send(resu)
}

const putLibro = (req , res) =>
{
    let resu = '';
    let libroModificado;
   
    if(req.body.id)
    {
        libroModificado = libros.find( val => val.id === req.body.id)
        console.log(libroModificado);
        if(!-1){
            libroModificado.titulo = req.body.titulo
            libroModificado.autor = req.body.autor
            libroModificado.tapa = req.body.tapa
            libroModificado.precio = req.body.precio
            libroModificado.foto = req.body.foto
            libroModificado.id = req.body.id
            resu={error: false, codigo: 200, mensaje: 'libro encontrado' ,data: libroModificado }
        }else{
            resu={error: true, codigo: 404, mensaje: 'libro no encontrado'}
        }


    }else 
    {
        resu = {error: true, codigo: 404, mensaje: 'libro no encontrado'}
    }
    res.send(resu)
}

const deleteLibro = (req, res) =>
{
    let resu = 'libro borrado'
    if(req.query.id)
    {
        libros = libros.filter(val => val.id !== req.query.id)

        resu = {error: false, codigo: 404, mensaje: 'Libro borrado' ,data: libros}

    }else{
        resu = {error: true, codigo: 404, mensaje: 'Libro no borrado'}
    }
    res.send(resu)
}


module.exports = {getLibro,getLibro2,postLibro,putLibro,deleteLibro}