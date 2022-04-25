const multer = require('multer')

const Product = require('../models/products')

const Storage = multer.diskStorage({ // Multer middleware for file upload.
    destination:'images',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage: Storage
}).single('image')

const createProduct = (req,res) =>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const product = new Product({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
            product.save()
            .then(()=>res.send('Product Created'))
            .catch(err=>console.log(err))
        }
    })
}
const updateProduct = async (req,res) =>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            await Product.findByIdAndUpdate(req.body.id,{
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
               
            })
        }
    })

}

const deleteProduct = (req,res) =>{
    Product.findByIdAndDelete(req.body.id,(err,docs)=>{
        if(err){
            res.send("Product not found.")
        }
        else{
            res.send("Product deleted.")
        }
    })

}

module.exports = {createProduct,deleteProduct,updateProduct}