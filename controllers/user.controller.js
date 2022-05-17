const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


const createUser = async (req,res) =>{
    try {
        await prisma.user.create({
            data:req.body
        })
        res.status(200).json({msg:"Created successfully"}) 
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:error.message})
    }
}


const callUserData = async (req, res) =>{
    try {
        const userData = await prisma.user.findMany()
        // console.log(userData);
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({msg:"Bad request"})
    }
}



const callUserById = async (req,res) =>{
    try {
        const {id} = req.params
        // console.log(id);
        const userData = await prisma.user.findMany({
            where:{
                id:parseInt(id)
            }
        })
        // console.log(userData);
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({msg:"Bad request"})
    }
}


const updatecallById = async(req,res) =>{
    try {
        const {id} = req.params
        const {username,password} = req.body
        await prisma.user.update({
            where:{
                id:parseInt(id)
            },
            data:{
                username,
                password
            }
        }),
        res.status(200).json({ msg: "updated successfuly " })
    } catch (error) {
        res.status(400).json({ msg: "Bad Request" })
    }
}


const deleteCallById = async (req,res)=>{
    try {
        const {id} = req.params
        await prisma.user.delete({
            where:{
                id:parseInt(id)
            }
        })
        res.status(200).json({msg:"deleted user"})
    } catch (error) {
        res.status(400).josn({msg:"Bad request"})
    }
}



module.exports = {callUserById,createUser,callUserData,updatecallById,deleteCallById}


