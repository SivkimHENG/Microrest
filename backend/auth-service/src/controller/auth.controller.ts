import { Response } from "express"
import { StatusCodes } from "http-status-codes";
import { userRegister, authenticated, logout, refreshNewToken } from "../service/auth.service";
import { Request } from "express"
import { success } from "zod";
import { ref } from "process";



export async function register(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Email and password are required' });
    }

    const meta = {
      ipAddress: req.ip || "0.0.0.0",
      deviceInfo: req.get('User-Agent') || 'unknown',
    }

    const result = await userRegister(email, password, meta);

    return res.status(StatusCodes.OK).json({
      message: "User registered successfully",
      data: result
    });

  } catch (err: any) {
    return res.status(StatusCodes.BAD_GATEWAY).json({
      success: false,
      message: err.message || 'Registration failed'
    });
  }
}

export async function login(req: Request, res: Response) {
  try {

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Email or Password required"
      });
    }
    const meta = {
      ipAddress: req.ip || "0.0.0.0",
      deviceInfo: req.get('User-Agent') || 'unknown',
    }


    const result = await authenticated(email, password, meta);
    return res.status(StatusCodes.OK).json({
      message: "login successfully",
      data: result
    });

  } catch (err: any) {

    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: err.message || 'Authenticated failed'
    });

  }
}


export async function loggedout(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body
    if (!refreshToken)
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Missing refresh token",
        success: false
      });



    const userId = req.user?.userId;
    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Unauthorized",
        success: false
      });
    }
    const meta = {
      ipAddress: req.ip || "0.0.0.0",
      deviceInfo: req.get('User-Agent') || 'unknown',
    };

    const result = await logout(refreshToken, userId, meta);


    return res.status(StatusCodes.OK).json({
      message: "Logout successfully",
      success: true,
      data: result
    })


  } catch (err: any) {
    console.error("Logout controller error:", err);
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Logout failed",
      success: false,
      error: err.message,
    });
  }

}


export async function refreshToken(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken)
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Missing refresh token",
        success: false
      })

    const meta = {
      ipAddress: req.ip || "0.0.0.0",
      deviceInfo: req.get('User-Agent') || 'unknown',
    }

    const result = await refreshNewToken(refreshToken, meta);


    return res.status(StatusCodes.OK).json({
      message: "Token refreshed successfully",
      success: true,
      data: result
    })


  } catch (err: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: err.message,
      message: "Token refresh failed",
      success: false
    });
  }

}
