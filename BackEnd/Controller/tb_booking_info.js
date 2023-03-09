const conn = require('../Models/Connections')

let getBooking = async (req, res) => {
    try {
        const q1 = "SELECT * FROM booking_info";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;

            res.send(result);
        })


    } catch (err) {
        res.send(err.Message)

    }
};

let getBookingById = async (req, res) => {
    try {
        const q_id = "SELECT * FROM booking_info WHERE booking_id =?";
        const d_id = req.params.booking_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result);
        })
    } catch (err) {
        res.send(err.Message)

    }
}


let getBookingByUserId = async (req, res) => {
    try {
        const q_id = "SELECT * FROM booking_info WHERE user_id =?";
        const d_id = req.params.user_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result);
        })
    } catch (err) {
        res.send(err.Message)

    }
}

let postBooking = async (req, res) => {
    try {
        const q2 = "INSERT INTO booking_info SET?";
        const d2 = req.body;
        await conn.query(q2, d2, (err, result) => {
            if (err)
                throw err;

            res.send(result)

        })

    } catch (err) {
        res.send(err.Message)
    }
};

let updateBooking = async (req, res) => {
    try {
        const q3 = "UPDATE booking_info SET ? WHERE booking_id =?";
        const d3 = [req.body, req.params.booking_id]
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw (err)

            res.send(result)
        })

    } catch (err) {
        res.send(err.sqlMessage)
    }
};

let deleteBooking = async (req, res) => {
    try {
        const q4 = [req.body, res.params.booking_id]
        const d4 = "DELETE FROM booking_info WHERE booking_id = ?";
        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw (err)

            res.send(result)
        })
    }
    catch (err) {
        res.send(err.sqlMessage)
    }
};

let deleteBookingByUserId= async (req, res) => {
    try {
        const q5 = [req.body, res.params.booking_id]
        const d5 = "DELETE FROM booking_info WHERE user_id = ?";
        await conn.query(q5, d5, (err, result) => {
            if (err)
                throw (err)

            res.send(result)
        })
    }
    catch (err) {
        res.send(err.sqlMessage)
    }
};

module.exports = { getBooking, postBooking, updateBooking, deleteBooking, getBookingById, deleteBookingByUserId, getBookingByUserId }
