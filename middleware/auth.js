const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req,res,next) => {
    // Get token from header => x-auth-token
    const token = req.header("x-auth-token");

    if(!token) {
        return res.status(401).json({err: "No token, Authorization Denied"});
    }

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded.user;

        next();
    } catch (err) {
        res.status(401).json({err: "Invalid Token"});
    }
}