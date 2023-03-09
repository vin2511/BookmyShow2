const conn = require("../Models/Connections")

let getShows = async (req, res) => {
    try {
        const q1 = "SELECT * FROM shows";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
};

let getShowsById = async (req, res) => {
    try {
        const id = req.params.show_id
        const q_id = "SELECT * FROM shows WHERE show_id=?";

        // const d_id = [req.body, req.params.show_id];
        await conn.query(q_id, id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let getShowsByScreenId = async (req, res) => {
    try {
        const q_id = "SELECT * FROM shows WHERE screen_id=?";
        const d_id = req.params.screen_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let getShowsByMovieId = async (req, res) => {
    try {
        const q_id = "SELECT * FROM shows WHERE movie_id=?";
        const d_id = req.params.movie_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let postShows = async (req, res) => {
    try {
        const q2 = "INSERT INTO shows SET?";
        const d2 = req.body;
        await conn.query(q2, d2, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)

    }
};

let updateShows = async (req, res) => {
    try {
        const q3 = "UPDATE shows SET ? WHERE show_id = ?";
        const d3 = [req.body,req.params.show_id];
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
};

let deleteShows = async (req, res) => {
    try {
        const q4 = "DELETE FROM shows WHERE show_id = ? ";
        const d4 = req.params.show_id;
        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw err

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
}

module.exports = { getShows, postShows, updateShows, deleteShows, getShowsByScreenId, getShowsById, getShowsByMovieId }