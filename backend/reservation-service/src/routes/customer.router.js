import express from "express"

import { 
    createCustomer, 
    getCustomerById, 
    getCustomerPhoneById,
    softDeleteCustomer,
} 
from "../controllers/customer.controller.js"


export const customerRouter = express.Router();



customerRouter.get("/:id", getCustomerById);
customerRouter.get("/phone/:id", getCustomerPhoneById);
customerRouter.post("/",createCustomer);
customerRouter.delete("/:id", softDeleteCustomer);



