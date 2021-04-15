let fs = require("fs")
let obj = require("mongoose")
obj.Promise= global.Promise
let url = "mongodb://localhost:27017/meanstack"
const mongooseDbOption ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption)

let db = obj.connection; 

let data = fs.readFileSync("call_data.json");
let callString = data.toString();
let callJson = JSON.parse(callString);

console.log(callJson)

db.on("error",(err)=>console.log(err));
db.once("open",()=>{

     
    let CallSchema = obj.Schema({
        _id:Number,
        source:String,
        destination:String,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:String,
    })
    
    let Call = obj.model("",CallSchema,"CallRecord");

    for (var i = 0; i < callJson.length; i++) {
        let c1 = new Call(callJson[i]);
        c1.save((err,result)=>{
            if(!err){
                console.log("record inserted successfully"+result)
            }else {
                console.log(err);
            }
            //obj.disconnect();
        })
    }

})