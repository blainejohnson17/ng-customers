(function() {
  'use strict';

  angular
    .module('customersApp')
    .controller('CustomersController', ['$scope', 'customersFactory', 'appSettings', function($scope, customersFactory, appSettings) {
      $scope.sortBy = 'name';
      $scope.reverse = 'false';
      $scope.customers = [];
      $scope.title = appSettings.title;
      $scope.version = appSettings.version;
      
      function init() {
        $scope.customers = customersFactory.getCustomers();
      }
      
      init();

      $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      };

    }]);
})();
