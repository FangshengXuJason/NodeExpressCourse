const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        
    })

    res.status(200).json({products, nbHits: products.length})
    // throw new Error('testing async error')
}

const getAllProducts = async (req, res) => {
    res.status(200).json({msg:'product route'})
}

module.exports = {
    getAllProducts, 
    getAllProductsStatic
}