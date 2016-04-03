'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'phonecatAnimations',
    'ctrls',
    'phonecatFilters',
    'servs',
    'ui.bootstrap'
]);

phonecatApp.config(['$routeProvider',
                    function($routeProvider) {
                        $routeProvider.
                            when('/phones', {
                                templateUrl: 'partials/phone-list.html',
                                controller: 'PhoneListCtrl',
                                title: 'test',
                            }).
                            when('/phones/:phoneId', {
                                templateUrl: 'partials/phone-detail.html',
                                controller: 'PhoneDetailCtrl',
                                title: "test"
                            }).
                            when('/test', {
                                templateUrl: 'partials/alert-demo.html',
                                controller: 'AlertDemoCtrl',
                                title: 'test'
                            }).
                            when('/index', {
                                templateUrl: 'partials/welcome.html',
                                controller: 'WelcomeCtrl'
                            }).
                            otherwise({
                                redirectTo: '/index'
                            });
                    }]);
