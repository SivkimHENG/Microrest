import express from "express";
import { login, registration, profile } from "./auth.controller";
import passport from "passport";
const router = express.Router();
//------ POST -----//
router.post('/register', registration);
router.post('/login', login);
//------ GET ------//
router.get('/register', function (req, res) {
    res.render("register");
});
router.get('/login', function (req, res) {
    res.render("login");
});
router.get("/profile", passport.authenticate("jwt", { session: false }), profile);
export default router;
