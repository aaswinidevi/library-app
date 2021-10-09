const express = require('express');
const loginRouters =express.Router();
function router(nav)
{
    loginRouters.get('/',function(req,res){
        res.render('login',{
            nav,
            title:'Library'
        })
    })

//    `$(document).ready(function(){
//     var flag;
//     function validatelogin(u,p,callback){
//         if (u=="admin"&&p=="12345"){
//             flag=1;
//             callback(flag);
//         }
//     }
//     $('.float').click(function(){
//       var uname =getElementsByClassName("form-controls").val();
//       var pwd =('pass').val();
//       validatelogin(uname,pwd,(res)=>{
//           if(res==1)window.location.href ='books.ejs';
//           else alert("incorrect password or username");

//       })`
    return loginRouters;
}
module.exports= router;






















// var path = require('path');

 
        
//         loginRouters.get('/',function(req,res){
//             res.render('login',{
//                 nav,
//                 title:'Library'
//             })
//             return loginRouters;
//         })
    
//     // })
 

// }
// module.exports=router;