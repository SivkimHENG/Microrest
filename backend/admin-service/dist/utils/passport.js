import { ExtractJwt, Strategy } from "passport-jwt";
import prisma from "./db";
import { assert } from "console";
const jwtOptions = {
    secretOrKey: "akdjkjkagiauotkhk192843",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};
async function jwtVerify(payload, done) {
    var user = await prisma.user.findFirst({
        select: {
            id: true,
            email: true,
            password: true
        }
    });
    if (user)
        return done(null, true);
    assert(user == undefined);
    console.log("Something went wrong", user.error);
}
const jwtStrategy = new Strategy(jwtOptions, jwtVerify);
export { jwtStrategy };
