'use strict';

var modules =  ['ngAnimate',
                'ngRoute',
                'ngResume.services',
                'ngResume.directives',
                'formGeneratorModule',
                'MessageCenter',
                'DragModule'];

var ngResume = angular.module('ng-resume-app', modules);

/* Routing */
ngResume.config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: '/views/home.html',
        controller: homeCtrl
    }).
    when('/about', {
        templateUrl: '/views/about.html',
        controller: aboutCtrl
    }).
    when('/contact', {
        templateUrl: '/views/contact.html',
        controller: contactCtrl
    }).
    when('/resume', {
        templateUrl: '/views/resume.html',
        controller: resumeCtrl
    }).
    when('/resume-builder', {
        templateUrl: '/views/resume-builder.html',
        controller: resumeBuilderCtrl
    }).
    otherwise({
      redirectTo: '/home'
  });
    $locationProvider.html5Mode(true);
}]);