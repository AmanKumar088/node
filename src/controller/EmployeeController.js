const { ObjectId } = require("mongodb");
const AuthModel = require("../model/AuthModel");
const EmployeeModel=require('../model/EmployeeModel');


exports.getAllEmployee = async (request,response,next)=>{
    try{
      let res =  await AuthModel.find()
        res = res.map(e=>{
        const obj = {};
        obj.image = "http://localhost:9000/images/emp.jpg"
        obj.name = e.name
        obj._id=e._id
        obj.email = e.email;
        return obj;
      })
      

      if(res){
        response.json({
            status:"success",
            data:res
        })
      }
    }
    catch(err){
      console.log(err)
    }
}





exports.AddEmployeeData=async (request,response)=>{
  try{
    const data = request.body;
        const employeeData = {
          Employee_name:data.name,
          Employee_email:data.email,
          Employee_details:data.details,
          Employee_job_city:data.job_city
        }
    const el=await EmployeeModel.create(employeeData)
    response.json({
      status:'success',
      empdata:el
    })
  }catch(error){
    console.log(error)
  }
}



exports.EmployeeGet=async (request,response)=>{
  try{
        const id=request.params
        const ww=request.body
        const rr=await EmployeeModel.find({_id:id})
        response.json({
          status:"success",
          empget:rr
        })
  }catch(error){
      console.log(error)
  }
}



exports.EmployeeUpdate=async (request,response)=>{
  try{
    const id=request.params
    const res=request.body
    const query={
      name:res.name,
      email:res.email,
      details:res.details,
      job_city:res.job_city
    }
    const tt=await EmployeeModel.updateOne({_id:id.id})
    response.json({
      status:"success",
      empUpdate:tt
    })
  }catch(error){
    console.log(error)
  }
}




exports.EmployeeDelete=async (request,response)=>{
  
  try{
    const ww=request.params
    const pp=await EmployeeModel.deleteOne({_id:ww.id})
    response.json({
      status:"success",
      empDelete:pp
    })
  }catch(error){
    console.log(error)
  }
}




exports.uploadImage = async (request,response,next)=>{
  try{
   const userid = request.id;
   const imagePath = request.body.image
   console.log(userid)
   console.log(imagePath)

   const  res = await AuthModel.updateOne({_id:new ObjectId(userid)},{profile_image:imagePath});
   console.log(res)
   if(res){
    response.json({
      status: "success",
     message:"Upload Image Profile Successfully"
  })
   }
  }
  catch(err){
    response.json({
      status: "Invalid details",
      error:err
  })
  }
}