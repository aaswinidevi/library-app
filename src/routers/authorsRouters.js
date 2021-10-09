const express = require('express');
const authorsRouter =express.Router();
function router(nav){
    var authors =[
        {

            author:'Dr. APJ Abdul Kalam',
            books:'Wings of fire ,Ingnited minds',
            genre:'Nonfiction, Biography' ,
            img:'apjk.jpg'
        },
        {
           
            author:'Vaikom Muhammad Basheer ',
          books: 'Pathummayude aadu,mathilukkal,balyakala sahi',
          genre:'Humor, Politics, Philosophy',
            img:'vaikkam.jpg'
        },
        {
           
            author:'J.K. Rowling  ',
          books:'Harry Potter, The Cuckoos Calling',
          genre:'Fiction, Young Adult, Fantasy',
            img:'jke.jpg'
        },
        {
           
            author:'M T Vasudevan Nair ',
          books:'Naalukettu, Rendamoozham',
          genre:'Fiction Children"s Nonfiction',
            img:'mtv.jpg'
        }
      
      
    
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            
            nav,
            title:'Library',
            authors
        
        })
    })
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("author",
        {
            
            nav,
            title:'Library',
           author:authors[id]
        
        })
    
    })
    return authorsRouter;
}

module.exports = router;
