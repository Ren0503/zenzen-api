const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => 
    sequelize.define("VideoLike", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
        },
        like: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });