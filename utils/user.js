//Import models
const Room=require("../models/Room");

exports.joinUser=(socketID,currentUser)=>{
    Room.findOne({ID:currentUser.room.ID}).then(room=>{
        if(room){
            let userID=currentUser.ID;
            room.activeUsers.push({socketID,userID});
            room.save();

        }else{
            //Error!
            console.log("Room not found!");
        }


    }).catch(err=>{
        console.log(err);
    })

}

exports.findUser=(socketID)=>{
    
}