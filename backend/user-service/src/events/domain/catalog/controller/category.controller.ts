import { Request, Response } from "express";
import { categoryPublisher } from "../publisher";
import { StatusCodes } from "http-status-codes";


export class CategoryController {

  async create(req: Request, res: Response) {
    const event = req.body;
    try {

      if (!event) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          message: "Event required for this publishing"
        });
      }
      const created = await categoryPublisher.publishCreated(event);


      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Category Publishing to Menu service successful",
        data: created
      });

    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        error: err.message,
        message: "Category Failed to publishes",
      });
    }
  }


  async update(req: Request, res: Response) {
    try {
      const event = req.body;

      if (!event) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          message: "Event required for this publishing"
        });
      }

      const updated = await categoryPublisher.publishUpdated(event);


      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Category Publishing to Menu service successful",
        data: updated
      });


    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        error: err.message,
        message: "Category Failed to publishes",
      });

    }
  }
  async delete(req: Request, res: Response) {
    try {
      const event = req.body;

      if (!event.categoryUuid) {
        return res.status(400).json({ success: false, message: "categoryUuid is required." });
      }
      await categoryPublisher.publishDeleted(event);
      return res.status(200).json({ success: true, message: "Category deleted event published." })

    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        error: err.message,
        message: "Category Failed to publishes",
      });
    }

  }



}

