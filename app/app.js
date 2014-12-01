(function() {
  'use strict';

  angular
    .module('customersApp', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'CustomersController',
          templateUrl: '/app/views/customers.html'
        })
        .when('/orders/:customerId', {
          controller: 'OrdersController',
          templateUrl: '/app/views/orders.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
