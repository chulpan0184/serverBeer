const sequelize = require('../db')
const {DataTypes} = require('sequelize')//для описания полей (тип данных: string, int и тд)


const Bars = sequelize.define('bars', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    pictures: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 1},
    address: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
})

module.exports = {
    Bars
}







