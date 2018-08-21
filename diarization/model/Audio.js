/**
 * Diarization documentation
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
    if (!root.DiarizationDocumentation) {
      root.DiarizationDocumentation = {};
    }
    root.DiarizationDocumentation.Audio = factory(root.DiarizationDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Audio model module.
   * @module model/Audio
   * @version 3.1.73
   */

  /**
   * Constructs a new <code>Audio</code>.
   * @alias module:model/Audio
   * @class
   * @param data {String} Audio in base64 for diarization
   * @param mime {String} Mime type of audio. Possible value: audio/alaw, audio/mulaw, audio/s16be, audio/wav
   */
  var exports = function(data, mime) {
    var _this = this;

    _this['data'] = data;
    _this['mime'] = mime;
  };

  /**
   * Constructs a <code>Audio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Audio} obj Optional instance to populate.
   * @return {module:model/Audio} The populated <code>Audio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
      if (data.hasOwnProperty('mime')) {
        obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
      }
    }
    return obj;
  }

  /**
   * Audio in base64 for diarization
   * @member {String} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Mime type of audio. Possible value: audio/alaw, audio/mulaw, audio/s16be, audio/wav
   * @member {String} mime
   */
  exports.prototype['mime'] = undefined;



  return exports;
}));


