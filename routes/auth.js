const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc Get login user
// access Private

router.get("/", (req,res) => {
    res.send("Get Login User");
})

// @method POST api/auth
// @desc Login User
// @access Private

router.post("/", (req,res) => {
    res.send("Login User");
})

module.exports = router;