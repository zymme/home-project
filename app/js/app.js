'use strict';

var homeProjectApp = angular.module('homeProjectApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/projects', {

            templateUrl: 'templates/Projects.html',
            controller: 'ProjectController'
        });

        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        });

        $routeProvider.otherwise( {

            redirectTo: '/home'
        });


        $routeProvider.when('/view/:param1/:param2', {

            templateUrl: 'templates/view.html',
            controller: 'ViewController'

        });

        $routeProvider.when('/view', {
            templateUrl: 'templates/view.html',
            controller: 'ViewController'
        })

    })
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('MyInterceptor');
    }]);
