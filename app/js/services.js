'use strict';

/* Services */

var servs = angular.module('servs', ['ngResource']);

servs.factory('Phone', ['$resource', function($resource){
    return $resource('phones/:phoneId.json', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
}]);


servs.factory('DataProxy', ['$resource', function($resource){
    // support http,https,etc.
    return $resource(cdn_path + 'data/:act.json', {}, {
        query: {method: 'GET', params:{act:'common'}, isArray:false}
    });
}]);
