const router = require('express').Router();
const User = require("../models/user");
const verifyToken = require("../middeleware/verify-token");

const jsonwebtoken = require("jsonwebtoken");

router.post("/authentication/singup", async (req, res) => {
    if (!rq.body.email || !req.body.password) {
        res.json({
            success: false,
            message: "check email and password"
        });
    } else {
        try {
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.phone = req.body.phone;
            newUser.address = req.body.address;

            await newUser.save(); // kaydettik

            let token = jsonwebtoken.sign(newUser.toJSON(), proccess.env.SECRET_KEY, {
                expiresIn: 31536000 // 1 yıl geçerli
            }); // token oluşturur
            res.json({
                success: true,
                token: token,
                message: "user is created succesfully ..."
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}); 

//sign In
router.post("/authentication/singin", async (req, res) => {
    try {
        let anyUser = await User.findOne({email: req.body.email});
        if (!anyUser) {
            res.status(403).json({
                success: false,
                message: "user not found ..."
            });
        } else {
            if (anyUser.comparePassword(req.body.password)) {
                let token = jsonwebtoken.sign(anyUser.toJSON(), proccess.env.SECRET_KEY, {
                    expiresIn: 31536000 // 1 yıl geçerli
                }); // token oluşturur
                res.json({
                    success: true,
                    token: token,
                    message: "user is signin succesfully ..."
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;