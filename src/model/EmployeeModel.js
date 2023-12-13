require('../configs/Collection');
const Collection=require('../configs/Collection');
const mongoose=require('mongoose');

const EmployeeSchema=new mongoose.Schema({
    Employee_name:{type:String,require:[true,"Name is require"]},
    Employee_email:{type:String,require:[true,"email is reqiure"],unique:true},
    Employee_details:{type:String},
    Employee_job_city:{type:String}
},{
    timestamps:true
})

const EmployeeModel=mongoose.model(Collection.employee,EmployeeSchema)

module.exports=EmployeeModel



