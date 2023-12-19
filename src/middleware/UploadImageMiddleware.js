const multer = require('multer')
var arr=[]
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const path = 'IMG'+uniqueSuffix+"."+file.originalname.split(".")[1]
      arr.push(path)
      req.body.image=arr
      cb(null,path)
      
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports  = upload