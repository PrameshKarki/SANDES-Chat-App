//Import modules
const mongoose=require("mongoose");

//Define schema
const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    currentRoom:{
        ID:{
            type:String,
        },
        name:{
            type:String
        }
    }
    
})

//Export schema
module.exports=mongoose.model("User",userSchema);