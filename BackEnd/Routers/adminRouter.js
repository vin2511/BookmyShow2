const express = require ('express');
const AdminRouter = express.Router();

// const admin_validation = require ('../Validation/adminValidation')
const { getAdmin, adminRegister, loginAdmin,updateAdmin, deleteAdmin, getAdminById } = require("../Controller/tb_admin")


//Public Routes
AdminRouter.post('/addadmin', adminRegister)


AdminRouter.get('/viewadmin',getAdmin)

AdminRouter.post('/loginadmin', loginAdmin)
AdminRouter.put('/updateadmin/:admin_id', updateAdmin)
AdminRouter.delete('/deleteadmin/:admin_id',deleteAdmin)
AdminRouter.get('/viewadminById/:admin_id',getAdminById)
module.exports = {AdminRouter};