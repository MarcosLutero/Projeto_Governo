"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Caminho para o arquivo de configuração do Sequelize
class Usuario extends sequelize_1.Model {
}
Usuario.init({
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
        type: sequelize_1.DataTypes.STRING, // Armazena o caminho ou nome do arquivo
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    tableName: 'usuarios',
    timestamps: true, // Habilita os campos createdAt e updatedAt
});
exports.default = Usuario;
