//schema of user table 

const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    id:{type:String},
    name:{type:String},
  
    create_at:{type:Date,default:Date.now()}
                                                 
})
module.exports=mongoose.model('Users',userSchema);