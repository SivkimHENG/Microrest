import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { menuService } from "./menu.service";


export class MenuController {


  async searchMenuItem(req: Request, res: Response) {
    try {
      const { q } = req.query;

      if (!q || typeof (q) !== 'string') {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Required search term"
        });
      }

      const items = await menuService.searchMenuItems(q);

      if (!items || items.length === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Menu items not found",
        });
      }
      return res.status(StatusCodes.OK).json({
        success: true,
        data: items
      });


    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Failed to fetch data"
      });
    }
  }

  async searchCategory(req: Request, res: Response) {
    try {
      const { q } = req.query;
      if (!q || typeof (q) !== 'string') {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Required search term"
        });
      }

      const category = await menuService.searchCategory(q);

      if (!category || category.length === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Category not found",
          success: false
        });

      }


      return res.status(StatusCodes.OK).json({
        success: true,
        data: category,
        count: category.length
      });

    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Failed to fetch data"
      });
    }
  }

  async searchMenuItemsByCategoryName(req: Request, res: Response) {
    try {
      const { category_name, q } = req.query;

      if (!category_name || typeof (category_name) !== 'string') {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Required search term"
        });
      }
      if (!q || typeof (q) !== 'string') {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Required search term"
        });
      }

      const items = await menuService.searchMenuItemsByCategoryName(category_name, q);

      if (!items || items.length === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Menu items not found",
        });
      }
      return res.status(200).json({
        success: true,
        data: items,
        count: items.length
      });

    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Failed to fetch data"
      });
    }

  }


  async listMenuItems(req: Request, res: Response) {
    try {

      const { isAvailable, categoryId, limit, offset } = req.query;

      const options: any = {};

      if (isAvailable !== undefined) {
        options.isAvailable = isAvailable === "true";
      }

      if (categoryId !== undefined) {
        const parsedId = parseInt(categoryId as string, 10);
        if (!isNaN(parsedId)) {
          options.categoryId = parsedId;
        }
      }

      if (limit !== undefined) {
        options.limit = parseInt(limit as string, 10);
      }

      if (offset !== undefined) {
        options.offset = parseInt(offset as string, 10);
      }

      const items = await menuService.listMenuItems(options);

      return res.status(StatusCodes.OK).json({
        success: true,
        data: items,
        count: items?.length ?? 0
      });


    } catch (err: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Failed to fetch menu items"
      });
    }
  }


  async listCategories(req: Request, res: Response) {
    try {
      const categories = await menuService.listCategories();

      return res.status(StatusCodes.OK).json({
        success: true,
        data: categories,
        count: categories?.length ?? 0
      });

    }
    catch (err: any) {
      console.error(`Controller error listCategories: ${err.message}`);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Failed to fetch categories"
      });
    }


  }
}
export const menuController = new MenuController();
