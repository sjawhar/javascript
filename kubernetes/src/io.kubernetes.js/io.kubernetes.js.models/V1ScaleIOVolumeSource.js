/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1LocalObjectReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LocalObjectReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1ScaleIOVolumeSource = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1LocalObjectReference);
  }
}(this, function(ApiClient, V1LocalObjectReference) {
  'use strict';




  /**
   * The V1ScaleIOVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1ScaleIOVolumeSource
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1ScaleIOVolumeSource</code>.
   * ScaleIOVolumeSource represents a persistent ScaleIO volume
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1ScaleIOVolumeSource
   * @class
   * @param gateway {String} The host address of the ScaleIO API Gateway.
   * @param secretRef {module:io.kubernetes.js/io.kubernetes.js.models/V1LocalObjectReference} SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
   * @param system {String} The name of the storage system as configured in ScaleIO.
   */
  var exports = function(gateway, secretRef, system) {
    var _this = this;


    _this['gateway'] = gateway;


    _this['secretRef'] = secretRef;



    _this['system'] = system;

  };

  /**
   * Constructs a <code>V1ScaleIOVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1ScaleIOVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1ScaleIOVolumeSource} The populated <code>V1ScaleIOVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fsType')) {
        obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
      }
      if (data.hasOwnProperty('gateway')) {
        obj['gateway'] = ApiClient.convertToType(data['gateway'], 'String');
      }
      if (data.hasOwnProperty('protectionDomain')) {
        obj['protectionDomain'] = ApiClient.convertToType(data['protectionDomain'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('secretRef')) {
        obj['secretRef'] = V1LocalObjectReference.constructFromObject(data['secretRef']);
      }
      if (data.hasOwnProperty('sslEnabled')) {
        obj['sslEnabled'] = ApiClient.convertToType(data['sslEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('storageMode')) {
        obj['storageMode'] = ApiClient.convertToType(data['storageMode'], 'String');
      }
      if (data.hasOwnProperty('storagePool')) {
        obj['storagePool'] = ApiClient.convertToType(data['storagePool'], 'String');
      }
      if (data.hasOwnProperty('system')) {
        obj['system'] = ApiClient.convertToType(data['system'], 'String');
      }
      if (data.hasOwnProperty('volumeName')) {
        obj['volumeName'] = ApiClient.convertToType(data['volumeName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @member {String} fsType
   */
  exports.prototype['fsType'] = undefined;
  /**
   * The host address of the ScaleIO API Gateway.
   * @member {String} gateway
   */
  exports.prototype['gateway'] = undefined;
  /**
   * The name of the Protection Domain for the configured storage (defaults to \"default\").
   * @member {String} protectionDomain
   */
  exports.prototype['protectionDomain'] = undefined;
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1LocalObjectReference} secretRef
   */
  exports.prototype['secretRef'] = undefined;
  /**
   * Flag to enable/disable SSL communication with Gateway, default false
   * @member {Boolean} sslEnabled
   */
  exports.prototype['sslEnabled'] = undefined;
  /**
   * Indicates whether the storage for a volume should be thick or thin (defaults to \"thin\").
   * @member {String} storageMode
   */
  exports.prototype['storageMode'] = undefined;
  /**
   * The Storage Pool associated with the protection domain (defaults to \"default\").
   * @member {String} storagePool
   */
  exports.prototype['storagePool'] = undefined;
  /**
   * The name of the storage system as configured in ScaleIO.
   * @member {String} system
   */
  exports.prototype['system'] = undefined;
  /**
   * The name of a volume already created in the ScaleIO system that is associated with this volume source.
   * @member {String} volumeName
   */
  exports.prototype['volumeName'] = undefined;



  return exports;
}));

