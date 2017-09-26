(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($window,$state) {

     
       if (!  $window.sessionStorage.user){
         $state.go('login');
       }
    }
})();
