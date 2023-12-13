const http=require('http');
const app=require('./app');
require('dotenv').config()

const HOST=process.env.HOST
const PORT=process.env.PORT;

const server=http.createServer(app);
 
server.listen(PORT,HOST,(request,response)=>{
   
    console.log(`server started http://${HOST}:${PORT}`)
})


