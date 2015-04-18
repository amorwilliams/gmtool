'use strict';

angular.module('gameManagerApp')
    .controller('ItemDelCtrl', function($scope, $http, OpData) {

    	///////////////////////////////////////////////////////////////
        $scope.searchSchema = {
            type: "object",
            properties: {
                zone: {type: "string",title: "大区：",enum: OpData.zones},
                server: {type: "string",title: "服务器：",enum: OpData.serverIds},
                account: {type: "string",title: "帐号："},
                roleId: {type: "string",title: "角色ID："}
            }
        };

        $scope.searchForm = [
            {
                "type": "section",
                "htmlClass": "row",
                "items": [  
                        {"type": "section","htmlClass": "col-xs-3","items": ["zone"]}, 
                        {"type": "section","htmlClass": "col-xs-3","items": ["server"]}, 
                        {"type": "section","htmlClass": "col-xs-3","items": ["account"]}, 
                        {"type": "section","htmlClass": "col-xs-3","items": ["roleId"]},
                        {"type": "submit", "htmlClass": "col-xs-3 pull-right", "fieldHtmlClass": "btn-submit", "title": "查询"}
                    ]
            }
        ];

        $scope.searchModel = {};
    	
        $scope.items = [
        	{'name':'item01', 'id':'10001', 'quality':'1', 'num':'5'},
        	{'name':'item01', 'id':'10001', 'quality':'1', 'num':'5'},
        	{'name':'item01', 'id':'10001', 'quality':'1', 'num':'5'},
        	{'name':'item01', 'id':'10001', 'quality':'1', 'num':'5'},
        	{'name':'item01', 'id':'10001', 'quality':'1', 'num':'5'}
        ];
    });