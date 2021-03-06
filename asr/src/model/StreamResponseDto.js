/**
 * ASR documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 999999
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
    root.AsrDocumentation.StreamResponseDto = factory(root.AsrDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StreamResponseDto model module.
   * @module model/StreamResponseDto
   * @version 999999
   */

  /**
   * Constructs a new <code>StreamResponseDto</code>.
   * @alias module:model/StreamResponseDto
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>StreamResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamResponseDto} obj Optional instance to populate.
   * @return {module:model/StreamResponseDto} The populated <code>StreamResponseDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


