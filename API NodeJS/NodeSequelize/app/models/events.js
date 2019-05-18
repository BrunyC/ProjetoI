module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    device: DataTypes.INTEGER,
    data: DataTypes.DATE,
    lat: DataTypes.INTEGER,
    long: DataTypes.INTEGER,
    descri:DataTypes.STRING
  },
  {
    timestamps: false
  }
  );

  return Event;
}