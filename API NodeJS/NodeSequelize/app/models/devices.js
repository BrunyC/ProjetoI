'use strict';
module.exports = (sequelize, DataTypes) => {
  const devices = sequelize.define('devices', {
    device: DataTypes.INTEGER,
    lat: DataTypes.INTEGER,
    long: DataTypes.INTEGER
  }, {});
  devices.associate = function(models) {
    // associations can be defined here
  };
  return devices;
};