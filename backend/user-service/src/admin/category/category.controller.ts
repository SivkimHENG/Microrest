import { StatusCodes } from "http-status-codes";
import { categoryService } from "./category.service";
import { Request, Response } from "express";


interface AuthRequest extends Request {
  user?: {
    userUuid: string;
    role: string;
  };
}



class CategoryController {

  async create(req: AuthRequest, res: Response) {
    try {
      const data = req.body;

      const created = await categoryService.createCategory(data);


      return res.status(StatusCodes.CREATED).json({
        mesage: "Admin creating category successfully",
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


      const updated = await categoryService.updateCategory(uuid, data);
      return res.status(StatusCodes.OK).json({
        message: "Admin updating category successfully",
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

      await categoryService.deleteCategory(uuid);

      return res.status(StatusCodes.OK).json({
        message: "Admin deleting category successfully",
        data: []
      });


    } catch (err: any) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: err.message
      });
    }


  }


}

export const categoryController = new CategoryController();
