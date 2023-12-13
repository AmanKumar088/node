require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(`${process.env.DB_URL}`).
then(db => {
    console.log('DB is connected')
    // console.log(db)
}).
catch(err => {
    console.log("DB not connected ")
    console.log(err)
}
);