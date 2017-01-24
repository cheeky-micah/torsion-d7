<?php

/**
 * Include theme specific functions for CMM theme
 */
include ('theme-functions.php');


/**
 * Implements template_preprocess_html().
 */
function cmm_torsion_preprocess_html(&$vars) {
}


/**
 * Implements template_preprocess_node.
 */
function cmm_torsion_preprocess_node(&$vars) {
}


/**
 * Implements template_preprocess_page.
 *
 * Add convenience variables and template suggestions.
 */
function cmm_torsion_preprocess_page(&$vars) {
  // Add page--node_type.tpl.php suggestions.
  if (!empty($vars['node'])) {
    $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
  }
}


/**
 * Implements template_preprocess_block.
 *
 * Add classes to blocks from their titles.
 */
function cmm_torsion_preprocess_block(&$vars) {
  $vars['classes_array'][] = drupal_html_class($vars['block']->subject);
}
