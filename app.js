//Import modules
const http=require("http");
const path=require("path");

const express=require("express");
const dotenv=require("dotenv");
const socket=require("socket.io");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const session=require("express-session");
const mongoDBStore=require("connect-mongodb-session")(session);
const flash=require("connect-flash");

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

//Set Store Variable
const store=new mongoDBStore({
    uri:process.env.MONGODB_URI,
    collections:"Sessions"
})

//Set Session
app.use(session({
secret:"Gautam buddha was born in nepal",
resave:false,
saveUninitialized:false,
store:store
}))

//Set flash
app.use(flash());

//Set body parser
app.use(bodyParser.urlencoded({extended:false}));

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



mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    //Listen server
    server.listen(process.env.PORT || 5000);
}).catch(err=>{
    console.error(err);
})


