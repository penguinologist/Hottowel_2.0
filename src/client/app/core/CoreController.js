/**
 * Created by jeroen on 2/9/16.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    /**
     * We inject parameters into the CoreController to force an instance of it.
     * @type {string[]}
     */
    CoreController.$inject = [];
    /* @ngInject */
    function CoreController() {

        //This would be the location where more functionality of
        // the CoreController can be created.
    }
})();
