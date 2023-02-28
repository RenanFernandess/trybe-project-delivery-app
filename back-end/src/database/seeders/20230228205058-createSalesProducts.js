'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_products',
      [
        {
          sale_id: 1,
          product_id: 2,
          quantity: 2,
        },
        {
          sale_id: 1,
          product_id: 10,
          quantity: 10,
        },
        {
          sale_id: 1,
          product_id: 9,
          quantity: 9,
        },
        {
          sale_id: 2,
          product_id: 7,
          quantity: 7,
        },
        {
          sale_id: 2,
          product_id: 5,
          quantity: 5,
        },
        {
          sale_id: 2,
          product_id: 9,
          quantity: 9,
        }
      ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});
  }
};