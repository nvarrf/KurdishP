const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Not Authorized"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {

        if (err) {
            return res.status(403).json({
                message: "Invalid token"
            })
        }

        req.userId = user.userId;

        next();
    });

}

module.exports = verifyToken;