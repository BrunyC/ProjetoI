'use strict';
module.exports = (sequelize, DataTypes) => {
  const Devices = sequelize.define('Devices', {
    device: DataTypes.INTEGER,
    lat: DataTypes.INTEGER,
    long: DataTypes.INTEGER
  },);
  return Devices;
};