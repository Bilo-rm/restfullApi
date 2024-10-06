const pool = require('../../db');
const queries = require('./queries')


const getStudents = (req, res)=>{
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    });
}

const getStudentsById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

/*
const postStudents = (req, res)=>{
    pool.query("INSERT INTO students")
}
*/

module.exports ={
    getStudents,
    //postStudents,
    getStudentsById,
}