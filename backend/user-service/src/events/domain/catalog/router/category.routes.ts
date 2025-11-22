import { Router } from "express";
import { CategoryController } from "../controller/category.controller";


const controller = new CategoryController()
export const router = Router();




router.post("/categories", controller.create);
router.put("/categories", controller.update);
router.delete("/categories", controller.delete);
