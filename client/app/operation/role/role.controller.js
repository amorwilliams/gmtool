'use strict';

angular.module('gameManagerApp')
    .controller('RoleCtrl', ['$scope', '$http', 'OpData',
        function($scope, $http, OpData) {

            ///////////////////////////////////////////////////////////////
            ///                     查询表单
            ///////////////////////////////////////////////////////////////
            /// 
            $scope.searchSchema = {
                type: "object",
                properties: {
                    zone: {
                        type: "string",
                        title: "大区：",
                        enum: OpData.zones
                    },
                    server: {
                        type: "string",
                        title: "服务器：",
                        enum: OpData.serverIds
                    },
                    account: {
                        type: "string",
                        title: "帐号："
                    },
                    roleId: {
                        type: "number",
                        title: "角色ID："
                    }
                },
                required: ["zone", "server", "account", "roleId"]
            };

            $scope.searchForm = [{
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": [{
                        key: "zone"
                    }]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": [{
                        key: "server"
                    }]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": [{
                        key: "account",
                        validationMessages: {
                            'empty': 'Bob is not OK! You here me?'
                        },
                        $validators: {
                            empty: function(value) {
                                if (value === null || value === undefined || value === "") {
                                    return false;
                                }
                                return true;
                            }
                        }
                    }],

                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": [{
                        key: "roleId"
                    }]
                }, {
                    "type": "submit",
                    "htmlClass": "col-xs-3 pull-right",
                    "fieldHtmlClass": "btn-submit",
                    "title": "查询"
                }]
            }];

            $scope.searchModel = {};

            $scope.onSearch = function(form) {
                $scope.$broadcast('schemaFormValidate');
                if (form.$valid) {
                    console.log($scope.searchModel);
                    $http.post('/api/operation', $scope.searchModel)
                        .success(function(data, status) {
                            console.log(data);
                            $scope.status = status;
                        })
                        .error(function(data, status) {
                            console.log(data || "Request failed");
                            $scope.status = status;
                        })
                }
            }

            ///////////////////////////////////////////////////////////////
            ///                     实力信息     
            ///////////////////////////////////////////////////////////////

            $scope.strengthSchema = {
                type: "object",
                properties: {
                    level: {
                        type: "number",
                        title: "角色等级:",
                        readonly: true
                    },
                    vip: {
                        type: "number",
                        title: "VIP等级:",
                        readonly: true
                    },
                    strength: {
                        type: "number",
                        title: "战斗力:",
                        readonly: true
                    },
                    title: {
                        type: "string",
                        title: "称号:",
                        readonly: true
                    }
                }
            };

            $scope.strengthForm = [{
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["level"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["vip"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["strength"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["title"]
                }, ]
            }];

            $scope.attribModel = {};

            ///////////////////////////////////////////////////////////////

            $scope.attribSchema = {
                type: "object",
                properties: {
                    maxHp: {
                        type: "number",
                        title: "生命:",
                        readonly: true
                    },
                    hpRestore: {
                        type: "number",
                        title: "生命回复:",
                        readonly: true
                    },
                    physicalDamage: {
                        type: "number",
                        title: "物攻:",
                        readonly: true
                    },
                    magicDamage: {
                        type: "number",
                        title: "魔攻:",
                        readonly: true
                    },
                    physicalDefense: {
                        type: "number",
                        title: "物防:",
                        readonly: true
                    },
                    magicDefense: {
                        type: "number",
                        title: "魔防:",
                        readonly: true
                    },
                    critical: {
                        type: "number",
                        title: "暴击:",
                        readonly: true
                    },
                    criticalDamage: {
                        type: "number",
                        title: "暴伤:",
                        readonly: true
                    },
                    block: {
                        type: "number",
                        title: "闪避:",
                        readonly: true
                    }
                }
            };

            $scope.attribForm = [{
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["maxHp"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["hpRestore"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["physicalDamage"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["magicDamage"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["physicalDefense"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["magicDefense"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["critical"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["criticalDamage"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["block"]
                }]
            }];

            $scope.attribModel = {};

            ///////////////////////////////////////////////////////////////


            $scope.resourceSchema = {
                type: "object",
                properties: {
                    gem: {
                        type: "number",
                        title: "钻石:"
                    },
                    strength: {
                        type: "number",
                        title: "体力:"
                    },
                    gold: {
                        type: "number",
                        title: "金币:"
                    },
                    everLevelProgress: {
                        type: "number",
                        title: "无尽之塔进度:"
                    },
                    everLevelCount: {
                        type: "number",
                        title: "无尽之塔次数:"
                    },
                    worldBossCount: {
                        type: "number",
                        title: "世界boss次数:"
                    },
                    timeLevelCount: {
                        type: "number",
                        title: "限时本次数:"
                    },
                    sp: {
                        type: "number",
                        title: "灵魂点数:"
                    },
                    ap: {
                        type: "number",
                        title: "神器点数:"
                    },
                    lp: {
                        type: "number",
                        title: "生命印记:"
                    },
                    delegateLeve: {
                        type: "number",
                        title: "委托等级:"
                    },
                    equipRank: {
                        type: "number",
                        title: "装备品阶:"
                    }
                }
            };

            $scope.resourceForm = [{
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["gem"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["strength"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["gold"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["everLevelProgress"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["everLevelCount"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["worldBossCount"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["timeLevelCount"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["sp"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["ap"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["lp"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["delegateLeve"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["equipRank"]
                }, {
                    "type": "submit",
                    "htmlClass": "col-xs-3 pull-right",
                    "fieldHtmlClass": "btn-submit",
                    "title": "更新"
                }]
            }];

            $scope.resourceModel = {
                "gem": 10,
            };

            /////////////////////////////////////////////////////////////////////////////////////

            $scope.strengthenSchema = {
                type: "object",
                properties: {
                    equip1: {
                        type: "number",
                        title: "武器:"
                    },
                    equip2: {
                        type: "number",
                        title: "头盔:"
                    },
                    equip3: {
                        type: "number",
                        title: "胸甲:"
                    },
                    equip4: {
                        type: "number",
                        title: "手套:"
                    },
                    equip5: {
                        type: "number",
                        title: "鞋子:"
                    },
                    equip6: {
                        type: "number",
                        title: "饰品:"
                    },
                    soulLink1: {
                        type: "number",
                        title: "灵魂栏1等级:"
                    },
                    soulLink2: {
                        type: "number",
                        title: "灵魂栏2等级:"
                    },
                    soulLink3: {
                        type: "number",
                        title: "灵魂栏3等级:"
                    },
                }
            };

            $scope.strengthenForm = [{
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-2",
                    "items": ["equip1"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-2",
                    "items": ["equip2"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-2",
                    "items": ["equip3"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-2",
                    "items": ["equip4"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-2",
                    "items": ["equip5"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-2",
                    "items": ["equip6"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-4",
                    "items": ["soulLink1"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-4",
                    "items": ["soulLink2"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-4",
                    "items": ["soulLink3"]
                }]
            }, {
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "submit",
                    "htmlClass": "col-xs-3 pull-right",
                    "fieldHtmlClass": "btn-submit",
                    "title": "更新"
                }]
            }];

            $scope.strengthenModel = {};

            ////////////////////////////////////////////////////////////////////////////////

            $scope.pets = ['pet1', 'pet2', 'pet2', 'pet2', 'pet2', 'pet2', 'pet2'];

            $scope.petSchema = {
                type: "object",
                properties: {
                    pets: {
                        type: "string",
                        title: "选择宠物",
                        enum: $scope.pets
                    },
                    //-------------------------------------------------------------
                    level: {
                        type: "number",
                        title: "等级:"
                    },
                    rank: {
                        type: "number",
                        title: "品质:"
                    },
                    star: {
                        type: "number",
                        title: "星级:"
                    },
                    equip1: {
                        type: "number",
                        title: "装备1:"
                    },
                    equip2: {
                        type: "number",
                        title: "装备2:"
                    },
                    equip3: {
                        type: "number",
                        title: "装备3:"
                    },
                    equip4: {
                        type: "number",
                        title: "装备4:"
                    },
                    equip5: {
                        type: "number",
                        title: "装备5:"
                    },
                    equip6: {
                        type: "number",
                        title: "装备6:"
                    },
                    //-------------------------------------------------------------
                    maxHp: {
                        type: "number",
                        title: "生命:",
                        readonly: true
                    },
                    hpRestore: {
                        type: "number",
                        title: "生命回复:",
                        readonly: true
                    },
                    physicalDamage: {
                        type: "number",
                        title: "物攻:",
                        readonly: true
                    },
                    magicDamage: {
                        type: "number",
                        title: "魔攻:",
                        readonly: true
                    },
                    physicalDefense: {
                        type: "number",
                        title: "物防:",
                        readonly: true
                    },
                    magicDefense: {
                        type: "number",
                        title: "魔防:",
                        readonly: true
                    },
                    critical: {
                        type: "number",
                        title: "暴击:",
                        readonly: true
                    },
                    criticalDamage: {
                        type: "number",
                        title: "暴伤:",
                        readonly: true
                    },
                    block: {
                        type: "number",
                        title: "闪避:",
                        readonly: true
                    },
                    //-------------------------------------------------------------
                    artifactType: {
                        type: "string",
                        title: "神器:",
                        enum: ['神器1', '神器2', '神器3']
                    },
                    artifactLevel: {
                        type: "number",
                        title: "神器等级:"
                    },
                    //-------------------------------------------------------------
                    skillLevel1: {
                        type: "number",
                        title: "技能1等级:"
                    },
                    skillLevel2: {
                        type: "number",
                        title: "技能2等级:"
                    },
                    skillLevel3: {
                        type: "number",
                        title: "技能3等级:"
                    },
                    skillLevel4: {
                        type: "number",
                        title: "技能4等级:"
                    },
                    skillLevel5: {
                        type: "number",
                        title: "技能5等级:"
                    },
                    skillLevel6: {
                        type: "number",
                        title: "技能6等级:"
                    }
                }
            };

            $scope.petForm = [{
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-4",
                    "items": ["pets"]
                }]
            }, {
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-4",
                    "items": ["level"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-4",
                    "items": ["rank"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-4",
                    "items": ["star"]
                }]
            }, {
                "type": "section",
                "htmlClass": "row",
                "items": [{
                        "type": "section",
                        "htmlClass": "col-xs-2",
                        "items": ["equip1"]
                    }, {
                        "type": "section",
                        "htmlClass": "col-xs-2",
                        "items": ["equip2"]
                    }, {
                        "type": "section",
                        "htmlClass": "col-xs-2",
                        "items": ["equip3"]
                    }, {
                        "type": "section",
                        "htmlClass": "col-xs-2",
                        "items": ["equip4"]
                    }, {
                        "type": "section",
                        "htmlClass": "col-xs-2",
                        "items": ["equip5"]
                    }, {
                        "type": "section",
                        "htmlClass": "col-xs-2",
                        "items": ["equip6"]
                    }

                ]
            }, {
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["maxHp"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["hpRestore"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["physicalDamage"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["magicDamage"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["physicalDefense"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["magicDefense"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["critical"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["criticalDamage"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["block"]
                }]
            }, {
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-6",
                    "items": ["artifactType"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-6",
                    "items": ["artifactLevel"]
                }]
            }, {
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["skillLevel1"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["skillLevel2"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["skillLevel3"]
                }, {
                    "type": "section",
                    "htmlClass": "col-xs-3",
                    "items": ["skillLevel4"]
                }]
            }, {
                "type": "section",
                "htmlClass": "row",
                "items": [{
                    "type": "submit",
                    "htmlClass": "col-xs-3 pull-right",
                    "fieldHtmlClass": "btn-submit",
                    "title": "更新"
                }]
            }];

            $scope.petModel = {};

            ///////////////////////////////////////////////////////////////////////////////////////

        }
    ]);