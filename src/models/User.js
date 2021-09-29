const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 6,
            },
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: "https://res.cloudinary.com/dsvc4kfvh/image/upload/v1616465442/nextjs_media/enuyffce830snq6ykbqo.png",
        },
        cover: {
            type: DataTypes.STRING,
            defaultValue: "https://res.cloudinary.com/dsvc4kfvh/image/upload/v1625102096/Rectangle_2_mbyujf_kol5jw.png"
        },
        channelDescription: {
            type: DataTypes.STRING,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    });
};