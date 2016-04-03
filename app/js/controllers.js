'use strict';

/* Controllers */

var ctrls = angular.module('ctrls', []);

ctrls.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.title = "test";
}]);

ctrls.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };
}]);

ctrls.controller('AlertDemoCtrl', ['$scope', function($scope){
    $scope.alerts = [
        {type: "danger", msg: "Oh snap! Change a few things up and try submitting agagin!"},
        {type: "success", msg: "Well down! You successfully read this important aleart message."}
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: "Another alert!"});
    }

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    }
}]);

ctrls.controller('WelcomeCtrl', ['$scope', 'DataProxy', function($scope, DataProxy) {
    $scope.active = 0;
    DataProxy.get({act:"carousel"}, function(carousel){
        $scope.slides = carousel.slides;
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.whatido = carousel.whatido;
    });
}]);
