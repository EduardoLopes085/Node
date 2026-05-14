const dotenv = require('dotenv');

const { Sequelize } = require('sequelize');

dotenv.config()

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect:process.env.DB_DRIVER,
        dialectOptions: {
            ssl:{
                require: true, //FORÇA O USO DO SSL SEGURANÇA DO DB
                rejectUnauthorized: false //PERMITE CONEXÃO SEM VERIFICAÇÃO DE CERTIFICADO 
            }
        },
        logging: false //OPCIONAL: DESABILITA LOGS SQL
    }
);

module.exports = connection;