const { response } = require("express");
const {pool} = require("../dataBase")



const getLibro = async (req , res) =>
{
  try 
  {
        let sql;
        if(req.query.id == null)
        {
            sql = "SELECT * FROM students";
        }else{
            sql = "SELECT * FROM students WHERE id_students =" + req.query.id;
        }

        let [result] =  await pool.query(sql);

        res.send(result);
  }
  catch(err)
  {
        console.log(err);
  }
  
}

const getLibro2 = async (req , res) =>
{
    try 
    {
        let sql = "SELECT * FROM students"
        console.log(sql);

        let [result] = await pool.query(sql)
        res.send(result)
    }
    catch(err)
    {
        console.log(err);
    }
}

const postLibro = async (req , res) => 
{
    try
    {
        console.log(req.body);
        let sql = "INSERT INTO students (id_students, firts_name , last_name , gru_id, ingreso)"+
                                        "values ('"+ req.body.id_students + "','"+
                                                     req.body.firts_name + "','"+
                                                     req.body.last_name +"','"+
                                                     req.body.gru_id +" ',' "+
                                                     req.body.ingreso +"')";
                                                     
        console.log(sql);
        let [result] = await pool.query(sql)
        console.log(result);

        if(result.insertId)
            res.send(String(result.insertId))
        else
            res.send("-1")
    }
    catch(err)
    {
        console.log(err);
    }
}

const putLibro = async (req , res) =>
{
    try
    {
        let sql;
        console.log(req.body);
        let parametros = [
            req.body.firts_name,
            req.body.last_name,
            req.body.gru_id,
            req.body.ingreso,
            req.body.id_students

        ]
         sql =  "UPDATE students SET firts_name = COALESCE (?, firts_name) , "+
                    "last_name = COALESCE (?, last_name) , "+
                    "gru_id = COALESCE (?,gru_id) , "+
                    "ingreso = COALESCE (?, ingreso) WHERE id_students = ?"

        console.log(sql);
        let [result] = await pool.query(sql,parametros)
        res.send(result)
    }
    catch(err)
    {
        console.log(err);
    }
}

const deleteLibro = async (req, res) =>
{
    try
    {
        console.log(req.body);
        let sql = "DELETE FROM students WHERE id_students = ?"
        console.log(sql);
        let [result] = await pool.query(sql,[req.body.id])
        res.send(result)
    }
    catch(err)
    {
        console.log(err);
    }

}


module.exports = {getLibro,getLibro2,postLibro,putLibro,deleteLibro}