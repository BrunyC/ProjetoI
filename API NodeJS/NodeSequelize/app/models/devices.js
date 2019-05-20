'use strict';
module.exports = (sequelize, DataTypes) => {
  const Devices = sequelize.define('Devices', {
    device: DataTypes.INTEGER,
    label: DataTypes.STRING
  },
  {
    timestamps: false
  }
  );

  return Devices;
};