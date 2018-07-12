const express = require('express');
const router = express.Router();
const Ninja = require('../models/schema');
//get the list of ninjas from DB
router.get('/ninjas',function(req, res){
    console.log('GET...');
    res.send({type:'GET'});
});

//add a new ninjas to the DB
router.post('/ninjas',function(req, res){
    // console.log('POST...');
    // console.log(req.body);
    // var ninja = new ninja(req.body);
    // ninja.save()
    Ninja.create(req.body).then(function(ninja){
        //res.send({type:'POST',
        //StudentNo:req.body.StudentNo,
        // FirstName:req.body.FirstName,
        // LastName:req.body.LastName,
        // semester:req.body.semester,
        // Gender:req.body.Gender,
        // Age:req.body.Age
        // name:req.body.name,
        // rank:req.body.rank
    //});
    res.send(ninja);
    });
    
});

//update a ninjas in a DB
router.put('/ninjas/:id',function(req, res){
    console.log('PUT...');
    res.send({type:'PUT'});
});

//delete a ninja from a DB
router.delete('/ninjas/:id',function(req, res){
    console.log('DELETE...');
    res.send({type:'DELETE'});
});


module.exports=router;