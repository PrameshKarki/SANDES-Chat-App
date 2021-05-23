//Import modules
const express=require("express");

//Instantiate router
const router=express.Router();

//Import controllers
const appController=require("../controllers/appController");

// GET: /
router.get("/",appController.getIndex);

router.get("/room-id",appController.getRoomId);

router.get("/room",appController.getRoom);

//Export router
module.exports=router;