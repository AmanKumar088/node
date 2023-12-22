const AuthModel = require("../model/AuthModel");
const { convertPassword, comparePassword, tokenTime } = require("../utils/utils");
const sendMail = require('../utils/EmailVerify');
require("dotenv").config()
const jwt = require('jsonwebtoken')
exports.authSignup = async function (request, response) {
    try {

        const data = request.body;
        const signupData = {
            name: data.name,
            email: data.email,
            password: await convertPassword(data.password)
        }

        const res = await AuthModel.create(signupData);
        sendMail(res.email, `welcome to crud project signup verifiction mail and request verfiy user`, `hello ${res.name} signup successfully <a href="http://localhost:3000/verify?id=${res._id}">Verfiy</a>`)
        if (res) {
            response.json({
                status: "Success",
                message: "Signup Successfully",
                data: {
                    name: res.name,
                    email: res.email
                }
            })
        }

    }
    catch (err) {
        console.log(err)
        response.json({
            status: "Invalid details"
        })
    }

}

exports.authLogin = async function (request, response, next) {
    try {
        const reqData = request.body;
        const query = {
            email: reqData.email
        }
        const res = await AuthModel.findOne(query)
        if (res) {
            if (comparePassword(res.password, reqData.password)) {
                const bindKey = {
                    time: Date(),
                    userId: res._id,
                    name: res.name,
                    email: res.email
                }
                const secretKey = process.env.SECRET_KEY
                const token = jwt.sign(bindKey, secretKey, tokenTime())
                response.json({
                    status: "success",
                    token: token,
                    data: {
                        name: res.name,
                        email: res.email,
                        profile_image: res.profile_image
                    },
                    message: "Login Successfully"
                })
            }
            else {
                response.json({
                    status: "failed",
                    message: "Password is Incorrect"
                })
            }
        }
        else {
            response.json({
                status: "failed",
                message: "Email is incorrect"
            })
        }



    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Invalid Details"
        })
    }
}


exports.authUpdate = async function (request, response, next) {
    try {
        const responData = request.body
        const query = {
            email: responData.email,
            new_pass: responData.new_pass,
            old_pass: responData.old_pass
        }
        const res = await AuthModel.findOne({ email: query.email }, { password: 1 })
        if (res) {
            if (comparePassword(res.password, query.old_pass)) {
                const encryptePass = await convertPassword(query.new_pass)
                const tt = await AuthModel.updateOne({ email: query.email }, { $set: { password: encryptePass } })
                if (tt) {
                    response.json({
                        status: "success",
                        message: "Password Changed Successfully"
                    })
                }
            }
            else {
                response.json({
                    status: "failed",
                    message: "Old Pasword Does Not Match"
                })
            }
        }
        else {
            response.json({
                status: "failed",
                message: "Email is not Correct"
            })
        }
    } catch (error) {
        response.json({
            status: "failed",
            message: "Invalid details"
        })
    }
}



exports.updateStatus =async (request, response, next) => {
    try {
        const id=request.query.id;
        const query = {_id:id}
        const res = await AuthModel.updateOne(query,{status:1})
        if(res){
                response.json({
                    status:"success",
                    message:"Account Verifired"
                })
        }

       

    } catch (error) {
        response.json({
            status: "failed",
            message: "status failed",
            error: error
        })
    }
}
