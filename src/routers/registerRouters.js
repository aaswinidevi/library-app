const express = require('express');
const registerRouters =express.Router();
function router(nav)
{
    registerRouters.get('/',function(req,res){
        res.render('register',{
            nav,
            title:'Library'
        })
    })
    registerRouters.get('/login',function(req,res){
        res.render('login',{
            nav,
            title:'Library'
        })
    })
    return registerRouters;
}
module.exports= router;