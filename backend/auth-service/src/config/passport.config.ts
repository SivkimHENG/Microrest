import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { prisma } from "../database";
import bcrypt from "bcrypt";


const jwtOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "",
  issuer: "auth-service",
  audience: "client",
  algorithms: ["HS256"] as const,
  ignoreExpiration: false,
}



passport.use(new JwtStrategy(
  jwtOptions, async (payload, done) => {
    try {
      const user = await prisma.userCredential.findUnique({
        where: { id: payload.userId },
        include: { roles: true }
      });
      if (!user)
        return done(null, false);

      return done(null, {
        userId: user.id,
        userUuid: user.userUuid,
        roles: user.roles.map(r => r.role)
      });


    } catch (err: any) {
      console.error("Failed to JWT verfication ", err);
      return done(err, false);
    }

  }

));



passport.use(new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  }, async (email: string, password: string, done) => {

    try {

      const user = await prisma.userCredential.findUnique({
        where: { email: email },
        include: { roles: true }
      });


      if (!user)
        return done(null, false, { message: "Invalid Email or Password" });


      const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

      if (!isPasswordValid)
        return done(null, false, { message: "Invalid Email or Password" });


      return done(null, {
        userId: user.id,
        userUuid: user.userUuid,
        roles: user.roles.map(r => r.role)
      });



    } catch (err: any) {
      console.error("Passport failed:", err);
      return done(err);
    }

  }
))

passport.serializeUser((user, done) => {
  done(null, user.userUuid);
});


passport.deserializeUser(async (userUuid: string, done) => {
  try {
    const user = await prisma.userCredential.findUnique({
      where: {
        userUuid,
      },
      include: { roles: true }
    });

    if (!user)
      return done(null, false);



    done(null, {
      userId: user?.id!,
      userUuid: user?.userUuid!,
      roles: user?.roles.map(r => r.role)

    });

  } catch (err: any) {
    console.error("Failed to deserialize", err);
    done(err);
  }


})

export default passport;

