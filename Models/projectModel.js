const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    cdate:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
        
    }

})
const projects=mongoose.model("projects",projectSchema)
module.exports=projects