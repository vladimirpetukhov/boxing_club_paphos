'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    

     
      return queryInterface.bulkInsert('Users', [{
        firstName: 'John Doe',
        
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
