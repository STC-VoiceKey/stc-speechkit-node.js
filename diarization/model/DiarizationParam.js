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
    define(['ApiClient', 'model/Audio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Audio'));
  } else {
    // Browser globals (root is window)
    if (!root.DiarizationDocumentation) {
      root.DiarizationDocumentation = {};
    }
    root.DiarizationDocumentation.DiarizationParam = factory(root.DiarizationDocumentation.ApiClient, root.DiarizationDocumentation.Audio);
  }
}(this, function(ApiClient, Audio) {
  'use strict';




  /**
   * The DiarizationParam model module.
   * @module model/DiarizationParam
   * @version 3.1.73
   */

  /**
   * Constructs a new <code>DiarizationParam</code>.
   * @alias module:model/DiarizationParam
   * @class
   * @param audio {module:model/Audio} Audio for diarization
   */
  var exports = function(audio) {
    var _this = this;

    _this['audio'] = audio;
  };

  /**
   * Constructs a <code>DiarizationParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiarizationParam} obj Optional instance to populate.
   * @return {module:model/DiarizationParam} The populated <code>DiarizationParam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audio')) {
        obj['audio'] = Audio.constructFromObject(data['audio']);
      }
    }
    return obj;
  }

  /**
   * Audio for diarization
   * @member {module:model/Audio} audio
   */
  exports.prototype['audio'] = undefined;



  return exports;
}));

