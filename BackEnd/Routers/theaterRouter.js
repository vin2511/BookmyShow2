const express = require ('express')
const TheaterRouter = express.Router();

// const admin_validation = require ('../Validation/adminValidation')
const {getTheater, postTheater, updateTheater,deleteTheater} = require("../Controller/tb_theater");

TheaterRouter.get('/viewtheater',getTheater)
TheaterRouter.post('/addtheater', postTheater)
TheaterRouter.put('/updatetheater/:theater_id', updateTheater)
TheaterRouter.delete('/deletetheater/:theater_id',deleteTheater)

module.exports = {TheaterRouter};