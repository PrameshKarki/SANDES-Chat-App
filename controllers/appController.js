//Import models
const shortID=require("shortid");

//Import models
const Room = require("../models/Room");

exports.getIndex=(req,res)=>{
    res.render("index");
}

exports.getJoinRoom=(req,res)=>{
    res.render("join-room",{
        pageTitle:"Join Room- Sandes",
        hasError:false,
        errorMessages:req.flash("error-message")
    })
}


exports.getCreateRoom=(req,res)=>{
    res.render("create-room",{
        pageTitle:"Create Room-Sandes",
        hasResult:false
    })
}

exports.postCreateRoom=(req,res)=>{
    const body=JSON.parse(JSON.stringify(req.body));
    let uniqueID=shortID.generate();
    const room=new Room({
        name:body.roomName,
        ID:uniqueID,
        createdBy:req.session.user._id,
        activeUsers:[]
    });
    room.save().then(()=>{
        res.render("create-room",{
            pageTitle:"Create Room-Sandes",
            hasResult:true,
            ID:uniqueID
        })

    }).catch(err=>{
        console.log(err);
    })
}

exports.postJoinRoom=(req,res)=>{
    const body=JSON.parse(JSON.stringify(req.body));
    Room.findOne({ID:body.roomID}).then(room=>{
        if(room){
                let icon;
                icon=`${req.session.user.firstName[0]}${req.session.user.lastName[0]}`;
                //Push current user id in room->activeUsers
                room.activeUsers.push(req.session.user._id);
                res.render("room",{
                    pageTitle:"Room-Sandes",
                    user:{...req.session.user,icon},
                    room:room
                })


        }else{
            res.status(422).render("join-room",{
                pageTitle:"Join Room-Sandes",
                hasError:true,
                oldValue:body,
                errorMessages:["Invalid room ID"]

            })
        }


    }).catch(err=>{
        console.log(err);
    })
}