/*
 * @file    : foundation.js
 * @purpose : foundation component, intializes foundation core
 */
define([
  'jquery',
  'intention',
  'viewportsize'
], function ($, Intention, viewportsize) {
  'use strict';

  /*
   * constructor
   */
  var InitFoundation = function() {
    this.init();
  }; // constructor


  /*
   * @method  : init
   * @purpose : intialise foundation
   */
  InitFoundation.prototype.init = function() {
    var
      self = this;
    $(document).foundation();
  }; // init()


  /*
   * on document ready
   */
  $(function () {
    var
      initFoundation = new InitFoundation();
  }); // dom readt
});
