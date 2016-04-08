'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'phonecatAnimations',
    'ctrls',
    'phonecatFilters',
    'servs',
    'wu.masonry',
    'ui.bootstrap'
    ]);

phonecatApp.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
    $routeProvider.
    when('/phones', {
        templateUrl: 'http://7xq9bs.com1.z0.glb.clouddn.com/angular/partials/phone-list.html',
        controller: 'PhoneListCtrl',
        title: 'test',
    }).
    when('/phones/:phoneId', {
        templateUrl: 'http://7xq9bs.com1.z0.glb.clouddn.com/angular/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        title: "test"
    }).
    when('/test', {
        templateUrl: 'http://7xq9bs.com1.z0.glb.clouddn.com/angular/partials/alert-demo.html',
        controller: 'AlertDemoCtrl',
        title: 'test'
    }).
    when('/index', {
        templateUrl: 'http://7xq9bs.com1.z0.glb.clouddn.com/angular/partials/welcome.html',
        controller: 'WelcomeCtrl'
    }).
    when('/orgs/:cat/:org', {
        templateUrl: 'http://7xq9bs.com1.z0.glb.clouddn.com/angular/partials/article.html',
        controller: 'ArticleCtrl'
    }).
    otherwise({
        redirectTo: '/index'
    });
}]);
