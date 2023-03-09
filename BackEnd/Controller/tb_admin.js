const conn = require("../Models/Connections")
const uuid = require('uuid')
const bcrypt = require("bcrypt");
const { tokenCreate } = require("../MiddleWares/Auth")




let getAdmin = async (req, res) => {
    try {
        const q1 = "SELECT * FROM admin";
        await conn.query(q1, (err, result) => {
            if (err)
                throw err;

            res.send(result)
        })
    }
    catch (err) {
        res.send(err.message)
    }
};

let getAdminById = async (req, res) => {
    try {
        const q_id = "SELECT * FROM admin WHERE admin_id = ?";
        const d_id = req.params.admin_id;
        await conn.query(q_id, d_id, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    }
    catch {
        res.send(err.message)
    }
}
let adminRegister = async (req, res) => {
    //console.log("Hi")
    try {
        const { Admin_name, Password, email } = req.body;
        //console.log(password)
        const salt = await bcrypt.genSalt(8)
        const passwordHash = await bcrypt.hashSync(Password, salt)
        //console.log(passwordHash);

        const data = {
            Admin_id: uuid.v4(),
            Admin_name: Admin_name,
            Password: passwordHash,
            email: email,
            Password_comf: Password

            //role: "admin"
        }
        //console.log("Hi")
        const q2 = "INSERT INTO admin SET?";
        // const d2 = req.body;
        await conn.query(q2, data, (err, result) => {
            if (err) {
                res.json({ Error: err.sqlMessage })
            }
            else {
                res.json({ status: 200, "respose": result })
            }
        })
        //console.log("first")
        // const token = await tokenCreate(result[0].id);
        // console.log(token);
        //console.log("second")
    } catch (err) {
        res.send(err.message)

    }
};

let loginAdmin = async (req, res) => {
    try {
        const { email, Password } = req.body;
        const q1 = `SELECT * from admin where email = '${email}'`;
        //console.log(q1)
        await conn.query(q1, req.body, async (err, result) => {
            if (err) {
                return res.json({ status: 400, res: err.sqlMessage });
            }

            // console.log("Third")
            // const dbpassword = await result[0].Password;
            // //console.log(Password)
            // const passwordcheck = await bcrypt.compare(Password, dbpassword)

            // if (passwordcheck === false) {
            //     return res.json({ status: 200, response: "wrong password" })
            // }


            const token = await tokenCreate(result[0].id);
            //res.send({token})
            console.log("token:", token);

            res.json({ status: 200, response: result, Password });
        })
    } catch (err) {
        res.json({ status: 200, response: err.message })
    }
}

let updateAdmin = async (req, res) => {
    try {
        const d3 = [req.body, req.params.admin_id]
        const q3 = "UPDATE admin SET ? WHERE admin_id =?";
        await conn.query(q3, d3, (err, result) => {
            if (err)
                throw err;
            res.send(result) 
        })
    } catch (err) {
        res.send(err.message)
    }
};

let deleteAdmin = async (req, res) => {
    try {
        const d4 = [req.params.admin_id]
        const q4 = "DELETE FROM admin WHERE admin_id = ? "
        await conn.query(q4, d4, (err, result) => {
            if (err)
                throw err;
            res.send(result)

        })
    }
    catch (err) {
        res.send(err.message)
    }
};

module.exports = { getAdmin, adminRegister, loginAdmin, updateAdmin, deleteAdmin, getAdminById }
