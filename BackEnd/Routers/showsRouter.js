const express = require('express')
const ShowsRouter = express.Router();

const { getShows,getShowsByScreenId,getShowsById, getShowsByMovieId , postShows, updateShows, deleteShows, } = require('../Controller/tb_shows')

ShowsRouter.get('/viewshows',getShows)
ShowsRouter.get('/viewshowsById/:show_id',getShowsById)
ShowsRouter.get('/viewshowsByScreenId/:screen_id',getShowsByScreenId)
ShowsRouter.get('/viewshowsByMovieId/:movie_id',getShowsByMovieId)

ShowsRouter.post('/addshows',postShows)
ShowsRouter.put('/updateshows/:show_id',updateShows)
ShowsRouter.delete('/deleteshows/:show_id',deleteShows)


module.exports ={ShowsRouter}