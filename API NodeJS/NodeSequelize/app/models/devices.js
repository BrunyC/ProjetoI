'use strict';
module.exports = (sequelize, DataTypes) => {
  const Devices = sequelize.define('Devices', {
    device: DataTypes.INTEGER,
  },);
  return Devices;
};