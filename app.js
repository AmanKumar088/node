// const express = require('express');
// const app = express();
// app.use(express.json());            

// app.get('/search', function(request,response){
//         // console.log(response.json({name:'aman'}))
//         const x=request.query
//         x.name=x.name + 'ji'
//         x.email=x.email + 'ji'
//         console.log(x)
//         response.json(x)


        
// })

// app.post('/',function(request,response){
//     console.log(request.body)
// })


// module.exports = app






//(2)



// const express = require('express');
// const app = express();
// app.use(express.json()); 



// app.get('/employee/:id/:name',function(request,response){
//     const y=request.params
//     console.log(y.id)
//     console.log(y.name)
// })


// module.exports=app




//(3)

//mvs :- module view controller

const express = require('express');
const AuthRouter = require('./src/routes/AuthRouter');
const employeeRouter = require('./src/routes/EmployeeRouter');
const app = express();
app.use(express.json());
// const {authSignup,authlogin}=require('./src/controller/AuthController');
// const { getEmployee,AddEmployeeData,EmployeeGet,EmployeeUpdate,EmployeeDelete } = require('./src/controller/EmployeeController');



// app.post('/signup',authSignup);

// app.post('/login',authlogin);

// app.get("/allemployee",getEmployee);

// app.post('/employee',AddEmployeeData);
// app.get('/employee',EmployeeGet);
// app.put('/employee/:id',EmployeeUpdate)
// app.delete('/employee/:id',EmployeeDelete)



app.use("/images",express.static(__dirname+"/public/image"))
app.use("/uploadImages",express.static(__dirname+"/public/upload"))
app.use("/auth",AuthRouter)
app.use('/eapi',employeeRouter)



module.exports=app