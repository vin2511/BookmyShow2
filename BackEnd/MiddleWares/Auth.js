const jwt = require('jsonwebtoken')
const SECURED_KEY ="what is the Screte Key";

let tokenCreate = async (id)=>{
   const token = await jwt.sign({id:id}, SECURED_KEY,{expiresIn:'5h'});
   return token;
}

module.exports ={tokenCreate}