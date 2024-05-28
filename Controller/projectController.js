const projects=require('../Models/projectModel')

exports.addProject=async(req,res)=>{
    console.log("Inside login request");
    console.log(req.payload);

    const{title,cdate}=req.body
    const userId=req.payload
    console.log(title,cdate);
    

    try{

        const existingProject=await projects.findOne({title,userId})
        if(existingProject)
            {
                res.status(406).json("Project Already exist give another name")
            }
            else
            {
                const newProject=new projects({title,cdate,userId})
                await newProject.save()
                res.status(200).json(newProject)
            }

    }
    catch(err)
    {
        res.status(401).json(err)
    }
}


// get project


exports.getAllProject=async(req,res)=>{
    const userId=req.payload
    try{
        const allProjects=await projects.find({userId})
        res.status(200).json(allProjects)

    }
    catch(err)
    {
        res.status(401).json(err)
    }
}

// edit project title
exports.editProjectTitle=async(req,res)=>{
    console.log("Inside edit project");
    const {pid}=req.params
    const userId=req.payload
    const {title}=req.body
   
    try{
        const updatedProjectTitle=await projects.findByIdAndUpdate({_id:pid},{title,userId},{new:true})
        await updatedProjectTitle.save()
        res.status(200).json(updatedProjectTitle)
     
    }
    catch(err)
    {
        res.status(401).json(err)
    }
    
}
