(function() {
    'use strict';

    /**
     * This module call is actually based primarily on what John_papa had already
     * created. It relies on the view controller's control over a view to modify
     * and set its configuration.
     */
    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    /**
     * By passing in parameters, we can call upon the ShellController function.
     * @type {string[]}
     */
    ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
    /* @ngInject */
    function ShellController($rootScope, $timeout, config, logger) {
        //Set the viewmanager to the current view.
        var vm = this;
        //tell the user we're busy...
        vm.busyMessage = 'Please wait ...';
        //set the variable busy as true
        vm.isBusy = true;
        //show the splash screen on the main window
        $rootScope.showSplash = true;
        //start labeling the navigation bar. We've got the title, the text, and a link.
        vm.navline = {
            title: config.appTitle,
            text: 'Created by John Papa, edited by Jeroen Goossens',
            link: 'http://github.com/penguinologist/hottowel_2.0'
        };

        //call upon the activation of the controller. Up until now, we've only
        // set values and only the rootScope has actually done something (it
        // has shown the splash screen). Now it's time to check if we're finished
        // so that we can continue to the main screen
        activate();

        //upon this call, it logs a success and calls upon the hideSplash function.
        function activate() {
            logger.success(config.appTitle + ' loaded!',null);
            hideSplash();

        }

        //This function forces a 1 second delay to see the splash, after which it
        // returns and we can see the main screen.
        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                $rootScope.showSplash = false;
            }, 1000);
        }
    }
})();
