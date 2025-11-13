import { Router } from "express";
import { categoryController } from "./category.controller";




export const categoryRouter = Router();


categoryRouter.post('/categories', categoryController.create);
categoryRouter.put('/categories/:id', categoryController.update);

