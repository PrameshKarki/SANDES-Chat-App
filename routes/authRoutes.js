//Import Modules
const express=require("express");

//Instantiate router
const router=express.Router();

//Import controller
const authController=require("../controllers/authController");

router.get("/login",authController.getLogIn);

router.get("/signup",authController.getSignUp);

//Export router
module.exports=router;