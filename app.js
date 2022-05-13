const express = require('express')
const {createSeller,callSeller,getSellerById,updateSellerById,deleteSellerById}= require('./controllers/seller.controller')
const {createProduct,callProduct,getProductById,updateProductById,deleteProductById}= require('./controllers/product.controller')


const app = express()
const port =3000
app.use(express.json())

//Seller 

app.post("/seller",createSeller)
app.get("/seller",callSeller)
app.get("/seller/:id",getSellerById)
app.patch("/seller/:id",updateSellerById)
app.delete("/seller/:id",deleteSellerById)

//Product

app.post("/Product",createProduct)
app.get("/Product",callProduct)
app.get("/Product/:id",getProductById)
app.patch("/product/:id",updateProductById)
app.delete("/Product/:id",deleteProductById)



app.listen(port,()=>{
    console.log("send");
})


