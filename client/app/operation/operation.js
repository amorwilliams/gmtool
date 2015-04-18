'use strict';

angular.module('gameManagerApp')
  .config(['$routeProvider', '$stateProvider',function ($routeProvider, $stateProvider) {
    $routeProvider
      .when('/operation', {
        templateUrl: 'app/operation/operation.html',
        controller: 'OperationCtrl',
        //authenticate: true
      });

    $stateProvider
      .state('account_lock',{
        url: '/operation',
        controller: 'AccountLockCtrl',
        templateUrl: 'app/operation/account_lock/account_lock.html'
      })
      .state('role',{
        url: '/operation',
        controller: 'RoleCtrl',
        templateUrl: 'app/operation/role/role.html'
      })
      .state('item',{
        url: '/operation',
        controller: 'ItemCtrl',
        templateUrl: 'app/operation/item/item.html'
      })
      .state('item_del',{
        url: '/operation',
        controller: 'ItemDelCtrl',
        templateUrl: 'app/operation/item_del/item_del.html'
      });

  }]);


