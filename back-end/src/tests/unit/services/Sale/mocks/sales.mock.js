const findOneSaleMock = {
  dataValues: {
    "id": 1,
    "userId": 3,
    "sellerId": 2,
    "totalPrice": 100,
    "deliveryAddress": "rua xxx",
    "deliveryNumber": "150",
    "saleDate": "2023-03-01T13:53:36.000Z",
    "status": "Pendente",
    "productsSold": [
      {
        "productId": 2,
        "quantity": 2
      },
      {
        "productId": 9,
        "quantity": 9
      },
      {
        "productId": 10,
        "quantity": 10
      }
    ],
    "products": [
      {
        "id": 2,
        "name": "Heineken 600ml",
        "price": 7.5,
        "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
      },
      {
        "id": 9,
        "name": "Becks 600ml",
        "price": 8.89,
        "urlImage": "http://localhost:3001/images/becks_600ml.jpg"
      },
      {
        "id": 10,
        "name": "Skol Beats Senses 269ml",
        "price": 3.57,
        "urlImage": "http://localhost:3001/images/skol_beats_senses_269ml.jpg"
      }
    ]
  }
}

const getByIdMock = {
  "id": 1,
  "userId": 3,
  "sellerId": 2,
  "totalPrice": 100,
  "deliveryAddress": "rua xxx",
  "deliveryNumber": "150",
  "saleDate": "2023-03-01T13:53:36.000Z",
  "status": "Pendente",
  "products": [
    {
      "productName": "Heineken 600ml",
      "price": 7.5,
      "quantity": 2
    },
    {
      "productName": "Becks 600ml",
      "price": 8.89,
      "quantity": 9
    },
    {
      "productName": "Skol Beats Senses 269ml",
      "price": 3.57,
      "quantity": 10
    }
  ]
}

const saleBodyMock = {
  "userId": 1,
  "sellerId": 2,
  "totalPrice": 150.50,
  "deliveryAddress": "Rua 150.50",
  "deliveryNumber": "740",
  "products": [
    {
      "productId": 1,
      "quantity": 5
    },
  ]
}

const createdSaleMock = {
  dataValues: {
    "id": 1,
    "userId": 1,
    "sellerId": 2,
    "totalPrice": 150.50,
    "deliveryAddress": "rua 150.50",
    "deliveryNumber": "740",
    "saleDate": "2023-03-01T13:53:36.000Z",
    "status": "Pendente",
  }
}

const createdSaleProductMock = {
  saleId: 1,
  productId: 1,
  quantity: 5
}

module.exports = {
  getByIdMock,
  findOneSaleMock,
  saleBodyMock,
  createdSaleMock,
  createdSaleProductMock
}