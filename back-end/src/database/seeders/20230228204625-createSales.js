'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', 
    [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 100.00,
        delivery_address: 'rua xxx',
        delivery_number: '150',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 50.00,
        delivery_address: 'rua AAA',
        delivery_number: '15012',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
