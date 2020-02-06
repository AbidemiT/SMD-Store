const express = require("express");
const router = express.Router();

// @route GET api/products
// @desc Get All Products
// access Private

router.get("/", (req,res) => {
    res.send("Get All products");
})

// @method POST api/products
// @desc Add new product
// @access Public

router.post("/", (req,res) => {
    res.send("Add New Product");
})

// @method PUT api/products/
// @desc Update product
// @access Private

router.put("/api/products/:id", (req,res) => {
    res.send("Update Product");
})

// @method DELETE api/products/
// @desc Delete product
// @access Private

router.delete("/api/products/:id", (req,res) => {
    res.send("Delete Product");
})



module.exports = router;
