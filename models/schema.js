const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a Schema and Model
const NinjaSchema = new Schema({

    name:{
        type:String,
        required:[true, 'Name field is Required']
    },
    rank:{
        type:String,
    },
    available:{
        type:Boolean,
        default:false
    }
    //add in geo location
});

const Ninja=mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;