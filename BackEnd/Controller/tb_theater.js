const conn = require("../Models/Connections")

let getTheater = async (req,res) =>{
    try{
        const q1 ="SELECT * FROM theater";
        await conn.query(q1,(err,result)=>
        {
            if(err){
                res.send(err.sqlMessage)
            }
            else{
                res.send(result)
            }
        })
    }
    catch(err){
        res.send(err.message)
    }
};

let postTheater = async(req,res) =>{
    try {
        const q2 = "INSERT INTO theater SET?"
        const d2 = req.body;
        await conn.query(q2,d2,(err,result)=>{
            if (err){
                res.send(err.sqlMessage)
            }
            else{
                res.send(result)
            }
        
        }
        )
    } catch (err) {
        res.send(err.sqlMessage)
        
    }
};

let updateTheater = async (req,res) => {
    try {
        const d3 = [req.body,req.params.theater_id]
        const q3 = 'UPDATE Theater SET? WHERE Theater_id =?';
        await conn.query(q3,d3,(err,result)=>{
            if(err) {
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

let deleteTheater = async (req, res) => {
    try {
        const d4 = req.params.theater_id;
        const q4 = "DELETE FROM theater WHERE theater_id =?";
        await conn.query(q4, d4,(err, result) => {
            if (err) {
                res.send(err.sqlMessage)
            }
            else {
                res.send(result);
            }

        })
    }
    catch (err) {
        res.send(err.sqlMessage)
    }
};
module.exports = {getTheater, postTheater, updateTheater,deleteTheater}
 