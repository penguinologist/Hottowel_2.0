
/*
 function handleRoutingErrors() {
 // Route cancellation:
 // On routing error, go to the dashboard.
 // Provide an exit clause if it tries to do it twice.
 $rootScope.$on('$stateChangeError',
 function(event, toState, toParams, fromState, fromParams, error) {
 if (handlingStateChangeError) {
 return;
 }
 stateCounts.errors++;
 handlingStateChangeError = true;
 var destination = (toState &&
 (toState.title || toState.name || toState.loadedTemplateUrl)) ||
 'unknown target';
 var msg = 'Error routing to ' + destination + '. ' +
 (error.data || '') + '. <br/>' + (error.statusText || '') +
 ': ' + (error.status || '');
 logger.warning(msg, [toState]);
 $location.path('/');
 }
 );
 }

 function init() {
 handleRoutingErrors();
 updateDocTitle();
 }

 function getStates() { return $state.get(); }

 function updateDocTitle() {
 $rootScope.$on('$stateChangeSuccess',
 function(event, toState, toParams, fromState, fromParams) {
 stateCounts.changes++;
 handlingStateChangeError = false;
 var title = config.docTitle + ' ' + (toState.title || '');
 $rootScope.title = title; // data bind to <title>
 }
 );
 }

 */
(function() {
    'use strict';

    angular
        .module('app.core')
        .config(function ($stateProvider) {
            $stateProvider
                .state('404', {
                    url: '/404',

                    views: {
                        "main": {
                            controller: 'CoreController',
                            templateUrl: 'app/core/404.html',
                            controllerAs: 'vm'
                        }
                    },
                    data: {
                        pageTitle: '404'
                    }
                })
                /*
                 state: '404',
                 config: {
                 url: '/404',
                 templateUrl: 'app/core/404.html',
                 title: '404'
                 }
                 */
        });
})();





    /*

    angular
        .module('app.core')
        .run(appRun);

    //* @ngInject *
    function appRun(routerHelper) {
        var otherwise = '/404';

        //TODO
        routerHelper.configureStates(getStates(), otherwise);

        /*states.forEach(function(state) {
            state.config.resolve =
                angular.extend(state.config.resolve || {}, config.resolveAlways);
            $stateProvider.state(state.state, state.config);
        });
        if (otherwisePath && !hasOtherwise) {
            hasOtherwise = true;
            $urlRouterProvider.otherwise(otherwisePath);
        }*

    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404'
                }
            }
        ];
    }
})();

*/
