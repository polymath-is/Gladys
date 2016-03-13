/**
* Module.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      
      name: {
          type: 'string',
          required: true
      },
      
      slug: {
          type: 'string',
          required: true
      },
      
      url: {
          type: 'string',
          required: true
      },
      
      // if the module if successfully installed
      // 0 = installed with success and running
      // 1 = installed with success, but waiting for restart
      // 2 = installation failed, will retry later
      // 3 = definitely failed, module is buggy
      installed: {
          type: 'integer',
          enum: [0, 1, 2, 3]
      }

  }
};
