import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { menuItemPublisher } from "../publisher";



export class MenuItemController {

  async create(req: Request, res: Response) {
    const event = req.body;
    try {

      if (!event) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          message: "Event required for this publishing"
        });
      }
      const created = await menuItemPublisher.publishCreated(event);


      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Menu-Item Publishing to Menu service successful",
        data: created
      });

    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        error: err.message,
        message: "Menu-Item Failed to publishes",
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

      const updated = await menuItemPublisher.publishUpdated(event);


      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Menu item Publishing to Menu service successful",
        data: updated
      });


    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        error: err.message,
        message: "Menu Item Failed to publishes",
      });

    }
  }

  async delete(req: Request, res: Response) {
    try {

      const event = req.body;

      if (!event.itemUuid) {
        return res.status(400).json({ success: false, message: "ItemUuid is required." });
      }
      await menuItemPublisher.publishDeleted(event);
      return res.status(200).json({ success: true, message: "Menu Item deleted event published." })

    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        error: err.message,
        message: "Menu Item Failed to publishes",
      });
    }

  }
}



