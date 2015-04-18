'use strict';

angular.module('gameManagerApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {'title': '首页', 'link': '/'},
      {'title': '权限管理', 'link': '/user'},
      {'title': "运营管理", 'link': '/operation'},
      {'title': "玩家管理", 'link': '/player'},
      {'title': "数据统计", 'link': '/stats'},
      {'title': "游戏监控", 'link': '/server'}
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
