let app = require("express")()
let http = require("http").Server(app)
let io = require("socket.io")(http)

var obj = require("mongoose")
obj.Promise= global.Promise
var url = "mongodb://localhost:27017/meanstack"
var mongooseDbOption ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption)

obj.connection; 

var ChatSchema = obj.Schema({
    name:String,
    message:String
})

var chat = obj.model("",ChatSchema,"Chat")

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

io.on("connection", (socket)=> {
    console.log("Connected to Client")
    socket.on("chat message", (msg)=>{
        console.log(msg)
        let c = new chat({
            name:msg.split(",")[0],
            message:msg.split(",")[1]
        })
        c.save((err,result)=>{
            if(!err){
                console.log(result)
            }else {
                console.log(err)
            }
        })
    })
})
http.listen(9090, ()=>console.log("Runnin on 9090"))