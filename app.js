//Import modules
const http=require("http");
const path=require("path");

const express=require("express");
const dotenv=require("dotenv");
const socket=require("socket.io");
const ejs=require("ejs");

//Import routers
const authRoutes=require("./routes/authRoutes");
const appRoutes=require("./routes/appRoutes");

//Load config
dotenv.config({path:"./config/config.env"});

//Instantiate express app
const app=express();

//Create server
const server=http.createServer(app);

//Serve static files
app.use(express.static(path.join(__dirname,"public")));

//Set view engine
app.set("view engine","ejs");
app.set("views","views");

//Use routes
app.use(authRoutes);
app.use(appRoutes);

//Instantiate socket
const io=socket(server);

io.on("connection",(socket)=>{
    console.log("A user connected!");
    
    
    socket.on("disconnect",()=>{
        console.log("A user disconnected");
    })
})

//Listen server
server.listen(process.env.PORT || 5000);

