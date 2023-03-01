const mockFindOneReturn = {
  dataValues: {
    id: 1,
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    password: 'a4c86edecc5aee06eff8fdeda69e0d04',
    role: 'administrator'
  },
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
}

const successfullLoginMock = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  role: 'administrator',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IifSwiaWF0IjoxNjc3Njc5MTM2fQ.iFeqLFQIKbvP0-uKmeHt0jwV_eKD8DEtw6l9ZEnaXq8'
}

const userMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--'
}

const createUserMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm@21!!--',
  name: 'Delivery App Admin',
  role: 'administrator'
}


module.exports = {
  mockFindOneReturn,
  successfullLoginMock,
  userMock,
  createUserMock
};
