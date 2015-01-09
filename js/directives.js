function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                var title = 'Michael Crowther | Portfolio';
                if (toState.data && toState.data.pageTitle)
                    title = 'Michael Crowther | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
}

function sideNavigation() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.metisMenu();
        }
    };
}

function iboxTools($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/ibox_tools.html',
        controller: function($scope, $element) {
            $scope.showhide = function() {
                var ibox = $element.closest('div.ibox');
                var icon = $element.find('i:first');
                var content = ibox.find('div.ibox-content');

                content.slideToggle(200);
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                $timeout(function() {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            },
            $scope.closebox = function() {
                var ibox = $element.closest('div.ibox');
                ibox.remove();
            }
        }
    }
}

function minimalizaSidebar($timeout) {
    return {
        restrict: 'A',
        template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
        controller: function($scope, $element) {
            $scope.minimalize = function() {
                $("body").toggleClass("mini-navbar");
                if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                    $('#side-menu').hide();
                    $timeout(function() {
                        $('#side-menu').fadeIn(500);
                    }, 100);
                } else $('#side-menu').removeAttr('style');
            }
        }
    }
}

angular.module('portfolio')
.directive('pageTitle', pageTitle)
.directive('sideNavigation', sideNavigation)
.directive('iboxTools', iboxTools)
.directive('minimalizaSidebar', minimalizaSidebar)
