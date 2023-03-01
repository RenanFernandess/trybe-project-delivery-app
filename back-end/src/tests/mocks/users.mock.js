const usersMock = [
  {
    dataValues: {
      "id": 1,
      "name": "Delivery App Admin",
      "email": "adm@deliveryapp.com",
      "password": "a4c86edecc5aee06eff8fdeda69e0d04",
      "role": "administrator"
    }
  },
  {
    dataValues: {
      "id": 2,
      "name": "Fulana Pereira",
      "email": "fulana@deliveryapp.com",
      "password": "3c28d2b0881bf46457a853e0b07531c6",
      "role": "seller"
    }
  },
  {
    dataValues: {
      "id": 3,
      "name": "Cliente Zé Birita",
      "email": "zebirita@email.com",
      "password": "1c37466c159755ce1fa181bd247cb925",
      "role": "customer"
    }
  }
]

const userSeller = {
  "id": 2,
  "name": "Fulana Pereira",
  "email": "fulana@deliveryapp.com",
  "role": "seller"
}

module.exports = { userSeller, usersMock }