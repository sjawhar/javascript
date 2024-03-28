/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* ResourceHandle holds opaque resource data for processing by a specific kubelet plugin.
*/
export class V1alpha2ResourceHandle {
    /**
    * Data contains the opaque data associated with this ResourceHandle. It is set by the controller component of the resource driver whose name matches the DriverName set in the ResourceClaimStatus this ResourceHandle is embedded in. It is set at allocation time and is intended for processing by the kubelet plugin whose name matches the DriverName set in this ResourceHandle.  The maximum size of this field is 16KiB. This may get increased in the future, but not reduced.
    */
    'data'?: string;
    /**
    * DriverName specifies the name of the resource driver whose kubelet plugin should be invoked to process this ResourceHandle\'s data once it lands on a node. This may differ from the DriverName set in ResourceClaimStatus this ResourceHandle is embedded in.
    */
    'driverName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "driverName",
            "baseName": "driverName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2ResourceHandle.attributeTypeMap;
    }
}

