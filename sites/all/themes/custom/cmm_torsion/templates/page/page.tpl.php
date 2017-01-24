<?php
/**
 * @file    : page.tpl.php
 * @purpoe  : basic page template
 * @see     : html.tpl.php for <html> wrapper and <head>
 */
?>
<div class="off-canvas-wrapper">
  <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>

    <div class="off-canvas position-left" id="offCanvas" data-off-canvas>
      <button type="button" class="mobile-nav-close" data-toggle="offCanvas">Close Menu</button>
      <?php if (!empty($page['primary_menu'])): ?>
        <?php print render($page['primary_menu']); ?>
      <?php endif; ?>
    </div>

    <div class="off-canvas-content" data-off-canvas-content>
      <div class="container">
        <div class="page page-internal">

          <!-- site header -->
          <header class="site-header clearfix" role="banner">
            <div class="row">
              <div class="columns">
                <button type="button" class="mobile-nav-open" data-toggle="offCanvas">Close Menu</button>
                <?php if (!empty($page['header'])): ?>
                  <?php print render($page['header']); ?>
                <?php endif; ?>
              </div>
            </div>
          </header>
          <!-- // site header -->
          
          <?php if (!empty($page['primary_menu'])): ?>
            <!-- primary menu -->
            <section class="primary-menu clearfix">
              <div class="row">
                <div class="columns">
                  <!-- primary menu placed here by intention -->
                </div>
              </div>
            </section>
            <!-- // primary menu -->
          <?php endif; ?>

          <?php if (!empty($page['page_top'])): ?>
            <!-- top page content -->
            <section class="page-top">
              <div class="row">
                <div class="columns">
                  <?php print render($page['page_top']); ?>
                </div>
              </div>
            </section>
            <!-- // top page content -->
          <?php endif; ?>

          <!-- main wrapper -->
          <div id="main-wrapper">
            <div id="main" class="clearfix">

              <?php if ($messages): ?>
                <!-- messages -->
                <section class="messages">
                  <div class="row">
                    <div class="columns">
                      <?php if ($messages): print $messages; endif; ?>
                    </div>
                  </div>
                </section>
                <!-- // messages -->
              <?php endif; ?>

              <?php if (!empty($page['help'])): ?>
                <!-- help -->
                <section class="help">
                  <div class="row">
                    <div class="columns">
                      <?php print render($page['help']); ?>
                    </div>
                  </div>
                </section>
                <!-- // help -->
              <?php endif; ?>

              <?php if (!empty($page['breadcrumb'])): ?>
                <!-- breadcrumb -->
                <section class="breadcrumb">
                  <div class="row">
                    <div class="columns">
                      <?php print render($page['breadcrumb']); ?>
                    </div>
                  </div>
                </section>
                <!-- breadcrumb -->
              <?php endif; ?>

              <?php if (!empty($page['featured'])): ?>
                <!-- featured -->
                <section class="featured">
                  <div class="row">
                    <div class="columns">
                      <?php print render($page['featured']); ?>
                    </div>
                  </div>
                </section>
                <!-- featured -->
              <?php endif; ?>
              
                <!-- main content -->
                <?php
                  if (!empty($page['sidebar_first'])
                  && !empty($page['sidebar_second'])) {
                ?>
                  <section class="main three-col">
                <?php
                  } else if ((!empty($page['sidebar_first']) && empty($page['sidebar_second']))) {
                ?>
                  <section class="main two-col active-first">
                <?php
                  } else if ((!empty($page['sidebar_second']) && empty($page['sidebar_first']))) {
                ?>
                  <section class="main two-col active-second">
                <?php } else { ?>
                  <section class="main one-col">
                <?php } ?>
                
                  <div class="row">
                    <?php if (!empty($page['sidebar_first'])): ?>
                      <aside role="complementary" class="sidebar-first columns sidebar">
                        <?php print render($page['sidebar_first']); ?>
                      </aside>
                    <?php endif; ?>

                    <?php if (!empty($page['content'])): ?>
                      <section class="main-column columns">
                        <?php if ($title): ?>
                          <?php print render($title_prefix); ?>
                          <h1 id="page-title" class="title"><?php print $title; ?></h1>
                          <?php print render($title_suffix); ?>
                        <?php endif; ?>

                        <?php if (!empty($tabs)): ?>
                          <?php print render($tabs); ?>
                          <?php if (!empty($tabs2)): print render($tabs2); endif; ?>
                        <?php endif; ?>

                        <?php if ($action_links): ?>
                          <ul class="action-links">
                            <?php print render($action_links); ?>
                          </ul>
                        <?php endif; ?>

                        <?php print render($page['content']); ?>
                        <?php print $feed_icons ?>
                      </section>
                    <?php endif; ?>

                    <?php if (!empty($page['sidebar_second'])): ?>
                      <aside role="complementary" class="sidebar-second columns sidebar">
                        <?php print render($page['sidebar_second']); ?>
                      </aside>
                    <?php endif; ?>

                  </div>
                </section>
                <!-- // main content -->

              </div>
            </div>
            <!-- // main wrapper -->

            <?php if (!empty($page['page_bottom'])): ?>
              <!-- bottom page content -->
              <section class="page-bottom">
                <div class="row">
                  <div class="columns">
                    <?php print render($page['page_bottom']); ?>
                  </div>
                </div>
              </section>
              <!-- // bottom page content -->
            <?php endif; ?>

            <?php if (!empty($page['footer'])): ?>
              <!-- site footer -->
              <footer class="site-footer">
                <div class="row">
                  <div class="columns">
                    <?php print render($page['footer']); ?>
                  </div>
                </div>
              </footer>
              <!-- // site footer -->
            <?php endif; ?>

        </div>
      </div>
    </div>

  </div>
</div>

