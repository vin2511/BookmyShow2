const express = require('express')
const CancelRouter = express.Router();

const { getCancelBooking, getCancelBookingByUserId, postCancelBooking, updateCancelBooking, deleteCancelBooking } = require("../Controller/tb_cancel_booking")

CancelRouter.get('/viewcancel',getCancelBooking)
CancelRouter.post('/addcancel',postCancelBooking)
CancelRouter.put('/updatecancel/:booking_id',updateCancelBooking)
CancelRouter.delete('/deletecancel/:booking_id',deleteCancelBooking)
CancelRouter.get('/viewcancelByID/:user_id',getCancelBookingByUserId)

module.exports= {CancelRouter}