//Import modules
const express=require("express");

//Instantiate router
const router=express.Router();

//Import controllers
const appController=require("../controllers/appController");

router.get("/",appController.getIndex);

//Export router
module.exports=router;