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
import { V1CustomResourceDefinitionCondition } from './v1CustomResourceDefinitionCondition';
import { V1CustomResourceDefinitionNames } from './v1CustomResourceDefinitionNames';

/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
*/
export class V1CustomResourceDefinitionStatus {
    'acceptedNames'?: V1CustomResourceDefinitionNames;
    /**
    * conditions indicate state for particular aspects of a CustomResourceDefinition
    */
    'conditions'?: Array<V1CustomResourceDefinitionCondition>;
    /**
    * storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
    */
    'storedVersions'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acceptedNames",
            "baseName": "acceptedNames",
            "type": "V1CustomResourceDefinitionNames"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1CustomResourceDefinitionCondition>"
        },
        {
            "name": "storedVersions",
            "baseName": "storedVersions",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceDefinitionStatus.attributeTypeMap;
    }
}

