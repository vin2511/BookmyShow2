const conn = require("../Models/Connections")
const uuid = require('uuid')
const bcrypt = require("bcrypt");
const { tokenCreate } = require("../MiddleWares/Auth")

let getOwner = async (req, res) => {
    try {
        const q1 = "SELECT * FROM theater_owner";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;
            //console.log(result)

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
};

let getOwnerById = async (req, res) => {
    try {
        const q_id = "SELECT * FROM theater_owner WHERE owner_id=?";
        const d_id = req.params.owner_id;
        const owner_id = req.body.owner_id;
        await conn.query(q_id, d_id, (err, result) => {
            // if (err)
            if (d_id != owner_id) {
                res.send("This User DOES NOT exist.Please enter Registered ID.")
            }
            else {
                res.send(result)
            }
        })

    } catch (err) {
        res.send(err.message)
    }
}

let ownerRegister = async (req, res) => {
    try {
        const { Owner_name, Email_id, Password, Status, Password_conf } = req.body;

        if (!Owner_name || !Email_id || !Password || !Status || !Password_conf) {
            return res.json({ "status": "Failed", "response": "All fields are required." });
        }

        if (Password !== Password_conf) {

            return res.status(400).json({ "status": "failed", "message": "Password and Confirm Password doesn't match" });
        }

        const ownerExistsQuery = 'SELECT * FROM theater_owner WHERE Email_id = ?';

        const result = await conn.query(ownerExistsQuery, [Email_id]);

        if (result.length > 0) {
            return res.status(409).json({ "status": "failed", "message": "Email already exists" });
        }

        const salt = await bcrypt.genSalt(8)
        const passwordHash = await bcrypt.hashSync(Password, salt)
        //console.log(passwordHash);

        const data = {
            id: uuid.v4(),
            Owner_name: Owner_name,
            Email_id: Email_id,
            Password: passwordHash,
            Status: Status,
            Password_conf: Password_conf

        }
        const q2 = "INSERT INTO theater_owner SET?";
        //const d2 = req.body;
        await conn.query(q2, data, async (err, result) => {
            if (err) {
                return res.json({ Error: err.sqlMessage })
            }
            const token = await tokenCreate(result.insertId);
            console.log("token", token);

            return res.status(200).json({ "Status": "Success", "Message": "User Registered SuccessFully", "token": token })


        });
        //console.log(data)

    } catch (err) {
        return res.json({ "status": "failed", "message": "Unable to Register" });
    }
};


let loginOwner = async (req, res) => {
    try {
        const { Email_id, Password } = req.body;

        const q1 = `SELECT * from theater_owner Where Email_id = '${Email_id}'`;
        await conn.query(q1, [Email_id], async (err, result) => {

            if (!result.length) {
                return res.json({ status: 401, response: "User not found" });
            }

            let passCheck = await bcrypt.compare(Password, result[0].password);

            if (passCheck) {
                let token = await tokenCreate(result[0].id);
                console.log("token:", token);
                return res.json({ status: 200, response: "Login Success", token });
            }
            else {
                return res.json({ status: 200, response: "wrong password" });

            }
        })
    }

    catch (err) {
        res.json({ status: 200, response: "Invalid Email_id" })
    }
}

let updateOwner = async (req, res) => {
    try {
        const q3 = "UPDATE theater_owner SET ? WHERE id=?";
        const d3 = req.params.id;
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
};

let deleteOwner = async (req, res) => {
    try {
        const q4 = "DELETE FROM theater_owner WHERE id =?";
        const d4 = req.params.id;
        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw err

            res.send(result)
        })
    } catch (err) {
        res.send(err.message)

    }
}

module.exports = { getOwner, ownerRegister, updateOwner, deleteOwner, getOwnerById, loginOwner }