(function() {
    'use strict';

    /**
     * This definition of the dashboard module follows the more classic approach
     * to angular module configuration declarations. Each state will be listed
     * individually, and they can be called upon in array-format using the
     * $state.get() function.
     */
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
                });

        });
})();
