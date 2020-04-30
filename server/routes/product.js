const router = require('express').Router()
const product = require('../models/product')

// POST request - create a new product
router.post('/products', async (req, res) => {
    try {
        let product = new product()
        product.title = req.body.title
        product.description = req.body.description
        product.photo = req.body.photo
        product.stockQuantity = req.body.stockQuantity

        await product.save()

        res.json({
            status: true,
            message: 'Product is Successfully saved..'
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

// GET request - get all products

// GET request - get a single product

// PUT request - Update a single product

// DELETE request - delete a single product