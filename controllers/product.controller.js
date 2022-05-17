const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const createProduct = async (req , res) => {
    try {
        const {name, price, description, category, productImage,isStock,isDiscount,discountPrice,sellerId } = req.body
        // console.log(name, price, description, category, productimage,inStock,isDiscount,discountPrice,category,sellerId);
        await prisma.product.create({
            data: {
                name,
                price,
                description,
                category,
                productImage,
                isStock,
                isDiscount,
                discountPrice,
                sellerId
            }
        });
        res.status(200).json({ msg: "Done" })
    } catch (error) {
        // console.log(error.message);
        res.status(400).json({ msg: "Bad Request" })
        // console.log(error);
    }
}



const callProduct = async (req, res) => {
    try {
        const product = await prisma.product.findMany()
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ msg: 'Bad request' })
    }
}


const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        // console.log(id);
        const product = await prisma.product.findMany({
            where: {
                id: parseInt(id)
            }
        })
        // console.log(product);
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ msg: 'Bad request' })
    }
}


const updateProductById = async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, description, category, productImage,isStock,isDiscount,discountPrice,sellerId } = req.body
        // console.log(name, price, description, category, productimage,inStock,isDiscount,discountPrice,category,sellerId);
        await prisma.product.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                price,
                description,
                category,
                productImage,
                isStock,
                isDiscount,
                discountPrice,
                sellerId
            }
        });
        res.status(200).json({ msg: "Done" })
    } catch (error) {
        // console.log(error.message);
        res.status(400).json({ msg: "Bad Request" })
        // console.log(error);
    }
}


const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params
        // console.log(id);
        await prisma.product.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json({ msg: "Done" })
    } catch (error) {
        res.status(400).json({ msg: "Bad Request" })
    }
}







module .exports = {createProduct,callProduct,getProductById,updateProductById,deleteProductById}

