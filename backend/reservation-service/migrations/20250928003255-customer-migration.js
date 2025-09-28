'use strict';

/** @type {import('sequelize-cli').Migration} */
  export async function up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable("customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
       },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
       }
    });

    await queryInterface.addIndex("customers",["email"], {
      unique: true,
      name: "customers_email_unique",
    });

    await queryInterface.addIndex("customers",["phone"], {
      name: "customer_phone_index"
    });
    
    await queryInterface.addIndex("customers", ["lastname"], ["firstname"], {
      name: "customer_name_index"
    });


  }

  export async function down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("customers")


  }
