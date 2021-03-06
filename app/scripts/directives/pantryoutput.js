'use strict';

/**
 * @ngdoc directive
 * @name pantryApp.directive:pantryOutput
 * @description
 * # pantryOutput
 */
angular.module('pantryApp')
  .directive('pantryOutput', function () {
    return {
      template: '<div class="row" ng-controller="pantryCtrl">\
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" >\
      <span class="row">\
        <span class="col-xs-4 col-xs-offset-4">\
        <span class="pantry">Pantry</span>\
            <button class="btn btn-info" ng-click="clearInventory()">Clear</button>\
          </span>\
        </span>\
        <ul class="row list-unstyled">\
          <li ng-repeat="item in pantry track by $index">\
            <span class="col-xs-6 col-xs-offset-2 text-left">{{item.name}}</span>\
            <span class="col-xs-1 text-right">{{item.servings}}</span>\
          </li>\
        </ul>\
      </div>\
    </div>',
      restrict: 'E',
      replace: true,
      controller: 'pantryCtrl'
    };
  });
