require('imports?this=>window!foundation-sites/js/vendor/modernizr');
require('foundation-sites/js/vendor/placeholder');

require('foundation-sites/js/foundation/foundation');
require('foundation-sites/js/foundation/foundation.abide');
require('foundation-sites/js/foundation/foundation.accordion');
require('foundation-sites/js/foundation/foundation.alert');
require('foundation-sites/js/foundation/foundation.clearing');
require('foundation-sites/js/foundation/foundation.dropdown');
require('foundation-sites/js/foundation/foundation.interchange');
//require('foundation-sites/js/foundation/foundation.joyride');
//require('foundation-sites/js/foundation/foundation.magellan');
require('foundation-sites/js/foundation/foundation.offcanvas');
//require('foundation-sites/js/foundation/foundation.orbit');
require('foundation-sites/js/foundation/foundation.reveal');
require('foundation-sites/js/foundation/foundation.tab');
require('foundation-sites/js/foundation/foundation.tooltip');
require('foundation-sites/js/foundation/foundation.topbar');
//require('foundation-sites/js/foundation/foundation.equalizer');

var document = $(document);
document.ready(function() {
  document.foundation();
});