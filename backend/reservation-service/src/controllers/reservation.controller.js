import { StatusCodes } from "http-status-codes";
import {
  createReservation as createReservationService,
  listReservation as listReservationService,
  reservationById as reservationByIdService,
  cancelReservation as cancelReservationService,
  updateReservation as updateReservationService,
  reservationPartySize as reservationPartySizeService,
  reservationAmount as reservationAmountService

} from "../model/reservation.model.js";

/**
 @param {Request}  req
 @param {Response}  res
**/
export async function createReservation(req, res) {
  try {
    const { customerId, ...data } = req.body
    const reservation = await createReservationService(customerId, data);
    if (!reservation)
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "cannot create reservation"
      });


    return res.status(StatusCodes.OK).json({
      message: "reservation successfully created",
      data: reservation
    });
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "reservation failed to created",
      error: err.message

    });
  }

}

/**
 @param {Request}  req
 @param {Response}  res
**/

export async function listReservation(req, res) {
  try {
    const { attributes } = req.query;
    const reservation = await listReservationService(
      attributes ? attributes.split(",") : null
    );

    return res.status(StatusCodes.OK).json({
      message: "Reservation retrieved successfully",
      data: reservation
    });


  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to list reservation",
      error: err.message

    });
  }


}

/**
 @param {Request} req
 @param {Response} res
**/

export async function reservationById(req, res) {
  try {
    const { id } = req.params;

    const reservation = await reservationByIdService(id);
    if (!reservation)
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Reservation not found"
      });


    return res.status(StatusCodes.OK).json({
      message: "Reservation id successfully retrieved",
      data: reservation
    });
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to retrieved id",
    });

  }

}

/**
 @param {Request}  req
 @param {Response}  res
**/

export async function cancelReservation(req, res) {
  try {

    const { id } = req.params;
    const reason = req.body;



    const reservation = await cancelReservationService(id, reason);

    if (!reservation)
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Reservation  not found",
      });

    return res.status(StatusCodes.OK).json({
      message: "Reservation successfully cancelled",
      data: reservation
    });


  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to cancelling reservation ",
      error: err.message
    });
  }
}


/**
 @param {Request}  req
 @param {Response}  res
 @returns
**/


export async function updateReservation(req, res) {

  try {
    const data = req.body;
    const { id } = req.params;

    const updated = await updateReservationService(id, data);


    if (!updated[0])
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Reservation not found"
      });

    return res.status(StatusCodes.OK).json({
      message: "Reservation successfully updated ",
      data: updated
    });

  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to update reservation",
      error: err.message
    });

  }
}

/**
 @param {Request}  req
 @param {Response}  res
**/

export async function reservationPartySize(req, res) {
  try {
    const { tableId, reservationId } = req.params;


    const result = await reservationPartySizeService(tableId, reservationId);

    if (!result)
      return result.status(StatusCodes.NOT_FOUND).json({
        message: "Reservation not found"
      });

    return res.status(StatusCodes.OK).json({
      message: "Party Size validation complete",
      data: result
    });


  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to check reservation party size"
    });

  }



}


/**
 @param {Request}  req
 @param {Response}  res
**/
export async function reservationAmount(req, res) {

  try {
    const { id } = req.params;
    const reservation = await reservationAmountService(id);

    if (!reservation)
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "reservation not found"
      });

    return res.status(StatusCodes.OK).json({
      message: "Reservation amount successfully retrieved ",
      data: reservation
    });


  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to retrieved reservation amount ",
      error: err.message
    });
  }

}
