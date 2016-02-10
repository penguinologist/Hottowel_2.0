(function() {
    'use strict';

    /**
     * This is the simpler and more logical approach that John_papa overwrote.
     * Essentially you're able to list as many states as you want, but instead
     * of having them in array-format to iterate through them as such, you can call
     * upon them by name or, if you wanted to, you could still get all of them in
     * an array-format by calling upon $state.get(), which will return all the states
     * in an array. Having multiple states in this format is a cleaner
     * approach, however it doesn't allow for much reusable code (aside from copy-paste)
     */
    angular
        .module('app.core')
        .config(function ($stateProvider) {
            $stateProvider
                .state('404', {
                    url: '/404',
                    views: {
                        'main': {
                            controller: 'CoreController',
                            templateUrl: 'app/core/404.html',
                            controllerAs: 'vm'
                        }
                    },
                    data: {
                        pageTitle: '404'
                    }
                });
        });
})();
