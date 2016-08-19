(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/templates/home.html',

            })

        $stateProvider
            .state('add-event', {
                url: '/add-event',
                templateUrl: 'templates/add-event.html',
                controller: 'EventCtrl as event'
            });
    }

    angular
        .module('eventApp', ['ui.router'])
        .config(config);
})();

//angular.module('eventApp', ['ngRoute'])
//    .config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
//
//        $routeProvider.when('/add-event', {
//            templateUrl: 'templates/add-event.html',
//            controller: 'formCtrl'
//        })
//            .otherwise({redirectTo:'/'});
//
//        $locationProvider.html5Mode(true);
//
//    }]);
