function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/main");

    $stateProvider
    .state('main', {
        url: "/main",
        templateUrl: "views/main.html",
        data: {
            pageTitle: 'Example view'
        }
    })
    .state('minor', {
        url: "/minor",
        templateUrl: "views/minor.html",
        data: {
            pageTitle: 'Example view'
        }
    })
}

angular.module('portfolio')
.config(config)
.run(function($rootScope, $state) {
    $rootScope.$state = $state;
});
