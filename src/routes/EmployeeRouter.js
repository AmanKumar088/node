const express = require('express');
const { getAllEmployee, AddEmployeeData, EmployeeDelete, EmployeeGet, EmployeeUpdate, uploadImage } = require('../controller/EmployeeController');
const { isAuth } = require('../middleware/AuthMiddleware');
const employeeRouter = express.Router()
const upload = require('../middleware/UploadImageMiddleware');
employeeRouter.use(isAuth);                      // isAuth middleware

// employeeRouter.get("/allemployee",isAuth,getEmployee);

employeeRouter.get("/allemployee",getAllEmployee);
employeeRouter.post('/employee',AddEmployeeData);
employeeRouter.get('/employee',EmployeeGet);
employeeRouter.put('/employee/:id',EmployeeUpdate)

employeeRouter.delete('/employee/:id',EmployeeDelete)

employeeRouter.post('/uploadImage',upload.single('image'),uploadImage)
employeeRouter.post('/uploadMultiple',upload.array('image'),uploadImage)

module.exports = employeeRouter;





