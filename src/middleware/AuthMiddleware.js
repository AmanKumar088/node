const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.isAuth = function(request,response,next){
    try{

        const token = request.headers['authorization'].split(" ")[1]
        const secretKey = process.env.SECRET_KEY
        const data = jwt.verify(token,secretKey);
        if(data){
            request.id = data.userId;
            next();
        }
        else
            response.status(401).json({
                status:'failed',
                message:"Unauthorized User !!"
            })

    }
    catch(err){
    response.status(401).json({
        status:'failed',
        message:"Unauthorized User !!"
    })
    }
}