import passport from "passport";
function auth(req, res, next) {
    var response = {
        statusCode: 0,
        errorMsg: "",
        data: {}
    };
    passport.authenticate('jwt', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            const response = {
                statusCode: 401,
                errorMsg: "user not authenticate",
                data: info?.message ?? {},
            };
            return res.status(401).json(response);
        }
        req.user = user;
        next();
    })(req, res, next);
}
export { auth };
