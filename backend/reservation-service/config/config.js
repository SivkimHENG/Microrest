import "dotenv/config";


export default  {
    development: {
        url: process.env.DATABASEURL,
        dialect: "postgres",
        logging: console.log
    }
}