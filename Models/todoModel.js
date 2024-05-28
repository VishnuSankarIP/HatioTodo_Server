const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    todoa:{
        type:String,
        required:true
    },
    desa:{
        type:String,
        required:true
    },
    sta:{
        type:String,
        required:true
        
    },
    todob:{
        type:String,
        required:true
    },
    desb:{
        type:String,
        required:true
    },
    stb:{
        type:String,
        required:true
        
    },
    todoc:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    stc:{
        type:String,
        required:true
        
    },
    todod:{
        type:String,
        required:true
    },
    desd:{
        type:String,
        required:true
    },
    std:{
        type:String,
        required:true
        
    },
    userId:{
        type:String,
        required:true
        
    },
    projectId:{
        type:String,
        required:true
        
    }
   


})
const todos=mongoose.model("todos",todoSchema)
module.exports=todos