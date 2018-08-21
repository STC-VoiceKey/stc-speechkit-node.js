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
    define(['ApiClient', 'model/ASRResultDto', 'model/ExceptionDto', 'model/RecognitionRequestDto', 'model/SessionlessRecognitionRequestDto', 'model/StatusDto', 'model/StreamRequestDto', 'model/WebSocketServerConfiguration', 'model/WordDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ASRResultDto'), require('../model/ExceptionDto'), require('../model/RecognitionRequestDto'), require('../model/SessionlessRecognitionRequestDto'), require('../model/StatusDto'), require('../model/StreamRequestDto'), require('../model/WebSocketServerConfiguration'), require('../model/WordDto'));
  } else {
    // Browser globals (root is window)
    if (!root.AsrDocumentation) {
      root.AsrDocumentation = {};
    }
    root.AsrDocumentation.RecognizeApi = factory(root.AsrDocumentation.ApiClient, root.AsrDocumentation.ASRResultDto, root.AsrDocumentation.ExceptionDto, root.AsrDocumentation.RecognitionRequestDto, root.AsrDocumentation.SessionlessRecognitionRequestDto, root.AsrDocumentation.StatusDto, root.AsrDocumentation.StreamRequestDto, root.AsrDocumentation.WebSocketServerConfiguration, root.AsrDocumentation.WordDto);
  }
}(this, function(ApiClient, ASRResultDto, ExceptionDto, RecognitionRequestDto, SessionlessRecognitionRequestDto, StatusDto, StreamRequestDto, WebSocketServerConfiguration, WordDto) {
  'use strict';

  /**
   * Recognize service.
   * @module api/RecognizeApi
   * @version 1.0.dev
   */

  /**
   * Constructs a new RecognizeApi. 
   * @alias module:api/RecognizeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the close operation.
     * @callback module:api/RecognizeApi~closeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ASRResultDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Close transaction
     * 
     * @param {String} xSessionID Session identifier
     * @param {String} xTransactionId Session identifier
     * @param {module:api/RecognizeApi~closeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ASRResultDto}
     */
    this.close = function(xSessionID, xTransactionId, callback) {
      var postBody = null;

      // verify the required parameter 'xSessionID' is set
      if (xSessionID === undefined || xSessionID === null) {
        throw new Error("Missing the required parameter 'xSessionID' when calling close");
      }

      // verify the required parameter 'xTransactionId' is set
      if (xTransactionId === undefined || xTransactionId === null) {
        throw new Error("Missing the required parameter 'xTransactionId' when calling close");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Session-ID': xSessionID,
        'X-Transaction-Id': xTransactionId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ASRResultDto;

      return this.apiClient.callApi(
        '/v1/recognize/stream', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recognize operation.
     * @callback module:api/RecognizeApi~recognizeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ASRResultDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get speech recognition result
     * 
     * @param {String} xSessionID Session identifier
     * @param {module:model/RecognitionRequestDto} body Recognition request with audio file, mime type and package ID
     * @param {module:api/RecognizeApi~recognizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ASRResultDto}
     */
    this.recognize = function(xSessionID, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSessionID' is set
      if (xSessionID === undefined || xSessionID === null) {
        throw new Error("Missing the required parameter 'xSessionID' when calling recognize");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling recognize");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Session-ID': xSessionID
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ASRResultDto;

      return this.apiClient.callApi(
        '/v1/recognize', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recognizeSessionless operation.
     * @callback module:api/RecognizeApi~recognizeSessionlessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ASRResultDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get speech recognition result
     * 
     * @param {module:model/SessionlessRecognitionRequestDto} body Request with user login data and recognition request
     * @param {module:api/RecognizeApi~recognizeSessionlessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ASRResultDto}
     */
    this.recognizeSessionless = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling recognizeSessionless");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ASRResultDto;

      return this.apiClient.callApi(
        '/v1/recognize/sessionless', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recognizeWords operation.
     * @callback module:api/RecognizeApi~recognizeWordsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WordDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recognize speech and return word list
     * 
     * @param {String} xSessionID Session identifier
     * @param {module:model/RecognitionRequestDto} body Recognition request with audio file, mime type and package ID
     * @param {module:api/RecognizeApi~recognizeWordsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WordDto>}
     */
    this.recognizeWords = function(xSessionID, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSessionID' is set
      if (xSessionID === undefined || xSessionID === null) {
        throw new Error("Missing the required parameter 'xSessionID' when calling recognizeWords");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling recognizeWords");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Session-ID': xSessionID
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = [WordDto];

      return this.apiClient.callApi(
        '/v1/recognize/words', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recognizeWordsSessionless operation.
     * @callback module:api/RecognizeApi~recognizeWordsSessionlessCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WordDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recognize speech without session and return word list
     * 
     * @param {module:model/SessionlessRecognitionRequestDto} body Request with user login data and recognition request
     * @param {module:api/RecognizeApi~recognizeWordsSessionlessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WordDto>}
     */
    this.recognizeWordsSessionless = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling recognizeWordsSessionless");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = [WordDto];

      return this.apiClient.callApi(
        '/v1/recognize/sessionless/words', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the start operation.
     * @callback module:api/RecognizeApi~startCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebSocketServerConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start recognition stream
     * 
     * @param {String} xSessionID Session identifier
     * @param {module:model/StreamRequestDto} body Transaction parameters
     * @param {module:api/RecognizeApi~startCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebSocketServerConfiguration}
     */
    this.start = function(xSessionID, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSessionID' is set
      if (xSessionID === undefined || xSessionID === null) {
        throw new Error("Missing the required parameter 'xSessionID' when calling start");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling start");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Session-ID': xSessionID
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = WebSocketServerConfiguration;

      return this.apiClient.callApi(
        '/v1/recognize/stream', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
