module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    CPF: DataTypes.STRING,
    modelcar: DataTypes.STRING,
    corcar: DataTypes.STRING,
    placa: DataTypes.STRING
  },
  {
    timestamps: false
  }
  );

  return User;
}