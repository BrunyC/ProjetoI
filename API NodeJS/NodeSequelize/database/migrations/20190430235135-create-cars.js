module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      placa: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cor: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      modelo: {
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
    return queryInterface.dropTable('Cars');
  }
};