/*
 * @file    : primary-menu.js
 * @purpose : JS for primary menu component
 */
define([
  'jquery',
  'intentcontext'
], function ($, IntentContext) {
  'use strict';

  /*
   * constructor
   */
  var PrimaryMenu = function() {
    var
      self = this;
    
    self.$elm = $('#block-system-main-menu');
    $('body').once('primaryMenu').each(function() {
      self.init();
    });
  }; // PrimaryMenu constructor


  /*
   * @method  : init
   * @purpose : setup intention attributes
   */
  PrimaryMenu.prototype.init = function() {
    var
      self = this;

    self.$elm.attr('intent', '');
    self.$elm.attr('in-xxlarge-prepend', '.primary-menu .row .columns');
    self.$elm.attr('in-xlarge-prepend', '.primary-menu .row .columns');
    self.$elm.attr('in-large-prepend', '.primary-menu .row .columns');
    self.$elm.attr('in-mediumportrait-append', '.off-canvas');
    self.$elm.attr('in-medium-append', '.off-canvas');
    self.$elm.attr('in-smallportrait-append', '.off-canvas');
    self.$elm.attr('in-small-append', '.off-canvas');

    var setupMobileMenu = function() {
      if ($('[data-dropdown-menu]').length > 0) {
        $('[data-dropdown-menu]').foundation('destroy');
      }

      self.$elm.find('div > ul.menu').removeClass('dropdown').attr('data-drilldown', '');
      var drdown = new Foundation.Drilldown($('[data-drilldown]'));
    };

    var setupDesktopMenu = function() {
      if ($('[data-drilldown]').length > 0) {
        $('#offCanvas').foundation('close');
        $('[data-drilldown]').foundation('destroy');
        self.$elm.find('div > ul.menu').removeAttr('data-drilldown');
      }

      self.$elm.find('div > ul.menu').addClass('dropdown').attr('data-dropdown-menu', '');
      var ddown = new Foundation.DropdownMenu($('[data-dropdown-menu]'));
    };

    IntentContext.intent.on('large', function() {
      setupDesktopMenu();
    }); // IntentContext.intent.on('large')

    IntentContext.intent.on('xlarge', function() {
      setupDesktopMenu();
    }); // IntentContext.intent.on('xlarge')

    IntentContext.intent.on('xxlarge', function() {
      setupDesktopMenu();
    }); // IntentContext.intent.on('xxlarge')

    IntentContext.intent.on('mediumportrait', function() {
      setupMobileMenu();
    }); // IntentContext.intent.on('mediumportrait')

    IntentContext.intent.on('medium', function() {
      setupMobileMenu();
    }); // IntentContext.intent.on('medium')

    IntentContext.intent.on('smallportrait', function() {
      setupMobileMenu();
    }); // IntentContext.intent.on('smallportrait')

    IntentContext.intent.on('small', function() {
      setupMobileMenu();
    }); // IntentContext.intent.on('small')

  }; // init()


  /*
   * on document ready
   */
  $(function () {
    var
      primaryMenu = new PrimaryMenu();
  }); // dom ready
});
