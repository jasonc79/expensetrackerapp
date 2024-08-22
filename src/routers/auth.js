import hash from "bcryptjs";
import express from "express";
import User from "../models/user.js";
var router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { email, password} = req.body;
        // If user already exists
        const user = await User.findOne({email: email});
        if (user) {
            return res.status(500).json({
                message: "User already exists! Try logging in.",
                type: "warning",
            });
        }
        // If user doesn't exist , create a new user
        // Hash the password
        const passwordHash = await hash(password, 10)
        const newUser = new User({
            email: email,
            password: passwordHash,
        });
        await newUser.save();
        res.status(200).json({
            message: "User created successfully!",
            type: "success",
        });
    } catch (error){
        res.status(500).json({
            type: "error",
            message: "Error creating user!",
            error,
        });
    }
});
export default router;