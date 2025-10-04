import Reservation from "../model/reservation.model.js"
import Table from "../model/table.model.js";


export async function createReservation(data, customerId) {
  return Reservation.create({ ...data, customerId });
}


/**
 @param {[]} attributes 
**/

export async function listReservation(attributes = null) {
  return Reservation.findAll({
    attributes: attributes?.length ? attributes : undefined
  });

}
export async function reservationById(reservationId) {
  if (!reservationId) return null;
  const reservation = await Reservation.findByPk(id);

  return reservation ? reservation.get({ plain: true }) : null;

}


export async function cancelReservation(reservationId, reason) {
  if (!reservationId) return null;

  return Reservation.update({
    status: "CANCELLED",
    cancelledReason: reason
  }, {
    where: {
      id: reservationId
    }
  });

}

export async function updateReservation(reservationId) {
  if (!reservationId) return null;


  return Reservation.update({
    status: "CONFIRMED"
  },
    { where: { id: reservationId } })
}


/**
 @param {number}  tableId
 @param {number}  reservationId
**/
export async function reservationPartySize(tableId, reservationId) {

  if (!tableId) return null;


  const table = await Table.findByPk(tableId, {
    attributes: ["capacity"]
  });

  const reservation = await Reservation.findByPk(reservationId, {
    attributes: ["partySize"]
  });


  if (!table || !reservationPartySize) return null;

  if (reservation.partySize > table.capacity) {
    return { valid: false, message: "Party size exceeds table capacity " };
  }

  return { valid: true, tableCapacity: table.capacity, partySize: reservation.partySize };
}


/**
 @param {number} reservationId
 @returns
*/

export async function reservationAmount(reservationId) {

  if (!reservationId) return null;

  const reservation = await Reservation.findByPk(reservationId, {
    attributes: ["totalAmount"]
  });


  return reservation ? reservation.totalAmount : null;
}


