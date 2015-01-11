angular.module('portfolio')
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {
        url: "/",
        templateUrl: "views/main.html",
        data: {
            pageTitle: 'About'
        }
    })
    .state('education', {
        url: "/education",
        templateUrl: "views/education.html",
        data: {
            pageTitle: 'Education'
        }
    })
    .state('projects', {
        url: "/projects",
        templateUrl: "views/projects.html",
        data: {
            pageTitle: 'Projects'
        }
    })
    .state('resume', {
        url: "/resume",
        templateUrl: "views/resume.html",
        data: {
            pageTitle: 'Resume'
        }
    })
    .state('contact', {
        url: "/contact",
        templateUrl: "views/contact.html",
        data: {
            pageTitle: 'Contact'
        }
    })
})
.run(function($rootScope, $state) {
    $rootScope.$state = $state;
});
