const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.isAuth = function (request, response, next) {
    try {

        const token = request.headers['authorization'].split(" ")[1]
        // console.log(token)

        const secretKey = process.env.SECRET_KEY

        // console.log(secretKey)
        const data = jwt.verify(token, secretKey)
        // console.log(data)
        if (data) {

            request.id = data.userId;
            next();

        } else {

            response.status(401).json({
                status: 'failed',
                message: "Unauthorized User !!"
            })

        }

    } catch (err) {
        console.log(err)
        response.status(401).json({
            status: 'failed',
            message: "Unauthorized User !!",
            error: err
        })
    }
}



