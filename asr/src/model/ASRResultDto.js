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
    root.AsrDocumentation.ASRResultDto = factory(root.AsrDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ASRResultDto model module.
   * @module model/ASRResultDto
   * @version 999999
   */

  /**
   * Constructs a new <code>ASRResultDto</code>.
   * @alias module:model/ASRResultDto
   * @class
   * @param score {String} Text score
   * @param text {String} Result text
   */
  var exports = function(score, text) {
    var _this = this;

    _this['score'] = score;
    _this['text'] = text;
  };

  /**
   * Constructs a <code>ASRResultDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ASRResultDto} obj Optional instance to populate.
   * @return {module:model/ASRResultDto} The populated <code>ASRResultDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

  /**
   * Text score
   * @member {String} score
   */
  exports.prototype['score'] = undefined;
  /**
   * Result text
   * @member {String} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


