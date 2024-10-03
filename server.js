const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("hilpopo");
})

app.listen(port, () => console.log(`app listiening in port ${port}`));