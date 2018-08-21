/**
 * ASR documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.dev
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AsrDocumentation) {
      root.AsrDocumentation = {};
    }
    root.AsrDocumentation.StatusDto = factory(root.AsrDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StatusDto model module.
   * @module model/StatusDto
   * @version 1.0.dev
   */

  /**
   * Constructs a new <code>StatusDto</code>.
   * @alias module:model/StatusDto
   * @class
   * @param status {String} 
   */
  var exports = function(status) {
    var _this = this;

    _this['status'] = status;
  };

  /**
   * Constructs a <code>StatusDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusDto} obj Optional instance to populate.
   * @return {module:model/StatusDto} The populated <code>StatusDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


