/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* role\'s members
*/
export class RoleMemberVo {
    /**
    * unit id
    */
    'unitId'?: number;
    /**
    * unit type：1-team，3-member
    */
    'unitType'?: number;
    /**
    * role member\'s unit id
    */
    'unitRefId'?: number;
    /**
    * team/member name
    */
    'unitName'?: string;
    /**
    * unit type is team, team\'s member
    */
    'memberCount'?: number;
    /**
    * unit type is member, team\'s avatar
    */
    'avatar'?: string;
    /**
    * unit type is member, member\'s teams
    */
    'teams'?: string;
    /**
    * unit type is member，member whether is admin
    */
    'isAdmin'?: boolean;
    /**
    * unit type is member，member whether is main admin
    */
    'isMainAdmin'?: boolean;
    /**
    * default avatar color number
    */
    'avatarColor'?: number;
    /**
    * Nick Name
    */
    'nickName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "unitId",
            "baseName": "unitId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unitType",
            "baseName": "unitType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "unitRefId",
            "baseName": "unitRefId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string",
            "format": ""
        },
        {
            "name": "memberCount",
            "baseName": "memberCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "teams",
            "baseName": "teams",
            "type": "string",
            "format": ""
        },
        {
            "name": "isAdmin",
            "baseName": "isAdmin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMainAdmin",
            "baseName": "isMainAdmin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "avatarColor",
            "baseName": "avatarColor",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "nickName",
            "baseName": "nickName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RoleMemberVo.attributeTypeMap;
    }

    public constructor() {
    }
}

