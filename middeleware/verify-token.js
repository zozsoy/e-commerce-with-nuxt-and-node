const jsonwebtoken = require("jsonwebtoken");

module.export = function(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers["authorization"]
    let checkBearer = "Bearer ";

    if (token) {
        if (token.startWith(checkBearer)) {
            token = token.slice(checkBearer.length, token.length);
        }
        jsonwebtoken.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    message: "token verify error ..."
                });
            } else {
                req.decoded = decoded;
            }
        });
    } else {
        res.json({
            success: false,
            message: "there is no token ..."
        });
    }
}