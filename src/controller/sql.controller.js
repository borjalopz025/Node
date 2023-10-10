const {pool} = require("../dataBase")

const getInfoId = async (req, res) =>
{
    try
    {
        let sql;
        if(req.query.id == null)
        {
            sql = "SELECT * FROM students";
        }else{
            sql = "SELECT AVG(mark) FROM mark WHERE student_id =" + req.query.id;
        }

        let [result] =  await pool.query(sql);

        res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
}

const getInformacion = async (req, res )=>
{
    try
    { 
        let sql;
        if(req.query.id == null)
        {
            sql = "SELECT * FROM students";
        }else{
            sql = "SELECT s.id_students ,c.title FROM students AS s INNER JOIN gru AS m ON (s.gru_id = m.id_gru) INNER JOIN subject_teacher AS b ON (m.id_gru = b.gru_id) INNER JOIN subject AS c ON (b.subject_id =  c.id_subjects) WHERE s.id_students =" + req.query.id + " GROUP BY s.id_students, c.title"
        }

        let [result] =  await pool.query(sql);

        res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
    
}


const getTodos =  async (req,res) =>
{
    try 
    {
        let sql = "SELECT  s.firts_name , s.last_name , c.title FROM students AS s INNER JOIN gru AS m ON (s.gru_id = m.id_gru) INNER JOIN subject_teacher AS b ON (m.id_gru = b.gru_id) INNER JOIN subject AS c ON (b.subject_id =  c.id_subjects)";
        console.log(sql);

        let [result] = await pool.query(sql)
        res.send(result)
    }
    catch(err)
    {
        console.log(err);
    }
}

const getProfe = async (req , res ) =>
{
    try
    { 
        let sql;
        if(req.query.id == null)
        {
            sql = "SELECT * FROM students";
        }else{
            sql = "SELECT s.id_subjects ,c.id_teacher FROM subject AS s INNER JOIN subject_teacher AS b ON (s.id_subjects = b.subject_id) INNER JOIN teacher AS c ON (b.teacher_id =  c.id_teacher) WHERE s.id_subjects =" +req.query.id
        }

        let [result] =  await pool.query(sql);

        res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
}

const getAsignatur = async (req , res) =>
{
    
    try 
    {
        let sql = "SELECT  s.nombre , s.apellido, c.title FROM teacher AS s  INNER JOIN subject_teacher AS b ON (s.id_teacher = b.teacher_id) INNER JOIN subject AS c ON (b.subject_id =  c.id_subjects)";
        console.log(sql);

        let [result] = await pool.query(sql)
        res.send(result)
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = {getInfoId,getInformacion,getTodos,getProfe,getAsignatur}