//Import modules
const express=require("express");

//Instantiate router
const router=express.Router();

//Import controllers
const appController=require("../controllers/appController");

//Import middleware
const {ensureAuth,ensureGuest}=require("../middlewares/is-Auth");

// GET: /
router.get("/",ensureAuth,appController.getIndex);

router.get("/create-room",ensureAuth,appController.getCreateRoom);

router.get("/join-room",ensureAuth,appController.getJoinRoom);

router.get("/room",ensureAuth,appController.getRoom);

//Export router
module.exports=router;