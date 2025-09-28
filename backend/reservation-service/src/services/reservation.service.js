import Reservation from "../model/reservation.model.js"


export async function createReservation(payload,userId)  {
    return Reservation.create({
        ...payload,
        customerId: userId
    });
}



export async function listReservation(filter = {}) {
    return Reservation.findAll({where: filter});

}
export async function reservationById(id) {
    return Reservation.findByPk(id);
}


export async function cancelReservation(id) {
    const reservation = await Reservation.findByPk(id)
    if (!reservation) {
        return null
    }
    return reservation.update({status: "CANCELLED"})
}

export async function updateReservation(id) {
    const reservation = await Reservation.findByPk(id) 
    if (!reservation) {
        return null
    }
    return reservation.update({status: "CONFIRMED"})
} 
