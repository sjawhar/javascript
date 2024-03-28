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
import { V2CrossVersionObjectReference } from './v2CrossVersionObjectReference';
import { V2MetricIdentifier } from './v2MetricIdentifier';
import { V2MetricValueStatus } from './v2MetricValueStatus';

/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
export class V2ObjectMetricStatus {
    'current': V2MetricValueStatus;
    'describedObject': V2CrossVersionObjectReference;
    'metric': V2MetricIdentifier;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "V2MetricValueStatus"
        },
        {
            "name": "describedObject",
            "baseName": "describedObject",
            "type": "V2CrossVersionObjectReference"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "V2MetricIdentifier"
        }    ];

    static getAttributeTypeMap() {
        return V2ObjectMetricStatus.attributeTypeMap;
    }
}

