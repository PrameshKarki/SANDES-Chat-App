
//Import Models
const Relation = require("../models/Relation");
const User = require("../models/User");
const Room=require("../models/Room");

//Join user
exports.joinUser = (socketID, currentUser) => {
    const relation = new Relation({
        socketID: socketID,
        roomID: currentUser.room._id,
        userID: currentUser._id
    })
    //Save relation in database
    return relation.save().then(()=>{
        User.findOne({ _id: currentUser._id }).then(data => {
            data.isInRoom = true;
            return data.save();
        })
        
    }).catch(err=>{
        console.log(err);
    })
}

//Disconnect user
//1.Remove relation
//2.Set user isInRoom status false
exports.disconnectUser = (socketID) => {
    return Relation.findOne({ socketID: socketID }).then(relation => {
        User.findById({ _id: relation.userID }).then(user => {
            user.isInRoom = false;
            user.save();
            return relation.delete();

        })
    }).catch(err => {
        console.log(err);
    })
}

exports.fetchUser=(socketID)=>{
    return Relation.findOne({socketID:socketID}).then(relation=>{
        return User.findById({_id:relation.userID}).exec();
    }).catch(err=>{
        console.log(err);
    })
}

exports.fetchRoom=(socketID)=>{
    return Relation.findOne({socketID:socketID}).then(relation=>{
        return Room.findById({_id:relation.roomID}).exec();
    }).catch(err=>{
        console.log(err);
    })
}

