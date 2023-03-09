const express = require('express');
const ScreensRouter = express.Router();

const { getScreens, postScreens, updateScreens, deletescreens, getScreensById,getScreensByTheaterId  } = require('../Controller/tb_screens')

ScreensRouter.get('/viewscreen', getScreens)
ScreensRouter.post('/addscreen', postScreens)
ScreensRouter.put('/updatescreen/:screens_id', updateScreens)
ScreensRouter.delete('/deletescreen/:screens_id', deletescreens)
ScreensRouter.get('/viewscreenById/:screens_id', getScreensById)
ScreensRouter.get('/viewscreenByTheaterId/:theater_id', getScreensByTheaterId)

module.exports = { ScreensRouter }