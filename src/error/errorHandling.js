function errorHandling(err,req,res,next){

    res.status(500).json({mensaje: err.mensaje})
}

module.exports = errorHandling