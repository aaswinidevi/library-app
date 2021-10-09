const express = require('express');
const booksRouter =express.Router();
function router(nav){
    var books =[
        {
            name:'WINGS  OF FIRE',
            author:'Dr. APJ Abdul Kalam',
            genre:' Autobiography',
            img:'apj.jpg'
        },
        {
            name:'MATHILUKAL',
            author:'Vaikom Muhammad Basheer ',
            genre:'Novel',
            img:'mathilukal.jpg'
        },
        {
            name:'HARRY POTTER',
            author:'J.K. Rowling  ',
            genre:'Novel',
            img:'harrypotter.jpg'
        }
      
    
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            
            nav,
            title:'Library',
            books
        
        })
    })
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("book",
        {
            
            nav,
            title:'Library',
            book:books[id]
        
        })
    
    })
    return booksRouter;
}

module.exports = router;
