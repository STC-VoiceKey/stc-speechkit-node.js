/**
 * TTS documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.1.73
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
    if (!root.TtsDocumentation) {
      root.TtsDocumentation = {};
    }
    root.TtsDocumentation.SynthesizeText = factory(root.TtsDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SynthesizeText model module.
   * @module model/SynthesizeText
   * @version 3.1.73
   */

  /**
   * Constructs a new <code>SynthesizeText</code>.
   * @alias module:model/SynthesizeText
   * @class
   * @param mime {String} Type of content
   * @param value {String} Text for synthesize
   */
  var exports = function(mime, value) {
    var _this = this;

    _this['mime'] = mime;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>SynthesizeText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SynthesizeText} obj Optional instance to populate.
   * @return {module:model/SynthesizeText} The populated <code>SynthesizeText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mime')) {
        obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of content
   * @member {String} mime
   */
  exports.prototype['mime'] = undefined;
  /**
   * Text for synthesize
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


