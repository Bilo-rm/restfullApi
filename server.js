const express = require('express');
const studentRoutes = require('./src/student/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hilpopo");
})

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => console.log(`app listiening in port ${port}`));