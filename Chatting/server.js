let app = require("express")()
let http = require("http").Server(app)
let io = require("socket.io")(http)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

io.on("connection", (socket)=> {
    console.log("Connected to Client")
    socket.on("chat message", (msg)=>{
        console.log(msg)
    })
})
http.listen(9000, ()=>console.log("Runnin on 9000"))