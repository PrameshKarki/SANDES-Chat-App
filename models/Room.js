//Import modules
const mongoose=require("mongoose");

//Define schema
const roomSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ID:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    activeUsers:[{
        userID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }]
})

//Export models
module.exports=mongoose.model("Room",roomSchema);