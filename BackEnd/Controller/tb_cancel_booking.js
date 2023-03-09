const conn = require("../Models/Connections")

let getCancelBooking = async (req, res) => {
    try {
        const q1 = "SELECT * FROM cancel_booking";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
};

let getCancelBookingByUserId = async (req, res) => {
    try {
        const q_id = "SELECT * FROM cancel_booking WHERE user_id=?";
        const d_id = [req.body, req.params.user_id]
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
};

let postCancelBooking = async (req, res) => {
    try {
        const q2 = "INSERT INTO cancel_booking SET";
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

let updateCancelBooking = async (req, res) => {
    try {
        const q3 = "UPDATE cancel_booking SET? WHERE booking_id=?";
        const d3 = [req.body, req.params.booking_id]
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw err;
            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
};

let deleteCancelBooking = async (req, res) => {
    try {
        const q4 = "DELETE FROM cancel_booking WHERE bookin_id=?";
        const d4 = [req.body, req.params.booking_id]
        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
};

module.exports ={getCancelBooking,getCancelBookingByUserId,postCancelBooking,updateCancelBooking,deleteCancelBooking}