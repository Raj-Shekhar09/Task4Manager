let mongoose=require("mongoose")
let usersch=new mongoose.Schema({
	"_id":String,
	"pwd":String,
	
})
let um=mongoose.model("user",usersch)
module.exports=um