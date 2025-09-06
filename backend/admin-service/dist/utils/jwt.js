import jwt from "jsonwebtoken";
import crypto from "crypto";
function generateAccessToken(user) {
    return jwt.sign({
        userId: user.id
    }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "5m"
    });
}
function generateRefreshToken() {
    const token = crypto.randomBytes(16).toString('base64url');
    return token;
}
function generateToken(user) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken();
    return { accessToken, refreshToken };
}
function hashedToken(token) {
    return crypto.createHash('sha512').update(token).digest('hex');
}
export default {
    generateRefreshToken,
    generateAccessToken,
    generateToken,
    hashedToken
};
