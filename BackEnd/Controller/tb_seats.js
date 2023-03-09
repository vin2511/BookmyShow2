const conn = require("../Models/Connections")

let getSeats = async (req, res) => {
    try {
        const q1 = "SELECT * FROM seats";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
};

let getSeatsByName = async (req, res) => {
    try {
        const q_id = "SELECT * FROM seats WHERE seat_name=?";
        const d_id = req.params.seat_name;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let getSeatsByScreenId = async (req, res) => {
    try {
        const q_id = "SELECT * FROM seats WHERE screens_id=?";
        const d_id = req.params.screens_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let postSeats = async (req, res) => {
    try {
        const q2 = "INSERT INTO seats SET?";
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

let updateSeats = async (req, res) => {
    try {
        const q3 = "UPDATE seats SET ? WHERE seat_name=?";
        const d3 = [req.body, req.params.seat_name];
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
};

let deleteSeats = async (req, res) => {
    try {
        const q4 = "DELETE FROM seats WHERE seat_name =?";
        const d4 = req.params.seat_name
        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw err

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
}

module.exports = { getSeats, postSeats, updateSeats, deleteSeats, getSeatsByScreenId, getSeatsByName }