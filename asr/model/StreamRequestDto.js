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
    root.AsrDocumentation.StreamRequestDto = factory(root.AsrDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StreamRequestDto model module.
   * @module model/StreamRequestDto
   * @version 1.0.dev
   */

  /**
   * Constructs a new <code>StreamRequestDto</code>.
   * @alias module:model/StreamRequestDto
   * @class
   * @param mime {String} Audio file mime type
   */
  var exports = function(mime) {
    var _this = this;


    _this['mime'] = mime;
  };

  /**
   * Constructs a <code>StreamRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamRequestDto} obj Optional instance to populate.
   * @return {module:model/StreamRequestDto} The populated <code>StreamRequestDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('package_id')) {
        obj['package_id'] = ApiClient.convertToType(data['package_id'], 'String');
      }
      if (data.hasOwnProperty('mime')) {
        obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
      }
    }
    return obj;
  }

  /**
   * Recognize with package
   * @member {String} package_id
   */
  exports.prototype['package_id'] = undefined;
  /**
   * Audio file mime type
   * @member {String} mime
   */
  exports.prototype['mime'] = undefined;

  return exports;
}));


