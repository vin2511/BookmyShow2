const conn = require("../Models/Connections")

let getScreens = async (req, res) => {
    try {
        const q1 = "SELECT * FROM screens";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
}  


let getScreensById = async (req, res) => {
    try {
        const q_id = "SELECT * FROM screens WHERE screens_id=?";
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

let getScreensByTheaterId = async (req, res) => {
    try {
        const q_id = "SELECT * FROM screens WHERE theater_id=?";
        const d_id = req.params.theater_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let postScreens = async (req, res) => {
    try {
        const q2 = "INSERT INTO screens SET?";
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

let updateScreens = async (req, res) => {
    try {
        const q3 = 'UPDATE screens SET ? WHERE screens_id =?';
        const d3 = [req.body, req.params.screens_id];
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
};

let deletescreens = async (req, res) => {
    try {
        const q4 = "DELETE FROM screens WHERE screens_id =?";
        const d4 = req.params.screens_id
        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw err

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
}


// let deletescreensByTheaterId = async (req, res) => {
//     try {
//         const q4 = "DELETE FROM screens WHERE theater_id =?";
//         const d4 = req.params.screens_id
//         await conn.query(q4, d4, (err, result) => {
//             if (err)
//                 throw err

//             res.send(result)
//         })
//     } catch (err) {
//         res.send(err.message)

//     }
// }

module.exports = { getScreens, postScreens, updateScreens, deletescreens, getScreensById,getScreensByTheaterId }