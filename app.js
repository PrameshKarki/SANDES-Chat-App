//Import modules
const path=require("path");

const express=require("express");
const dotenv=require("dotenv");
const socket=require("socket.io");
const ejs=require("ejs");

//Import routers
const appRoutes=require("./routes/appRoutes");

//Load config
dotenv.config({path:"./config/config.env"});

//Instantiate express app
const app=express();

//Serve static files
app.use(express.static(path.join(__dirname,"public")));

//Set view engine
app.set("view engine","ejs");
app.set("views","views");

//Use routes
app.use(appRoutes);

//Listen server
const server=app.listen(process.env.PORT || 5000);

//Instantiate socket
const io=socket(server);

io.on("connection",(socket)=>{
    console.log("A user connected!");
    
    
    socket.on("disconnect",()=>{
        console.log("A user disconnected");
    })
})
