const conn = require("../Models/Connections")
const uuid = require('uuid')
const bcrypt = require("bcrypt");
//const { query } = require("express");
const { tokenCreate } = require("../MiddleWares/Auth")

//"/get?movie_name=${input}"

let getUser = async (req, res) => {
    try {
        const q1 = "SELECT * FROM user";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        }
        )
    } catch (err) {
        res.send(err.Message)
    }
};

let getUserById = async (req, res) => {
    try {
        const q_id = "SELECT * FROM user WHERE user_id = ?";
        const d_id = req.params.user_id;
        await conn.query(q_id, d_id, (err, result) => {
            // if (err) throw err;
            if (result.length > 0) {
                res.send(result)
                console.log(result.length)
            }
            else
                res.send("This user_id does not exist.Please enter registered User_id.")
        })
    }
    catch (err) {
        res.send(err.message)
    }
}


const userRegister = async (req, res) => {
    try {
        const { User_name, Mobile_no, Email_id, Gender, Address, Password, Password_conf } = req.body;

        if (!User_name || !Mobile_no || !Email_id || !Gender || !Address || !Password || !Password_conf) {
            return res.json({ "status": "Failed", "response": "All fields are required." });
        }

        if (Password !== Password_conf) {
            return res.status(400).json({ "status": "failed", "message": "Password and Confirm Password doesn't match" });
        }

        const userExistsQuery = 'SELECT * FROM user WHERE Email_id = ?';

        conn.query(userExistsQuery, [Email_id], async (err, result) => {
            if (err) {
                return res.json({ "status": "failed", "message": "Unable to Register" });
            }

            if (result.length > 0) {
                return res.status(409).json({ "status": "failed", "message": "Email already exists" });
            }

            try {
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(Password, salt);
                const data = {
                    User_id: uuid.v4(),
                    User_name: User_name,
                    Mobile_no: Mobile_no,
                    Email_id: Email_id,
                    Gender: Gender,
                    Address: Address,
                    Password: passwordHash
                    
                };

                const q = 'INSERT INTO user SET ?';
                conn.query(q, data, (err, result) => {
                    if (err) {
                        return res.json({ "status": "failed", "message": "Unable to Register" });
                    }

                    const token = tokenCreate(result[0].Email_id);
                    console.log("token", token);

                    return res.status(200).json({ "Status": "Success", "Message": "User Registered SuccessFully", "token": token })

                });
            } catch (err) {
                return res.json({ "status": "failed", "message": "Unable to Register" });
            }
        });
    } catch (err) {
        return res.json({ "status": "failed", "message": "Unable to Register" });
    }
};

let userLogin = async (req, res) => {
    try {
        const { Email_id, Password } = req.body;
        if (!Email_id || !Password) {
            return res.status(400).json({ "status": "failed", "message": "All Fields are Required" });
        }

        const q1 = `SELECT Email_id,Password from user where Email_id =?`;
        await conn.query(q1, [Email_id], async (err, result) => { 
            if (err) {
                return res.status(500).json({ "status": "failed", "message": "Unable to Login" });
            }

            if (!result.length) {
                return res.status(401).json({ "status": "failed", "response": "Email or Password is not valid." });
            }

            const dbpassword = result[0].Password;
            const passwordcheck = await bcrypt.compare(Password, dbpassword);
            if (passwordcheck) {
                const token = await tokenCreate(result[0].Email_id);
                console.log("token", token);
                res.send({ "Status": "Success", "Message": "Login SuccessFully", "token": token })
            }
            else {
                return res.json({ "status": "Failed", response: "Email or Password is not valid." })
            }
        })
    }
    catch (err) {
        console.log(err)
        res.json({ "status": "Failed", response: "Unable to Login" })
    }
}



let updateUser = async (req, res) => {
    try {
        const q3 = "UPDATE user SET ? WHERE user_id=?";

        const d3 = req.params.user_id
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw err;
            res.send(result)

        })
    } catch (err) {
        res.send(err.Message)
    }
}

let deleteUser = async (req, res) => {
    try {
        const q4 = "DELETE FROM user SET WHERE user_id =?"
        const d4 = [req.body, req.params.user_id];

        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw err;
            res.send(result)

        })
    } catch (error) {
        res.send(err.Message)
    }
}

module.exports = { getUser, userRegister, updateUser, deleteUser, getUserById, userLogin }