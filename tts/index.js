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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CloseTransactionResponse', 'model/Credentials', 'model/ExceptionModel', 'model/SessionDto', 'model/StartSessionRequest', 'model/StatusDto', 'model/SynthesizeLanguage', 'model/SynthesizeRequest', 'model/SynthesizeResponse', 'model/SynthesizeSessionlessRequest', 'model/SynthesizeText', 'model/SynthesizeVoiceType', 'model/WebSocketServerConfiguration', 'model/WebSocketSynthesizeRequest', 'model/WebSocketTextParam', 'api/SessionApi', 'api/SynthesizeApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CloseTransactionResponse'), require('./model/Credentials'), require('./model/ExceptionModel'), require('./model/SessionDto'), require('./model/StartSessionRequest'), require('./model/StatusDto'), require('./model/SynthesizeLanguage'), require('./model/SynthesizeRequest'), require('./model/SynthesizeResponse'), require('./model/SynthesizeSessionlessRequest'), require('./model/SynthesizeText'), require('./model/SynthesizeVoiceType'), require('./model/WebSocketServerConfiguration'), require('./model/WebSocketSynthesizeRequest'), require('./model/WebSocketTextParam'), require('./api/SessionApi'), require('./api/SynthesizeApi'));
  }
}(function(ApiClient, CloseTransactionResponse, Credentials, ExceptionModel, SessionDto, StartSessionRequest, StatusDto, SynthesizeLanguage, SynthesizeRequest, SynthesizeResponse, SynthesizeSessionlessRequest, SynthesizeText, SynthesizeVoiceType, WebSocketServerConfiguration, WebSocketSynthesizeRequest, WebSocketTextParam, SessionApi, SynthesizeApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var TtsDocumentation = require('index'); // See note below*.
   * var xxxSvc = new TtsDocumentation.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new TtsDocumentation.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new TtsDocumentation.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new TtsDocumentation.Yyy(); // Construct a model instance.
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
     * The CloseTransactionResponse model constructor.
     * @property {module:model/CloseTransactionResponse}
     */
    CloseTransactionResponse: CloseTransactionResponse,
    /**
     * The Credentials model constructor.
     * @property {module:model/Credentials}
     */
    Credentials: Credentials,
    /**
     * The ExceptionModel model constructor.
     * @property {module:model/ExceptionModel}
     */
    ExceptionModel: ExceptionModel,
    /**
     * The SessionDto model constructor.
     * @property {module:model/SessionDto}
     */
    SessionDto: SessionDto,
    /**
     * The StartSessionRequest model constructor.
     * @property {module:model/StartSessionRequest}
     */
    StartSessionRequest: StartSessionRequest,
    /**
     * The StatusDto model constructor.
     * @property {module:model/StatusDto}
     */
    StatusDto: StatusDto,
    /**
     * The SynthesizeLanguage model constructor.
     * @property {module:model/SynthesizeLanguage}
     */
    SynthesizeLanguage: SynthesizeLanguage,
    /**
     * The SynthesizeRequest model constructor.
     * @property {module:model/SynthesizeRequest}
     */
    SynthesizeRequest: SynthesizeRequest,
    /**
     * The SynthesizeResponse model constructor.
     * @property {module:model/SynthesizeResponse}
     */
    SynthesizeResponse: SynthesizeResponse,
    /**
     * The SynthesizeSessionlessRequest model constructor.
     * @property {module:model/SynthesizeSessionlessRequest}
     */
    SynthesizeSessionlessRequest: SynthesizeSessionlessRequest,
    /**
     * The SynthesizeText model constructor.
     * @property {module:model/SynthesizeText}
     */
    SynthesizeText: SynthesizeText,
    /**
     * The SynthesizeVoiceType model constructor.
     * @property {module:model/SynthesizeVoiceType}
     */
    SynthesizeVoiceType: SynthesizeVoiceType,
    /**
     * The WebSocketServerConfiguration model constructor.
     * @property {module:model/WebSocketServerConfiguration}
     */
    WebSocketServerConfiguration: WebSocketServerConfiguration,
    /**
     * The WebSocketSynthesizeRequest model constructor.
     * @property {module:model/WebSocketSynthesizeRequest}
     */
    WebSocketSynthesizeRequest: WebSocketSynthesizeRequest,
    /**
     * The WebSocketTextParam model constructor.
     * @property {module:model/WebSocketTextParam}
     */
    WebSocketTextParam: WebSocketTextParam,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The SynthesizeApi service constructor.
     * @property {module:api/SynthesizeApi}
     */
    SynthesizeApi: SynthesizeApi
  };

  return exports;
}));