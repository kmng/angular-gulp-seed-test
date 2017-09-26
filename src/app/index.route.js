(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            }).state('login', {
                url: '/login',
                templateUrl: 'app/main/loginpage.html',
                controller: 'LoginController',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
