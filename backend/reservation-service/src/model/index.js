import  Customer  from "./customer.model.js"
import  Table  from "./table.model.js"
import  Reservation from "./reservation.model.js"



Customer.hasMany(Reservation, {foreignKey: "customerId", as: "reservations", onDelete: "CASCADE"});
Reservation.belongsTo(Customer, {foreignKey: "customerId", as: "customers"});

Table.hasMany(Reservation, {foreignKey: "tableId", as: "reservations", onDelete: "CASCADE"});
Reservation.belongsTo(Table, {foreignKey: "tableId", as: "tables"});


export { Customer, Table, Reservation};


