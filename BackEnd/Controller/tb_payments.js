const conn = require("../Models/Connections")

let getPayment = async (req, res) => {
    try {
        const q1 = "SELECT * FROM payment";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
};

let getPaymentById = async (req, res) => {
    try {
        const q_id = "SELECT * FROM payment WHERE payment_id=?";
        const d_id = req.params.payment_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let getPaymentByUserId = async (req, res) => {
    try {
        const q_id = "SELECT * FROM payment WHERE user_id=?";
        const d_id = req.params.user_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let getPaymentByBookId = async (req, res) => {
    try {
        const q_id = "SELECT * FROM payment WHERE booking_id=?";
        const d_id = req.params.booking_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })

    } catch (err) {
        res.send(err.message)
    }
}

let postPayment = async (req, res) => {
    try {
        const q2 = "INSERT INTO payment SET";
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

let updatePayment = async (req, res) => {
    try {
        const q3 = "UPDATE payment SET ? WHERE Payment_id=?";
        const d3 = [req.body, req.params.payment_id];
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
};

let deletePayment = async (req, res) => {
    try {
        const q4 = "DELETE FROM payment WHERE payment_id =?";
        const d4 = [req.body, req.params.payment_id]
        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw err

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
}

module.exports = { getPayment, postPayment, updatePayment, deletePayment, getPaymentById, getPaymentByBookId, getPaymentByUserId }