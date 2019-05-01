module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Location', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cars_id: {
        type: DataTypes.INTEGER,
        references: { model: 'cars', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      long: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lat: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      placa: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Location');
  }
};
