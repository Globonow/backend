'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('shows', 'file_id');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createColumn('shows', 'file_id', {
      type: Sequelize.INTEGER,
      refences: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },
};
