import jwt, { JsonWebTokenError } from "jsonwebtoken";
import crypto from "crypto";

interface User {
  id: number
  username: string
  email: string
  refreshToken: string

}

function generateAccessToken(user: User) {

  return jwt.sign({
    userId: user.id
  }, process.env.JWT_ACCESS_SECRET as string, {
    expiresIn: "5m"
  });
}

function generateRefreshToken() {
  const token = crypto.randomBytes(16).toString('base64url')
  return token;
}

function generateToken(user: User) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken();

  return { accessToken, refreshToken };

}


function hashedToken(token: string) {
  return crypto.createHash('sha512').update(token).digest('hex');
}

export default {
  generateRefreshToken,
  generateAccessToken,
  generateToken,
  hashedToken
};
