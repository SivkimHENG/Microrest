import { StatusCodes } from "http-status-codes";
import { categoryService } from "./category.service";
import { Request, Response } from "express";


interface AuthRequest extends Request {
  user?: {
    userUuid: string;
    role: string;
  };
}


interface CategoryRequest extends Request {
  category: {
    id: number
  }

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


  async update(req: CategoryRequest, res: Response) {
    try {
      const data = req.body;

      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Invalid category ID",
        });
      }
      console.log(`The Request from http: ${id}`);


      if (!id) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Required id for update"
        });
      }

      const updated = await categoryService.updateCategory(id, data);
      return res.status(StatusCodes.OK).json({
        message: "Admin updating category successfully",
        data: updated
      });

    } catch (err: any) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        error: err.message
      });
    }

  }

}

export const categoryController = new CategoryController();
