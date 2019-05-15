module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    device: DataTypes.INT,
    data: DataTypes.DATE,
    lat: DataTypes.INT,
    long: DataTypes.INT,
    descri:DataTypes.STRING
  });

  return Event;
}