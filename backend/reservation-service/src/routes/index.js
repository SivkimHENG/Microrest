import express from "express"
import { ReservationController } from "../controllers/reservation.controller.js";

export const router = express.Router()


const res = new ReservationController();


router.post("/", res.createReservation);
router.get("/:id", res.getReservationById);
router.get("/", res.listReservations);
router.patch("/:id", res.updateReservation);
router.delete("/:id", res.cancelReservation);






