export const test = '';

const PRODUCT1 = 'Skol Lata 250ml';
const PRODUCT2 = 'Becks 330ml';
const SALE_DATE = '2023-03-07T20:46:41.000Z';

export const saleMock = {
  id: 1,
  userId: 1,
  sellerId: 2,
  totalPrice: '150.50',
  deliveryAddress: 'Rua XXX',
  deliveryNumber: '740',
  saleDate: SALE_DATE,
  status: 'Pendente',
  products: [
    {
      productName: PRODUCT1,
      price: '2.20',
      quantity: 5,
    },
    {
      productName: PRODUCT2,
      price: '4.99',
      quantity: 1,
    },
  ],
};

export const awaySaleMock = {
  id: 1,
  userId: 1,
  sellerId: 2,
  totalPrice: '150.50',
  deliveryAddress: 'Rua XXX',
  deliveryNumber: '740',
  saleDate: SALE_DATE,
  status: 'Em Trânsito',
  products: [
    {
      productName: PRODUCT1,
      price: '2.20',
      quantity: 5,
    },
    {
      productName: PRODUCT2,
      price: '4.99',
      quantity: 1,
    },
  ],
};

export const preparingSaleMock = {
  id: 1,
  userId: 1,
  sellerId: 2,
  totalPrice: '150.50',
  deliveryAddress: 'Rua XXX',
  deliveryNumber: '740',
  saleDate: SALE_DATE,
  status: 'Preparando',
  products: [
    {
      productName: PRODUCT1,
      price: '2.20',
      quantity: 5,
    },
    {
      productName: PRODUCT2,
      price: '4.99',
      quantity: 1,
    },
  ],
};
