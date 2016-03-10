jQuery(document).ready(function() {

	// Default options to pass to Select2, see Select2 docs for more
	// If defining custom options for 'selectors' below ensure that your options object
	// contains keys for both 'single' and 'multiple' to match each type of select box
	var defaultOptions = {
		single: {
			theme: "classic",
			width: "100%",
			placeholder: "Choose one…",
			allowClear: true,
			minimumResultsForSearch: 10
		},
		multiple: {
			theme: "classic",
			width: "100%",
			placeholder: "…",
			closeOnSelect: false, // keep select open, makes choosing multiple options easier
			minimumResultsForSearch: 1
		}
	}

	// Parent container selectors, and any specific options
	var selectors = {
		"#system-preferences .settings": defaultOptions,
		"#blueprints-pages .settings": defaultOptions,
		"#blueprints-datasources .settings": defaultOptions,
		"#blueprints-events .settings": defaultOptions,
		"#extension-global-resource-loader-preferences .settings": defaultOptions,
		"#publish #contents": defaultOptions,
	}

	// Any selects underneath (children) of these selectors will be blacklisted / ignored
	var blacklist = [
		".apply",
		".duplicator",
		".field-subsectionmanager",
		".field-status"
	]

	// Mark each blacklisted select with an ignore class
	blacklist.forEach(function(sel) {
		jQuery(sel).find('select').addClass('enhanced-ignore')
	})

	// Any select element under a Parent container selection, that hasn't been blacklisted gets enhanced...
	for (var sel in selectors) {
		if (selectors.hasOwnProperty(sel)) {
			jQuery(sel).find("select").not('.enhanced-ignore').each(function() {
				// pass different options to multiple select boxes
				if (jQuery(this).attr('multiple')) {
					jQuery(this).select2(selectors[sel].multiple)
				}
				else {
					jQuery(this).select2(selectors[sel].single)
				}
			})
		}
	}
})
