const express = require('express');
const port = process.env.PORT||2000;
// const bodyParser = require('body-parser');
// var path = require('path');

const nav =[{link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/login',name:'LOG IN '},
            {link:'/register',name:'REGISTER'},
            {link:'/admin',name:'Add Books'},
            {link:'/admina',name:'Add Author'},
            {link:'/',name:'Log Out'},

        ];

const booksRouter =require('./src/routers/bookRouters')(nav);
const authorsRouter =require('./src/routers/authorsRouters')(nav);
const adminRouters =require('./src/routers/adminRouters')(nav);
const adminaRouters =require('./src/routers/adminaRouters')(nav);
const loginRouters =require('./src/routers/loginRouters')(nav);
const registerRouters =require('./src/routers/registerRouters')(nav);




const app = new express();
app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    
    })
})
app.use('/authors',authorsRouter)
app.use('/books',booksRouter);
app.use('/admin',adminRouters);
app.use('/admina',adminaRouters);
app.use('/login',loginRouters);
app.use('/register',registerRouters)





  


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/books.ejs');
  });
    
app.listen(port,()=>{
    console.log("Server Ready at"+ port);
});