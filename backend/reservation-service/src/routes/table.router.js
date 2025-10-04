import express from "express";

import {
  createTable,
  getTableCapacity,
  getAvailableTable,
  getTableById,
  listTable,
  updateTable,
  deleteTable
} from "../controllers/table.controller.js";

export const tableRouter = express.Router();

tableRouter.get("/", listTable);
tableRouter.get("/:id", getTableById);

tableRouter.get("/:id/availability", getAvailableTable);
tableRouter.get("/:id/capacity", getTableCapacity);

tableRouter.put("/:id", updateTable);

tableRouter.post("/", createTable);

tableRouter.delete("/:id", deleteTable);
