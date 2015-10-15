/**
 * Keyboard accessible hover emulation. For more information, see:
 *
 * https://github.com/patricknelson/jquery-tabhover
 *
 * Released under the MIT license
 *
 * @author	Patrick Nelson, pat@catchyour.com
 * @since	2015-10-14
 */

(function($) {
	'use strict';

	$.fn.tabhover = function(options) {

		var config = $.extend({
			children: null,
			hoverClass: "hover"
		}, options);

		return this.each(function() {
			var $self = $(this);
			var $hoverChildren = $(this).find("li");

			$self.on("keydown keyup", function(event) {
				// When tabbing, look for the currently focused child under this parent, if any.
				if (event.which == 9) {
					// Using a timeout in case this is a "keydown" even upon exiting a hover parent. We'll want to wait
					// until focus is actually removed to run this so that we can ensure that the hover class is removed.
					setTimeout(function() {
						var $focused = $self.find(":focus");
						var $child = $focused.closest(config.children);

						$hoverChildren.removeClass(config.hoverClass);
						if ($child.length) {
							$child.addClass(config.hoverClass);
						}

					}, 10);
				}
			});

		});

	};

}(jQuery));
