exports.getLogIn=(req,res)=>{
    res.render("auth/login",{
        pageTitle:"Log In-SANDES"
    });
}

exports.getSignUp=(req,res)=>{
    res.render("auth/signup",{
        pageTitle:"Sign Up-SANDES"
    })
}