const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');


let productModel = connection.define('products',{
    enabled:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    name:{
        type: DataTypes.STRING(150),
        allowNull:false
    },
    slug:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    use_in_menu:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
    },
    stock:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    description:{
        type: DataTypes.STRING(150),
        allowNull: true
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price_with_discount:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
    
})


module.exports = productModel;



































