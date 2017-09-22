(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($window,$http) {
       var main = this;
       main.authenticated = false;
       main.user = {};

       main.login = function () {
         $http.post('http://192.168.86.137:8080/api/login', {
             username: main.user.username,
             password: main.user.password
         }).then(function (response) {
             main.authenticated = true;
             $window.sessionStorage.token = response.data.access_token;
         });
     };
    }
})();
