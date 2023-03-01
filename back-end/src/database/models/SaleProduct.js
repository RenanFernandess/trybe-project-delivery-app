module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true },
    productId: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  });

  SaleProduct.associate = ({ Product, Sale }) => {
    Product.belongsToMany(Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    Sale.belongsToMany(Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };


  return SaleProduct;
};