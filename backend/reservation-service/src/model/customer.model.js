import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

//TODO: DONE (Customer) in (Reservation)
const Customer = sequelize.define("customer", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "First name is required"},
            notEmpty: { msg: "First name cannot be empty"},
            len: { args: [1,50], msg: "First name must be 1-50 characters"}
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Last name is required"},
            notEmpty: { msg: "Last name cannot be empty"},
            len: { args: [1,50], msg: "Last name must be 1-50 characters"}
        }
    },

 email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            notNull: { msg: "Email is required" },
            isEmail: { msg: "Must be a valid email address" },
            len: { args: [5, 100], msg: "Email must be 5-100 characters" }
        }
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        validate: {
            is: {
                args: /^[\+]?[1-9][\d]{0,15}$/,
                msg: "Phone number must be valid"
            }
        }
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
            isDate: { msg: "Date of birth must be a valid date" },
            isBefore: {
                args: new Date().toISOString().split('T')[0],
                msg: "Date of birth must be in the past"
            }
        }
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
}, {
    tableName: 'customers',
    timestamps: true,
    indexes: [
        { unique: true, fields: ['email'] },
        { fields: ['phone'] },
        { fields: ['lastName', 'firstName'] }
    ]
});

Customer.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname}`;
};

Customer.prototype.getAge = function() {
    if (!this.dateOfBirth) return null;
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export default Customer;







