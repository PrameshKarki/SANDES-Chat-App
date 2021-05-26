
//Import Models
const Relation=require("../models/Relation");
const User = require("../models/User");

exports.joinUser=(socketID,currentUser)=>{
    const relation=new Relation({
        socketID:socketID,
        roomID:currentUser.room._id,
        userID:currentUser._id
    })
    relation.save();
    
    //Update user isInRoom status to true
    // User.updateOne({_id:currentUser._id},{$set:{isInRoom:true}});

    User.findOne({_id:currentUser._id}).then(data=>{
       data.isInRoom=true;
       data.save();
    })

}