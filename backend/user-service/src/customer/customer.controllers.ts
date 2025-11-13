import { Request, Response } from "express";
import { customerService } from "./customer.service";
import { StatusCodes } from "http-status-codes";
import { Meta } from "./utils/interface";


interface AuthRequest extends Request {
  user?: {
    userUuid: string;
    role: string;
  };
}


class CustomerController {


  async searchProfile(req: AuthRequest, res: Response) {
    try {

      const username = req.query.username as string;

      if (!username) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Username required in order to searching..."
        });

      }

      const searched = await customerService.searchProfile(username);

      if (!searched) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          message: "Authenticated for search profile <USERNAME>",
        })

      }

      return res.status(StatusCodes.OK).json({
        message: "Searching successfully...",
        data: searched
      });

    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }


  }


  async getProfile(req: AuthRequest, res: Response) {
    try {

      const userUuid = req.user?.userUuid;
      const payload = req.body || {};

      if (!userUuid) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          message: "User uuid not found or invalid",
          data: userUuid
        })

      }

      const meta: Meta = {
        ipAddress: req.ip || "0.0.0.0",
        userAgent: req.get('User-Agent') || 'unknown',
      }


      const profile = await customerService.getProfile(userUuid, payload, meta);
      return res.status(StatusCodes.OK).json({
        message: "successfully get Profile",
        data: profile
      });


    } catch (err: any) {
      console.error(err);
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "failed to get Profile",
        error: err.message
      });
    }


  }

  async updateProfile(req: AuthRequest, res: Response) {
    try {
      const userUuid = req.user?.userUuid;
      const payload = req.body;



      console.log('Request body:', JSON.stringify(req.body, null, 2));
      console.log('Payload keys:', Object.keys(payload || {}));
      console.log('Content-Type:', req.get('Content-Type'));

      if (!userUuid) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          message: "Authentication required",
        })
      }

      if (!payload || Object.keys(payload).length === 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "No update data provided",
        });
      }


      const meta: Meta = {
        ipAddress: req.ip || "0.0.0.0",
        userAgent: req.get('User-Agent') || 'unknown',
      }

      const updated = await customerService.updateProfile(userUuid, payload, meta);

      return res.status(StatusCodes.OK).json({
        message: "user successfully updated their profile",
        data: updated
      });



    } catch (err: any) {
      console.error(err.message);

      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "failed to update Profile",
        error: err.message
      });
    }


  }


}


export const customerController = new CustomerController();
