/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: release-1.26
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1DaemonEndpoint } from './V1DaemonEndpoint';
import { HttpFile } from '../http/http';

/**
* NodeDaemonEndpoints lists ports opened by daemons running on the Node.
*/
export class V1NodeDaemonEndpoints {
    'kubeletEndpoint'?: V1DaemonEndpoint;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kubeletEndpoint",
            "baseName": "kubeletEndpoint",
            "type": "V1DaemonEndpoint",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodeDaemonEndpoints.attributeTypeMap;
    }

    public constructor() {
    }
}
