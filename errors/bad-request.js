const CustomApiError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class Badrequest extends CustomApiError {
    constructor(message) {
      super(message);
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = Badrequest;