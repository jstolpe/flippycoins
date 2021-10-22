/**
 * Handle javascript functionality for the loader.
 *
 * @author Justin Stolpe
 */
var flippyCoinsLoader = {
	/**
	 * Hide the overlay and loader on screen.
	 *
	 * @return void
	 */
	hideLoader : function() {
		$( '.loader-overlay' ).hide();
		$( '.loader-container' ).hide();
	},

	/**
	 * Display the overlay and loader on screen.
	 *
	 * @return void
	 */
	showLoader : function() {
		$( '.loader-overlay' ).show();
		$( '.loader-container' ).show();
	},

	/**
	 * Initialize loader javascript functionality.
	 *
	 * @return void
	 */
	initialize : function() {
		var loaderHtml = '<div class="loader-overlay">' + 

		'</div>' + 
		'<div class="loader-container">' + 
			'<div class="loader">' + 

			'</div>' + 
		'</div>';

		$( 'body' ).append( loaderHtml );
	}
}