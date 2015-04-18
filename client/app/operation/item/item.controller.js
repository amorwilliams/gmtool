'use strict';

angular.module('gameManagerApp')
    .controller('ItemCtrl', function($scope, $http) {

        ///////////////////////////////////////////////////////////////
        $scope.postItemSchema = {
            type: 'object',
            properties: {
                receivers: {
                    type: 'string'
                },
                mail: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string',
                            title: '标题：'
                        },
                        content: {
                            type: 'string',
                            title: '内容：'
                        }
                    }
                },
                items: {
                    title: '发放道具：',
                    type: 'array',
                    items: {
                        "type": "object",
                        "properties": {
                            id: {
                                title: '道具ID：',
                                type: 'number'
                            },
                            num: {
                                title: '数量：',
                                type: 'number'
                            }
                        }

                    }
                },
                pets: {
                    title: '发放宠物：',
                    type: 'array',
                    items: {
                        "type": "object",
                        "properties": {
                            id: {
                                title: '宠物ID：',
                                type: 'number'
                            },
                            num: {
                                title: '数量：',
                                type: 'number'
                            }
                        }
                    }
                }
            },
            required: ['receivers', 'mail.title']
        };

        $scope.postItemForm = [{
            type: 'help',
            helpvalue: '<h4>收件人：</h4>'
        }, {
            key: 'recerivers',
            type: 'textarea',
            placeholder: 'robin;130\nsimona;110',
            'description': '一行一个帐号格式需求：帐号;服务器ID（或服务器名, robin;130），以此来确定发放对象的唯一性'
        }, {
            type: 'help',
            helpvalue: '<h4>邮件内容：</h4>'
        }, {
            key: 'mail.title'
        }, {
            key: 'mail.content',
            type: 'textarea'
        }, {
            type: 'section',
            htmlClass: 'col-xs-6 ',
            items: [{
                "key": "items",
                "add": "添加",
                "style": {
                    "add": "btn-success"
                },
                items: [
                    'items[].id',
                    'items[].num'
                ]
            }]
        }, {
            type: 'section',
            htmlClass: 'col-xs-6 ',
            items: [{
                "key": "pets",
                "add": "添加",
                "style": {
                    "add": "btn-success"
                },
                items: [
                    'pets[].id',
                    'pets[].num'
                ]
            }]
        },{
            type: 'submit',
            style: 'btn-info btn-submit',
            title: '发送'
        }];

        $scope.postItemModel = {};

        $scope.items = [{
            'name': 'item01',
            'id': '10001',
            'quality': '1',
            'num': '5'
        }, {
            'name': 'item01',
            'id': '10001',
            'quality': '1',
            'num': '5'
        }, {
            'name': 'item01',
            'id': '10001',
            'quality': '1',
            'num': '5'
        }, {
            'name': 'item01',
            'id': '10001',
            'quality': '1',
            'num': '5'
        }, {
            'name': 'item01',
            'id': '10001',
            'quality': '1',
            'num': '5'
        }];

        $scope.onSubmit = function(form) {
            $scope.$broadcast('schemaFormValidate');
            if (form.$valid) {
                console.log($scope.postItemModel);
            }
        }
    });