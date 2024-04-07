const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);


const {Server} = require("socket.io");
const io = new Server(expressServer);

io.on('connection',function (socket){
    console.log("New user connected")
    

    //server side to client side data show

    // setInterval(function(){
    //     let d = new Date();
    //     let t = d.getTime();
    //     socket.emit("newEvent",t);
    // },10)

    // setTimeout(function(){
    //     socket.send("Learn WS with Rabbil hasan (Server==> client)")
    // },10000)

    // Second step or code upper code is just for test purpose

    //client side to server side data show

    socket.on("message",function(msg){
        console.log(msg);
    })

    socket.on('disconnect', function (){
        console.log("User Disconnected")
    })
})

app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html")
})

expressServer.listen(5000, ()=> console.log(`Server Started PORT: 5000`))