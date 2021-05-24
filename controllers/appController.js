exports.getIndex=(req,res)=>{
    res.render("index");
}

exports.getJoinRoom=(req,res)=>{
    res.render("join-room",{
        pageTitle:"Join Room- Sandes",
    })
}

exports.getRoom=(req,res)=>{
    res.render("room",{
        pageTitle:"Room - SANDES"
    })
}

exports.getCreateRoom=(req,res)=>{
    res.render("create-room",{
        pageTitle:"Create Room-Sandes"
    })
}