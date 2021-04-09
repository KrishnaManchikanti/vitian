const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    return res.send('hello');
})

app.listen(port,(err)=>{
    if(err){console.log(`Error in starting server ${err}`)};
    console.log(`Server is up at port ${port}`);
})