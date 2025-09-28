'use strict';


/** @type {import('sequelize-cli').Migration} */
  export async function up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable("tables", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      tableNumber: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      }
    });

   await queryInterface.addIndex("tables", ["tableNumber"] ,{
    unique: true,
    name: "tables_table_number_index"
   });

   await queryInterface.addIndex("tables", ["capacity"] ,{
    name: "tables_capacity_index"
   });

   await queryInterface.addIndex("tables", ["isAvailable"], {
    name: "tables_is_available_index"
   })

  }

  export async function down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("tables");


  }