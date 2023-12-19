const bcrypt = require('bcryptjs');
exports.convertPassword = async function(password){
   const salt =  await bcrypt.genSalt(10)
   return await bcrypt.hash(password,salt)              
}


exports.comparePassword =  function(encpyPass,reqPass){
    return bcrypt.compareSync(reqPass,encpyPass)         
}

exports.tokenTime = function(){
    return {
        expiresIn:"30d"
    }
}


