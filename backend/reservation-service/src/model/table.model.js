import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";


//TODO: Finish Table Model for reservation


const Table = sequelize.define("tables", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  tableNumber: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
    validate: {
      notNull: { msg: "Table number is required" },
      notEmpty: { msg: "Table number cannot be empty" }
    }
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: "Capacity is required" },
      min: { args: [1], msg: "Capacity must be at least 1" },
      max: { args: [10], msg: "Capacity cannot exceed 10" }
    }
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  }
}, {
  tableName: "tables",
  timestamps: true,

  indexes: [
    { unique: true, fields: ["tableNumber"] },
    { fields: ["capacity"] },
    { fields: ["isAvailable"] },
  ]
});



/**
 * 
 * @param {number} partySize 
 * @return {number}
 */
Table.prototype.canAccommodate = function(partySize) {
  return this.isAvailable && this.capacity >= partySize;
}

export default Table;
