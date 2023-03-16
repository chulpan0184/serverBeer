const sequelize = require('../db')
const {DataTypes} = require('sequelize')//для описания полей (тип данных: string, int и тд)


const Bars = sequelize.define('bars', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    pictureMain: {type: DataTypes.STRING},
    picture_1: {type: DataTypes.STRING},
    picture_2: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 1},
    address: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    latitude_N:{type: DataTypes.DOUBLE, allowNull: false},
    longitude_E:{type: DataTypes.DOUBLE, allowNull: false},
})

module.exports = {
    Bars
}







