const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const createSeller = async (req,res)=>{
    try {
        const {name,email,gstNumber,phoneNumber} = req.body
        console.log(name,email,gstNumber,phoneNumber);
        await prisma.seller.create({
            data:{
                name,email,gstNumber,phoneNumber
            }
        });
        res.status(200).json({msg:"Done"})
    } catch (error) {
        // console.log(error.message);
        res.status(400).json({msg:"Bad Request"})
    }
}


const callSeller = async(req,res)=>{
    try {
        const seller = await prisma.seller.findMany()
        res.status(200).json(seller)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}



const getSellerById = async(req,res)=>{
    try {
        const {id} = req.params
        // console.log(id);
        const seller = await prisma.seller.findUnique({
            where:{
                id:parseInt(id)
            }
        })
        // console.log(seller);
        res.status(200).json(seller)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}


const updateSellerById = async(req,res) =>{
    try {
        const {id} = req.params
        console.log(id);
        const updatedData = {
            name: await req.body.name,
            email: await req.body.email,
            gstNumber:await req.body.gstNumber,
            phoneNumber:await req.body.phoneNumber
        }
        console.log(updatedData);
        const seller = await prisma.seller.update({
            where:{
                id:parseInt(id)
            },
            data:updatedData
        })
        
        res.status(200).json({msg:'data updated successfully'})
    } catch (error) {
        res.status(400).json({ms:"Bad request"})
    }
}


const deleteSellerById = async(req,res)=>{
    try {
        const {id} = req.params
        // console.log(id);
        const seller = await prisma.seller.delete({
            where:{
                id:parseInt(id)
            }
        })
        res.status(200).json({msg:'data deleted successfully'})
    } catch (error) {
        res.status(400).json({ms:"Bad request"})
    }
}


module.exports={createSeller,callSeller,getSellerById,updateSellerById,deleteSellerById};