'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
      },
      whatsapp: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
      },
      sexo: {
        type: Sequelize.ENUM('M', 'F', 'Outro'),
        allowNull: false,
      },
      municipio: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      foto: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  },
};
