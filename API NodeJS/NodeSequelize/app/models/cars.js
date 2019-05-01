module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    placa: DataTypes.STRING,
    cor: DataTypes.STRING,
    modelo: DataTypes.STRING,
  });

  return Cars;
}