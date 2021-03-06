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
    define(['ApiClient', 'model/ExceptionModel', 'model/SessionDto', 'model/StartSessionRequest', 'model/StatusDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExceptionModel'), require('../model/SessionDto'), require('../model/StartSessionRequest'), require('../model/StatusDto'));
  } else {
    // Browser globals (root is window)
    if (!root.TtsDocumentation) {
      root.TtsDocumentation = {};
    }
    root.TtsDocumentation.SessionApi = factory(root.TtsDocumentation.ApiClient, root.TtsDocumentation.ExceptionModel, root.TtsDocumentation.SessionDto, root.TtsDocumentation.StartSessionRequest, root.TtsDocumentation.StatusDto);
  }
}(this, function(ApiClient, ExceptionModel, SessionDto, StartSessionRequest, StatusDto) {
  'use strict';

  /**
   * Session service.
   * @module api/SessionApi
   * @version 3.1.73
   */

  /**
   * Constructs a new SessionApi. 
   * @alias module:api/SessionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkSession operation.
     * @callback module:api/SessionApi~checkSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check session status
     * 
     * @param {String} xSessionId Session identifier
     * @param {module:api/SessionApi~checkSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusDto}
     */
    this.checkSession = function(xSessionId, callback) {
      var postBody = null;

      // verify the required parameter 'xSessionId' is set
      if (xSessionId === undefined || xSessionId === null) {
        throw new Error("Missing the required parameter 'xSessionId' when calling checkSession");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Session-Id': xSessionId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = StatusDto;

      return this.apiClient.callApi(
        '/session', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the closeSession operation.
     * @callback module:api/SessionApi~closeSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Close active session
     * 
     * @param {String} xSessionId Session identifier
     * @param {module:api/SessionApi~closeSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusDto}
     */
    this.closeSession = function(xSessionId, callback) {
      var postBody = null;

      // verify the required parameter 'xSessionId' is set
      if (xSessionId === undefined || xSessionId === null) {
        throw new Error("Missing the required parameter 'xSessionId' when calling closeSession");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Session-Id': xSessionId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = StatusDto;

      return this.apiClient.callApi(
        '/session', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startSession operation.
     * @callback module:api/SessionApi~startSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SessionDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start session
     * 
     * @param {module:model/StartSessionRequest} body Request, containing user credentials
     * @param {module:api/SessionApi~startSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SessionDto}
     */
    this.startSession = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling startSession");
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
      var returnType = SessionDto;

      return this.apiClient.callApi(
        '/session', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
