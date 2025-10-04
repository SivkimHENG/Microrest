import express from "express"
import {
  createReservation,
  listReservation,
  reservationById,
  cancelReservation,
  updateReservation,
  reservationPartySize,
  reservationAmount

} from "../controllers/reservation.controller.js";



export const reservationRouter = express.Router()


reservationRouter.post("/", createReservation);
reservationRouter.get("/", listReservation);

reservationRouter.get("/:id", reservationById);
reservationRouter.put("/:id", updateReservation);
reservationRouter.put("/:id/cancel", cancelReservation);
reservationRouter.get("/:tableId/:reservationId/party-size", reservationPartySize);
reservationRouter.get("/:id/amount", reservationAmount);





