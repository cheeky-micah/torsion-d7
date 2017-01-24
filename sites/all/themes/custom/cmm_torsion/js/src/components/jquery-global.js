/*
 * @file    : jquery-global.js
 * @purpose : Drupal is adding jQuery to the page, so define 'jquery' using the global variable
 */
define('jquery', [], function() {
  'use strict';
  
  return jQuery;
});
