const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


//connect to mongoDb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;


// app.get('/api', function(req,res){
//     console.log('GET REQUEST...');
//     res.send([{ 
//         "StudentNo" : "1", 
//         "FirstName" : "Mark", 
//         "LastName" : "Waugh", 
//         "semester" : "1", 
//         "Gender" : "male", 
//         "Age" : "10" 
//     }]);

// });
app.use(bodyParser.json());

//initilize routes
app.use('/api',routes);

app.listen(process.env.PORT||4000,function(){
    console.log("Server started on PORT 4000");
});