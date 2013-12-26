/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        $.sharer.options.networks = ["facebook", "twitter","googleplus", "pinterest"];
        $("#share-wrap").sharer();
    });

}(jQuery));