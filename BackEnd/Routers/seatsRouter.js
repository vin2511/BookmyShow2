const express = require('express')
const SeatsRouter= express.Router();

const { getSeats, postSeats, updateSeats, deleteSeats, getSeatsByScreenId,getSeatsByName} = require ('../Controller/tb_seats')



SeatsRouter.get('/viewseat', getSeats)
SeatsRouter.post('/addseat', postSeats)
SeatsRouter.put('/updateseat/:seat_name', updateSeats)
SeatsRouter.delete('/deleteseat/:seat_name', deleteSeats)
SeatsRouter.get('/viewseatByScreensId/:screens_id', getSeatsByScreenId)
SeatsRouter.get('/viewseatByName/:seat_name', getSeatsByName)

module.exports = { SeatsRouter };