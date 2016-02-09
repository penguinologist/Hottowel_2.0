//(function() {
//    'use strict';
//
//    angular
//        .module('app.dashboard')
//        .run(appRun);
//
//
//
//    appRun.$inject = ['routerHelper'];
//    /* @ngInject */
//    function appRun(routerHelper) {
//        routerHelper.configureStates(getStates());
//    }
//
//    function getStates() {
//        return [
//            {
//                state: 'dashboard',
//                config: {
//                    url: '/',
//                    templateUrl: 'app/dashboard/dashboard.html',
//                    controller: 'DashboardController',
//                    controllerAs: 'vm',
//                    title: 'dashboard',
//                    settings: {
//                        nav: 1,
//                        content: '<i class="fa fa-dashboard"></i> Dashboard'
//                    }
//                }
//            }
//        ];
//    }
//})();

(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(function ($stateProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/',

                    controller: 'DashboardController',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controllerAs: 'vm',

                    data: {
                        name: 'dashboard',
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                })

        });
})();
