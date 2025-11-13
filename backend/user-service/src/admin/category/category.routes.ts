import { Router } from "express";
import { categoryController } from "./category.controller";




export const categoryRouter = Router();

//TODO: Middlewaring the protected endpoints
categoryRouter.post('/categories', categoryController.create);
categoryRouter.put('/categories/:id', categoryController.update);
categoryRouter.delete('/categories/:id', categoryController.delete);
