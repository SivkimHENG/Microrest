'use strict';

/** @type {import('sequelize-cli').Migration} */
  export async function up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("reservations", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "customers",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      tableId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "tables",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      reservationTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM("PENDING", "CONFIRMED", "CANCELLED","NO_SHOW","SEATED","COMPLETED"),
        defaultValue: "PENDING",
        allowNull: false,
      },
      partySize: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      actualArrivalTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      actualDepartureTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cancelledReason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      totalAmount: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
     deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
    }


    });

    await queryInterface.addIndex("reservations", ["customerId"], {
      name: "reservations_customer_id_index",
    });

    await queryInterface.addIndex("reservations", ["tableId"], {
      name: "reservations_table_id_index",
    });

    await queryInterface.addIndex("reservations", ["reservationTime"], {
      name: "reservations_reservation_time_index",
    });

    await queryInterface.addIndex("reservations", ["status"], {
      name: "reservations_status_index",
    });

    await queryInterface.addIndex(
      "reservations",
      ["reservationTime", "status"],
      {
        name: "reservations_time_status_index",
      }
    );

    await queryInterface.addIndex("reservations", ["customerId", "status"], {
      name: "reservations_customer_status_index",
    });


  }

  export async function down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("reservations");


  }
