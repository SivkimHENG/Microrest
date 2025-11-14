import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { menuItemService } from "./menuItem.service";



export class MenuItemController {


  async create(req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;
      if (!data) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Required field for create menu-item"
        });
      }

      const created = await menuItemService.create(data)
      return res.status(StatusCodes.CREATED).json({
        message: "Admin creating MenuItem successfully",
        data: created
      });
    } catch (err: any) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: err.message
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      const { uuid } = req.params;

      if (!uuid) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Required uuid for update menu"
        });
      }


      const updated = await menuItemService.update(uuid, data);

      return res.status(StatusCodes.OK).json({
        message: "Admin updating Menu Items successfully",
        data: updated
      });


    } catch (err: any) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: err.message
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {

      const { uuid } = req.params;

      if (!uuid) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "required uuid for delete menu"
        });

      }
      await menuItemService.delete(uuid);
      return res.status(StatusCodes.OK).json({
        message: "Admin updating Menu Items successfully",
        data: []
      });

    } catch (err: any) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: err.message
      });
    }

  }


}


export const menuItemController = new MenuItemController();
