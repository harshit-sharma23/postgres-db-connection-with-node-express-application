require('dotenv').config();
const { PORT, DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;
const envConfig = {
    serverPort: PORT,
    db: {
        user: DB_USER,
        host: DB_HOST,
        name: DB_NAME,
        password: DB_PASSWORD,
        dbPort: DB_PORT

    }
}
module.exports = envConfig;

