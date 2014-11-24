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
        .otherwise({
          redirectTo: '/'
        });
    });
})();
