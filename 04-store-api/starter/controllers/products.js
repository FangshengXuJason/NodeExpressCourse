const Product = require("../models/product")

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        name: "caressa",
    })
    res.status(200).json(products)
}

const getAllProducts= async (req, res) => {
    res.status(200).json({msg:'product route'})
}

module.exports = {
    getAllProducts, 
    getAllProductsStatic,
}