import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";





const Reservation = sequelize.define("reservations", {

    id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
        },
    customerId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: "customers",
            key: "id"
         },
         validate: {
            isInt: {msg: "Customer ID must be an integer"}
         }
    },
    tableId: {
         type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "tables",
            key: "id"
          },
          validate: {
            isInt: {msg: "Table ID must be an integer"}
          }
        },

    reservationTime: {
        type: DataTypes.DATE, 
        allowNull: false,
        validate: {
            notNull: {msg: "Reservation time is required"},
            isDate: {msg: "Reservation time must be a valid date"}
        }
    },
    status:  { 
        type: DataTypes.ENUM("PENDING", "CONFIRMED", "CANCELLED","NO_SHOW","SEATED","COMPLETED"),
        defaultValue: "PENDING",
        allowNull: false,
        validate: {
            isIn: {
                args: [["PENDING", "CONFIRMED", "CANCELLED","NO_SHOW","SEATED","COMPLETED"]],
                msg: "Invalid Status"
            }

        }
    },
    partySize: { 
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            notNull: {msg: "Party Size is required"},
            isInt: {msg: "Party Size must be an integer"},
            min: {args: [1], msg: "Party Size must be at least 1"},
            max: {args: [10], msg: "Party Size cannot exceed 10"}
        }
    },
    actualArrivalTime:{
        type: DataTypes.DATE,
        allowNull: true
    },
    actualDepartureTime:{
        type: DataTypes.DATE,
        allowNull: true
    },
    cancelledReason: {
         type: DataTypes.TEXT,
         allowNull: true
     },
     totalAmount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
        validate: {
            min: { args: [0], msg: "Amount cannot be negative" }
        }
     }
},{

    tableName: "reservations",
    timestamps: true,
    paranoid: true,
    indexes: [
        {fields: ["customerId"]},
        {fields: ["tableId"]},
        {fields: ["reservationTime"]},
        {fields: ["status"]},
        {fields: ["reservationTime","status"]},
        {fields: ["customerId","status"]},
    ],

    hooks: {
        beforeCreate: (reservation) => {
            if(reservation.changed("reservationTime")) {
                if(new Date(reservation.reservationTime) <= new Date()) {
                    throw new Error("Reservation Time must be in the future");

                }

            }

        },

        beforeUpdate: (reservation) => {
            if(reservation.changed("reservationTime")) {
                if(new Date(reservation.reservationTime) <= new Date()) {
                    throw new Error("Cannot reschedule to a past time");
                }
            }
            if(reservation.changed("status") && reservation.status === "SEATED") {
                reservation.actualArrivalTime = new Date();
            }

            if(reservation.changed("status") && reservation.status === "COMPLETED") {
                reservation.actualDepartureTime = new Date();
            }

        }
    }
});


Reservation.prototype.isExpired = function () {
    const bufferTime = 15 * 60 * 1000;
    return new Date(this.reservationTime).getTime() + bufferTime < new Date().getTime();
}

Reservation.prototype.canBeCancelled = function() {
    return ["PENDING", "CONFIRMED"].includes(this.status) && !this.isExpired();
}

Reservation.prototype.canBeConfirmed = function() {
    return  this.status == "PENDING" &&  !this.isExpired();
} 

Reservation.prototype.getDuration = function () {

    if(!actualArrivalTime || !actualDepartureTime) return null;
    return Math.round((new Date(this.actualDepartureTime) - new Date(this.actualArrivalTime)) / (1000 * 60));

}


export default Reservation;
