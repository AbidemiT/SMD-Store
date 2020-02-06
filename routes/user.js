const express = require("express");
const router = express.Router();

// @route POST api/user
// @desc Add User
// @access Public

router.post("/", (req,res) => {
    res.send("Create new User");
})

module.exports = router;