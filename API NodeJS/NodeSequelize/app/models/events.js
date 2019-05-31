module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    
    device: DataTypes.INTEGER,
    data: DataTypes.DATE,
    lat: DataTypes.STRING,
    long: DataTypes.STRING,
    descri:DataTypes.STRING
  },
  {
    timestamps: false
  }
  ); 

  return Event;
}