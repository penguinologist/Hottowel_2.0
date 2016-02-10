(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state','$rootScope', 'logger'];
    /* @ngInject */
    function SidebarController($state,$rootScope,logger) {
        var vm = this;



        var states = $state.get();
        vm.isCurrent = isCurrent;
        logger.success(states.length,null);
        activate();

        function activate() {
            //getNavRoutes();
            vm.navRoutes = states;
            //TODO what are these routes and how do I call them?!

            $rootScope.title=  states[0].data||'undefined';
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    }
})();




