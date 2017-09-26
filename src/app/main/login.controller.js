(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($window,$http,$state) {
       var main = this;

       main.user = {};

       main.login = function () {
         $http.post('http://192.168.86.137:8080/api/login', {
             username: main.user.username,
             password: main.user.password
         }).then(function (response) {

             $window.sessionStorage.token = response.data.access_token;
             $window.sessionStorage.user = response.data.username;
             $state.go('home');
         });
     };
    }
})();
