const express = require ('express')
const UserRouter = express.Router();

const { getUser, userRegister ,userLogin, updateUser, deleteUser,getUserById} = require("../Controller/tb_users")

UserRouter.get('/viewuser',getUser)
UserRouter.post('/adduser', userRegister )
UserRouter.post('/loginuser', userLogin )
UserRouter.put('/updateuser/:user_id', updateUser)
UserRouter.delete('/deleteuser/:user_id',deleteUser)
UserRouter.get('/userById/:user_id', getUserById )
module.exports = {UserRouter};