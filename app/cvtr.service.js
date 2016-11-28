'use strict';

angular.
  module('cvtrApp').
  factory('Currency', ['$resource',
    function($resource) {
      return $resource('http://api.fixer.io/latest?base=:base', {}, {
        retrieveData: {
          method: 'GET',
          params: {base: 'JPY'},
          isArray: false
        }
      });
    }
  ]);