(function() {
  'use strict';

  angular
    .module('customersApp')
    .controller('OrdersController', ['$scope', '$routeParams', 'customersFactory', function($scope, $routeParams, customersFactory) {
      var customerId = $routeParams.customerId;
      $scope.customer = null;
      
      function init() {
        $scope.customer = customersFactory.getCustomer(customerId);
      }
      
      init();
    }]);
})();
