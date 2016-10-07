var app = angular.module('myApp', ['ngRoute', 'ngMaterial'])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
    }]).config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')      //TODO pick a theme
            .primaryPalette('blue-grey')
            .accentPalette('light-blue');
    });

//allows us to access the chrome API from within angular
angular.module('myApp').constant('chrome', window.chrome);
