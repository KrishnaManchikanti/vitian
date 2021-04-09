const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css', 
    debug: true, 
    outputStyle: 'compressed', 
    prefix:  '/css'
}));

app.get('/',(req,res)=>{
    return res.render('home.ejs');
});

app.listen(port,(err)=>{
    if(err){console.log(`Error in starting server ${err}`)};
    console.log(`Server is up at port ${port}`);
})