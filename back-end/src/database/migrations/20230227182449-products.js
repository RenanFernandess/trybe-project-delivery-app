'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
