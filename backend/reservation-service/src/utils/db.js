import { Sequelize } from "sequelize";
import dotenv from "dotenv";


dotenv.config();

const sequelize = new Sequelize(process.env.DATABASEURL, {
    dialect: "postgres",
    logging: false,
    pool: {
        max: 10,
        acquire: 30000,
        idle: 10000,
    }
    
});

export default sequelize;