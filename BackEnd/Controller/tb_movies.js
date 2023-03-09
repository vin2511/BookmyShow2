const { createQuery } = require("../Models/Connections");
const conn = require("../Models/Connections")



let getMovies = async (req, res) => {
    try {
        //const d1= req.body;
        const q1 = "SELECT * FROM movies";
        await conn.query(q1, (err, result) => {
            if (err) {
                res.send(err.sqlMessage)
            }
            else {
                res.send(result)
            }
        })
    }
    catch (err) {
        res.send(err.message)
    }
};

let getMoviesByName = async (req, res) => {
    try {
        const d1 = req.query.movie_name;

        const q1 = "SELECT * FROM movies WHERE movie_name = ?";
        await conn.query(q1, d1, (err, result) => {
            if (err) {
                res.send(err.sqlMessage)
            }
            else {
                res.send(result)
            }
        })
    }
    catch {
        res.send(result)
    }
}

// let getMovieByTheater = async(req, res) =>{
//     try{
//         const d1 = req.query.theater_id;
//         const  q1= "Select * from movies Where"
//     }
// }

let postMovies = async (req, res) => {
    try {
        const d2 = req.body;
        const q2 = "INSERT INTO movies SET?";
        
        await conn.query(q2, d2, (err, result) => {
            if (err) {
                res.send(err.sqlMessage)
            }
            else {
                res.send(result)
            }

        }
        )
    } catch (err) {
        res.send(err.sqlMessage)

    }
};

let updateMovies = async (req, res) => {
    try {
        const d3 = [req.body, req.params.movies_id]
        const q3 = "UPDATE movies SET ? WHERE movies_id =?";
        await conn.query(q3, d3, (err, result) => {
            if (err) {
                res.send(err.sqlMessage)
            }
            else {
                res.send(result)
            }
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
};
let updateMoviesByName= async(req,res)=>{
    try{
        const d3 =req.params.movie_name
        const q3=`update movies SET ? WHERE movie_name =${movie_name}`;
        await conn.query(q3,d3,(err,result)=>{
            if(err){
                res.send(err.message)
            }
            else{
                res.send(result)
            }
        })
    }
    catch(err){
    res.send(err.sqlMessage)
}
}

let deleteMovies = async (req, res) => {
    try {
        const d4 = req.query.movies_id
        const q4 = `DELETE FROM movies WHERE movies_id=?`
        await conn.query(q4, [d4], (err, result) => {
            if (err) {
                res.send(err.sqlMessage)
            }
            else {
                res.send(result)
            }

        })
    }
    catch (err) {
        res.send(err.sqlMessage)
    }
};

let deleteMoviesByName = async (req, res) => {
    try {
        const d4 = [req.query.movie_name]
        const q4 = "DELETE FROM movies WHERE movie_name = ? "
        await conn.query(q4, d4, (err, result) => {
            if (err) {
                res.send(err.sqlMessage)
            }
            else {
                res.send(result)
            }

        })
    }
    catch (err) {
        res.send(err.sqlMessage)
    }
}





module.exports = { getMovies, postMovies, updateMovies,updateMoviesByName,deleteMovies, getMoviesByName,deleteMoviesByName }
