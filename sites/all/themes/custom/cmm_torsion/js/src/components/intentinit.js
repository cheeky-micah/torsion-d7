/*
 * @file    : intentinit.js
 * @purpose : intentinit module - initialize intention
 */
define([
  'jquery',
  'intention',
  'intentcontext',
  'viewportsize'
], function ($, Intention, IntentContext, viewportsize) {
  'use strict';
  
  /*
   * constructor
   */
  var InitIntent = function() {
    this.init();
  }; // InitIntent constructor


  /*
   * @method  : init
   * @purpose : initialize intentions context
   */
  InitIntent.prototype.init = function() {
    var
      self = this;

    IntentContext.horizontal_axis.respond();
  }; // init()


  /*
   * on dom ready
   */
  $(function () {
    IntentContext.intent.elements(document); 
    
    var
      initIntent = new InitIntent();
  }); // dom ready
});
