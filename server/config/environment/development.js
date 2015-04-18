'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/gamemanager-dev'
  },

  seedDB: true,

  gs_server: {
  	url: '172.17.200.7:9001'
  }
};
