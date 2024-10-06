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


const addtStudents = (req, res)=>{
    const {name, email, age, dob}= req.body;
    //check if email exist
    pool.query(queries.checkEmailExist, [email], (error,result)=> {
        if(result.rows.length){
            res.send("Email is already exist.");
        };

        //add students to db
        pool.query(queries.addStudent, [name , email, age, dob], (error, result)=> {
            if (error) throw error;
            res.status(201).send("Student added successfully!");
        });
    });
};


const removeStudents = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) => {
        //if no student with the same id
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
        res.send("Student not found!");
        }
        // if student exist delete it
        pool.query(queries.removeStudent, [id], (error, results) => {
            if(error) throw error;
            res.status(201).send("Student removed successfully!");
        });
    });
}


module.exports ={
    getStudents,
    addtStudents,
    getStudentsById,
    removeStudents,
}