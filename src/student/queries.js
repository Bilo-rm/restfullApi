const getStudents ="SELECT * FROM students";
const getStudentsById = "SELECT * FROM studens WEHRE id = $1";

module.exports = {
    getStudents,
}