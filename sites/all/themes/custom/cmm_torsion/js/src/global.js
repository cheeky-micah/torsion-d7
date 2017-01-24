/**
 * function to help elminate the requirejs caching
 */
var __getrev = function () {
  'use strict';
  var rev = document.getElementById('requirejs').getAttribute('data-rev');
  return rev || (new Date()).getTime();
};


/**
 * require config
 */
requirejs.config({
  paths: {
    // vendor
    'intention': '../vendor/intention',
    'underscore': '../vendor/underscore-min',
    'viewportsize': '../vendor/viewportSize-min',
    'app': 'app', // foundation core JS compiles to this

    // custom
    'jquery': 'components/jquery-global', // so we can use $ in require
    'foundation': 'components/foundation', // load foundation separately
    'intentcontext': 'components/intentcontext', // load our contexts for intentionJS
    'intentinit': 'components/intentinit', // initialize intention separately
    'homepage': 'components/homepage', // homepage related JS
    'primary-menu': 'components/primary-menu', // primaru menu component
  },
  shim: {
  },
  map: {
  }
});
requirejs.config({
  urlArgs: 'rev=' + __getrev(),
});


/**
 * common JS loaded on all pages
 */
require([
  'jquery',
  'underscore',
  'intentcontext',
  'app',
  'primary-menu'
  ], function ($, _, IntentContext, app) {
  'use strict';

   // DOM ready
  $(function() {

    /**
     * put custom globaly loaded JS here, if it can be compiled into a module
     * please use require and separate into a different JS file
     */

    // js loaded only on homepage
    if ($('body').hasClass('front')) {
      require(['homepage']);
    }


    /*
     * loaded js for foundatoin and intention
     * (these must be left alone, and loaded last)
     */
    require(['foundation']);
    require(['intentinit']);
  }); // DOM ready
});
