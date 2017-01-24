/*
 * @file    : homepage.js
 * @purpose : JS for homepage
 */
define([
  'jquery',
  'intentcontext'
], function ($, IntentContext) {
  'use strict';

  /*
   * constructor
   */
  var Homepage = function() {
    var
      self = this;
    
    self.$elm = $('html').find('body');
    $('body').once('homepage').each(function() {
      self.init();
    });
  }; // Homepage constructor


  /*
   * @method  : init
   * @purpose : setup intention attributes and other initialization
   */
  Homepage.prototype.init = function() {
    var
      self = this;

    IntentContext.intent.on('large', function() {
    }); // IntentContext.intent.on('large')

    IntentContext.intent.on('xlarge', function() {
    }); // IntentContext.intent.on('xlarge')

    IntentContext.intent.on('xxlarge', function() {
    }); // IntentContext.intent.on('xxlarge')

    IntentContext.intent.on('mediumportrait', function() {
    }); // IntentContext.intent.on('mediumportrait')

    IntentContext.intent.on('medium', function() {
    }); // IntentContext.intent.on('medium')

    IntentContext.intent.on('smallportrait', function() {
    }); // IntentContext.intent.on('smallportrait')

    IntentContext.intent.on('small', function() {
    }); // IntentContext.intent.on('small')
  }; // init()


  /*
   * on document ready
   */
  $(function () {
    var
      homepage = new Homepage();
  }); // dom ready
});
