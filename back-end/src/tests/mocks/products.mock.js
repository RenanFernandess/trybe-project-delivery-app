const createNewProduct = {
  name: 'Chopp',
  price: 9.00,
  urlImage:'http://localhost:3001/images/chopp.jpg',
}

const productCreated = {
  ...createNewProduct,
  id: 12,
}

module.exports = { createNewProduct, productCreated };