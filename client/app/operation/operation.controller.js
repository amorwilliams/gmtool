'use strict';

angular.module('gameManagerApp')
  .controller('OperationCtrl', function ($scope, $http, OpData) {
    $scope.tabData = [
      { heading:'帐号封停/解封', route:'account_lock'},
      { heading:'角色数据', route:'role', active: true },
      { heading:'道具发放', route:'item', disabled: false },
      { heading:'道具删除', route:'item_del'}
    ];

    OpData.zones = [];
    OpData.serverIds = [];

    $http.get('/api/operation').success(function(data) {
      console.log(data);
      OpData.zones = data.zones;
      OpData.serverIds = data.serverIds;
    });

    $scope.alertMe = function() {
      setTimeout(function() {
        $window.alert('You\'ve selected the alert tab!');
      });
    };
  })
  .factory('OpData', function(){
    return {};
  });
