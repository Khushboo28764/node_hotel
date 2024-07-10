const express=require('express')
const router=express.Router();
const MenuItem=require('./../models/MenuItem');
const Person = require('../models/Person');
router.post('/',async(req,res)=>{
    try{
         const data =req.body
         //Assuming the request body contains the person data
         //Create a new Person document using the Mongoose model
         const newMenu=new MenuItem(data);
         //Save the new person to the database
         const response =await newMenu.save();
         console.log('data saved');
         res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})
// GET method to get the person
router.get('/',async(req,res)=>{
try{
const data=await MenuItem.find();
console.log('data fetched');
res.status(200).json(data);
}
catch(err){
console.log(err);
res.status(500).json({error:'Internal Server Error'});
}
})
router.get('/:Taste',async(req,res)=>{
    try{
        const Taste=req.params.Taste;
        if(Taste=='spicy' || Taste=='sweet' || Taste=='sour'){
            const response= await MenuItem.find({taste:Taste})
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:
          'Invalid taste'
        })
    }
}
    catch(err){

    }
})

module.exports=router;