const express = require('express');
const adminRouters =express.Router();
function router(nav)
{
    adminRouters.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'Library'
        })
    })
    return adminRouters;
}
module.exports= router;