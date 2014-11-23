(function() {
  'use strict';

  angular
    .module('customersApp')
    .controller('CustomersController', ['$scope', function($scope) {
      $scope.sortBy = 'name';
      $scope.reverse = 'false';

      $scope.customers = [
        {joined: '200-12-02', name: 'John', city: 'Denver', orderTotal: 123},
        {joined: '200-12-02', name: 'Sam', city: 'Boulder', orderTotal: 1230},
        {joined: '200-12-02', name: 'You', city: 'Louisville', orderTotal: 12300},
        {joined: '200-12-02', name: 'Me', city: 'Lafayette', orderTotal: 123000},
      ];
      $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      };
    }]);
})();
