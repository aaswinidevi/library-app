const express = require('express');
const adminaRouters =express.Router();
function router(nav)
{
    adminaRouters.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'Library'
        })
    })
    return adminaRouters;
}
module.exports= router;