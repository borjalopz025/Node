const Book = require('../models/class');

let libros=[
    new Book("como engañar a un ladron","Tapa blanda","German Artegoitia",20,"https://oxigenoalavida.files.wordpress.com/2013/11/si-vienes-a-robar-mi-vecino-es-rico.jpg",1),
    new Book("El gato que le gusta el agua","Tapa blanda","Alvaro caravaca",15,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrf5XzrTECvT17TS1XgRLLDo7qDAO2UTO5A&usqp=CAU",2),
    new Book("El ciego casimiro","Tapa blanda","Casimiro gonzalez ",35,"https://s3.ppllstatics.com/diariovasco/www/pre2017/multimedia/noticias/201603/19/media/broma-youtuber--575x323.jpg",3),
    new Book("Playa sin arena","Tapa blanda","Gonzalo perez",19.99,"https://www.lavanguardia.com/files/image_449_220/uploads/2021/12/30/61cd8c72af32c.jpeg",4),

]




const getLibro = (req , res) =>
{
   
   
    let respuesta='';
    let libroEncontrado;
    console.log(req.query);
   

    if (req.query.id) {
        console.log('aqui estamos');
        libroEncontrado = libros.filter(book => book.id_book == req.query.id);
        console.log(libros);

        respuesta = {error: false, codigo: 2, mensaje: 'libro encontrado', data: libroEncontrado}

    } else {
      respuesta = { error: true,codigo: 404 , mensaje:'Libro no encontrado'};
    }
   
    res.send(respuesta)
}

const getLibro2 = (req , res) =>
{
    let resu = '';

    if(libros)
    {
        console.log('entro a libros');
        resu = {error: false, codigo: 200,mensaje: ' libros encontrados', data: libros}
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
    let id ;
    let libroModificado;
   
    if(req.body.id_book)
    {
        libroModificado = libros.find(val => val.id_book == req.body.id_book)
        console.log(libroModificado);
        if(-1){
            libroModificado.title = req.body.title
            libroModificado.author = req.body.author
            libroModificado.type = req.body.type
            libroModificado.price = req.body.price
            libroModificado.photo = req.body.photo
            libroModificado.id_book = req.body.id_book
            resu={error: false, codigo: 200, mensaje: 'libro modificado' ,data: libroModificado }
        }else{
            resu={error: true, codigo: 404, mensaje: 'libro no modificado'}
        }


    }else 
    {
        resu = {error: true, codigo: 404, mensaje: 'libro no modificado'}
    }
    res.send(resu)
}

const deleteLibro = (req, res) =>
{
    let resu = 'libro borrado'
    if(req.query.id)
    {
        libros = libros.filter(val => val.id != req.query.id)

        resu = {error: false, codigo: 404, mensaje: 'Libro borrado' ,data: libros }

    }else{
        resu = {error: true, codigo: 404, mensaje: 'Libro no borrado'}
    }
    res.send(resu)
}


module.exports = {getLibro,getLibro2,postLibro,putLibro,deleteLibro}