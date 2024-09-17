"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.createTable('usuarios', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            whatsapp: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            senha: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            cpf: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            sexo: {
                type: sequelize_1.DataTypes.ENUM('M', 'F', 'Outro'),
                allowNull: false,
            },
            municipio: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            rua: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            numero: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            foto: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_1.DataTypes.NOW,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_1.DataTypes.NOW,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('usuarios');
    },
};
