
const  express =  require ('express')
const OwnerRouter = express.Router();

const { getOwner, ownerRegister, updateOwner, deleteOwner, getOwnerById,loginOwner} = require("../Controller/tb_owners")

OwnerRouter.get('/viewOwner',getOwner)
OwnerRouter.post('/addOwner',ownerRegister)
OwnerRouter.put('/updateOwner/:id',updateOwner)
OwnerRouter.delete('/deleteOwner/:id',deleteOwner)
OwnerRouter.get('/viewOwnerById/:id',getOwnerById)
OwnerRouter.post('/loginOwner',loginOwner)

module.exports = {OwnerRouter};