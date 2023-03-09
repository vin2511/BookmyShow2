const express = require('express')
const BookingRouter = express.Router();

const { getBooking, postBooking, updateBooking, deleteBooking, getBookingById, deleteBookingByUserId,getBookingByUserId } = require("../Controller/tb_booking_info")

BookingRouter.get('/viewbooking', getBooking)
BookingRouter.post('/addbooking', postBooking)
BookingRouter.put('/updatebooking/:booking_id', updateBooking)
BookingRouter.delete('/deletebooking/:booking_id', deleteBooking)
BookingRouter.delete('/deletebookingById/:user_id', deleteBookingByUserId)
BookingRouter.get('/viewbookingById/:booking_id', getBookingById)
BookingRouter.get('/viewbookingByUserId/:user_id', getBookingByUserId)

module.exports = { BookingRouter };