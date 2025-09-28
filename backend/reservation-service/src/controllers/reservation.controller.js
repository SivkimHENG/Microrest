import { createReservation, listReservation, reservationById, updateReservation, cancelReservation} from "../services/reservation.service.js"



export class ReservationController {

    /**
     *  @param {Request} req
     *  @param {Response} res
     */
    async createReservation(req,res) {
        try{
            const data = req.body;
            const userId = req.user?.id;

            if(!data.reservationTime || !data.partySize) {
                return res.status(404).json({
                    message: "Reservation time and party size are required",
                });
            }
            const reservation = await createReservation(data,userId);
            
            return res.status(201).json({
                message: "Reservation successfully created",
                data: reservation
            });
        } catch(err) {
            console.log("Cannot create Reservation:",err);
            return res.status(404).json({
                message: "Failed to create Reservation", 
                error: err.message
            })
        }
    }



    /**
     *  @param {Request} req
     *  @param {Response} res
     */
    async getReservationById(req,res) {

        try {
            const { id } = req.params;
            if(!id){
                return  res.status(404).json({
                    message: "Reservation Id required"
                });
            }
            const reservation = await reservationById(id);

            if(!reservation) {
                return res.status(404).json({
                    message: "Reservaton is not found",
                });
            }

            return res.status(201).json({
                message: "Reservation retrieved successfully",
                data: reservation
            });
        } catch(err) {
            console.log(`Cannot get Reservation ${id}`, err)
            return res.status(404).json({
                message: "Failed to get Reservation by id",
                error: err.message
            });

        }
    }

    /**
     *  @param {Request} req
     *  @param {Response} res
     */
    async listReservations(req, res) {
        try {
            const filter = req.query || {}
            const reservations = await listReservation(filter);
            if (!reservations || reservations.length === 0) {
                return res.status(404).json({
                    message: "Reservations not found",
                    data: []
                })

            }
            return res.status(201).json({
                message: "Reservation retrieved sucessfully",
                data: reservations,
                count: reservations.length,
            });

        } catch(err) {
            console.log("List is empty or something went wrong", err)
            
            return res.status(404).json({
                message: "Failed to listing all of reservation of the user",
                error: err.message
            });
        }
    }

    /**
     *  @param {Request} req
     *  @param {Response} res
     */
    async updateReservation(req,res) {
        try{
            const { id } = req.params;
            const updateData = req.body;

            if(!id) {
                return res.status(404).json({
                    message: "Reservation Id required"
                });
            }

            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(404).json({
                    message: "Update Data is Required"
                });
            }
            const reservation = await updateReservation(id,updateData);

            if(!reservation) {
                return res.status(404).json({
                    message: "Resevation not found",
                })
            }

            return res.status(201).json({
                message: "Reservation successfully updated",
                data: reservation,
            });

        }catch(err)  {
            console.log("Cannot Update Rervation")
            return res.status(404).json({
                message: "Failed to update reservation ",
                error: err.message
            });
        }
        
        
    }

    /**
     * @param {Request} req
     * @param {Response} res
     */
    async cancelReservation(req,res) {
        try{
        const { id } = req.params;
        if(!id) {
            return res.status(404).json({
                message: "Reservation required Id"
            })
        }
        const reservation =  await cancelReservation(id) 
        return res.status(201).json({
            message: "Reservation successfully cancelled",
            data: reservation
        });

        } catch(err) {
            console.log("Cannot cancel reservation",err )
            return res.status(404).json({
                message: "Failed to cancel reservation ",
                error: err.message
            });

        }
        
        
    }


}
