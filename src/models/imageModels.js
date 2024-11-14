const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');
const productModel = require('./productsModel');


let imageModel = connection.define('images',{
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model : productModel,
            key: 'id'
        }
    },
    enabled:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
    },
    path:{
        type: DataTypes.STRING(150),
        allowNull: false,
    }
})

module.exports = imageModel;



















