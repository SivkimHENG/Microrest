import { assert } from "console";
import prisma from "../utils/db";
import jwt from "jsonwebtoken";
export async function registration(req, res) {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                password: req.body.password,
            }
        });
        return res.status(201).json({
            message: "user successful created",
            user: { email: user.email, id: user.id }
        });
    }
    catch (err) {
        console.log(err);
    }
}
export async function login(req, res) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            console.log("User doesn't exist in database");
            assert(user == undefined);
            console.assert(`something went wrong ${user.message} ${user.error}`);
            return res.status(400).json({ message: "incorrect Email" });
        }
        if (user.password !== req.body.password) {
            console.log("User password doesn't exist in database");
            assert(user.password == undefined);
            console.assert(`something went wrong ${user.password.message} ${user.password.error}`);
            return res.status(400).json({ message: "incorrect password" });
        }
        const accessToken = jwt.sign({
            id: user.id
        }, process.env.JWT_ACCESS_SECRET, {
            expiresIn: "2h"
        });
        res.cookie("accessToken", accessToken, { httpOnly: true });
        res.redirect("/profile");
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Login failed");
    }
}
export async function profile(req, res, next) {
    try {
        const existingUser = await prisma.user.findFirst({
            select: {
                id: req.body.id,
                email: req.body.email,
                username: req.body.username,
            }
        });
        if (!existingUser) {
            res.status(401).json({ message: "User do not exist" });
        }
        return res.status(200).json({
            id: existingUser.id,
            email: existingUser.email,
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}
