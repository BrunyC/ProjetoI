module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      device: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references:{model:'Devices',key:'id'}
      },
      data: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      lat: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      long: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descri: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Event');
  }
};