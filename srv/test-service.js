// Imports
// const cds = require("@sap/cds");

/**
 *
 * The service implementation with all service handlers
 */


module.exports = cds.service.impl(async function () {

    this.on('ping', async (req) => {
      
        return {response: 'Endpoint is triggered'};
  
      });    

});