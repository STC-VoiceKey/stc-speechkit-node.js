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
    root.AsrDocumentation.SessionDto = factory(root.AsrDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SessionDto model module.
   * @module model/SessionDto
   * @version 1.0.dev
   */

  /**
   * Constructs a new <code>SessionDto</code>.
   * @alias module:model/SessionDto
   * @class
   * @param sessionId {String} 
   */
  var exports = function(sessionId) {
    var _this = this;

    _this['session_id'] = sessionId;
  };

  /**
   * Constructs a <code>SessionDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionDto} obj Optional instance to populate.
   * @return {module:model/SessionDto} The populated <code>SessionDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('session_id')) {
        obj['session_id'] = ApiClient.convertToType(data['session_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} session_id
   */
  exports.prototype['session_id'] = undefined;



  return exports;
}));


