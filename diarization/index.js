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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Audio', 'model/DiarizationParam', 'model/DiarizationResponse', 'model/DiarizationResult', 'model/ExceptionModel', 'model/Segment', 'model/Speaker', 'model/StartSessionRequest', 'model/StartSessionResponse', 'api/SessionApi', 'api/V1Api'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Audio'), require('./model/DiarizationParam'), require('./model/DiarizationResponse'), require('./model/DiarizationResult'), require('./model/ExceptionModel'), require('./model/Segment'), require('./model/Speaker'), require('./model/StartSessionRequest'), require('./model/StartSessionResponse'), require('./api/SessionApi'), require('./api/V1Api'));
  }
}(function(ApiClient, Audio, DiarizationParam, DiarizationResponse, DiarizationResult, ExceptionModel, Segment, Speaker, StartSessionRequest, StartSessionResponse, SessionApi, V1Api) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DiarizationDocumentation = require('index'); // See note below*.
   * var xxxSvc = new DiarizationDocumentation.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DiarizationDocumentation.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new DiarizationDocumentation.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DiarizationDocumentation.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.1.73
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Audio model constructor.
     * @property {module:model/Audio}
     */
    Audio: Audio,
    /**
     * The DiarizationParam model constructor.
     * @property {module:model/DiarizationParam}
     */
    DiarizationParam: DiarizationParam,
    /**
     * The DiarizationResponse model constructor.
     * @property {module:model/DiarizationResponse}
     */
    DiarizationResponse: DiarizationResponse,
    /**
     * The DiarizationResult model constructor.
     * @property {module:model/DiarizationResult}
     */
    DiarizationResult: DiarizationResult,
    /**
     * The ExceptionModel model constructor.
     * @property {module:model/ExceptionModel}
     */
    ExceptionModel: ExceptionModel,
    /**
     * The Segment model constructor.
     * @property {module:model/Segment}
     */
    Segment: Segment,
    /**
     * The Speaker model constructor.
     * @property {module:model/Speaker}
     */
    Speaker: Speaker,
    /**
     * The StartSessionRequest model constructor.
     * @property {module:model/StartSessionRequest}
     */
    StartSessionRequest: StartSessionRequest,
    /**
     * The StartSessionResponse model constructor.
     * @property {module:model/StartSessionResponse}
     */
    StartSessionResponse: StartSessionResponse,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The V1Api service constructor.
     * @property {module:api/V1Api}
     */
    V1Api: V1Api
  };

  return exports;
}));
