exports.getIndex=(req,res)=>{
    res.render("index");
}

exports.getRoomId=(req,res)=>{
    res.render("room-id",{
        pageTitle:"Room- Sandes",
    })
}

exports.getRoom=(req,res)=>{
    res.render("room",{
        pageTitle:"Room - SANDES"
    })

}