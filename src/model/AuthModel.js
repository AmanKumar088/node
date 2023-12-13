require('../configs/Db')
const Collection = require('../configs/Collection')
const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Name is Required"]},
    email:{type:String,required:[true,"Email is Required"],unique:true},
    password:String,
    profile_image:String,
},{
    timestamps:true
})

const AuthModel = mongoose.model(Collection.account,AuthSchema);

module.exports = AuthModel;




