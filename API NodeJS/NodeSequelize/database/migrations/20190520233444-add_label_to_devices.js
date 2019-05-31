'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('devices', 'label', Sequelize.STRING);
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('devices', 'label');
    
  }
};
