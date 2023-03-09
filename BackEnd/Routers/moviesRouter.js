const express = require ('express');
const MoviesRouter = express.Router();

const {getMovies, postMovies, updateMovies,updateMoviesByName, deleteMovies, getMoviesByName, deleteMoviesByName} = require ("../Controller/tb_movies")

MoviesRouter.get('/viewMovies',getMovies)
MoviesRouter.post('/addMovies',postMovies)

MoviesRouter.put('/updateMovies/:movies_id',updateMovies)
MoviesRouter.put('updateMovieByName/:movie_name',updateMoviesByName)
MoviesRouter.delete('/deleteMoviesById',deleteMovies)

//BY Name
MoviesRouter.get('/viewMoviesByName',getMoviesByName)
MoviesRouter.delete('/deleteMoviesByName',deleteMoviesByName)

module.exports = {MoviesRouter};