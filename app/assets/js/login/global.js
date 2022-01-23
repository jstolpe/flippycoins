/**
 * Handle login page javascript functionality.
 *
 * @author Justin Stolpe
 */
var flippyCoinsLogIn = {
	/**
	 * Initialize javascript for login functionality.
	 *
	 * @return void
	 */
	initialize : function () {
		$( '.login-button' ).on( 'click', function() { // log in button clicked log user in
			flippyCoinsLogIn.logUserIn();
		} );

		$( '.input-default' ).on( 'keyup', function( e ) { // on keyup for any input
			if ( e.keyCode == 13 ) { // enter key was pressed log user in
				flippyCoinsLogIn.logUserIn();
			}
		} );
	},

	/**
	 * Log user up.
	 *
	 * @return void
	 */
	logUserIn : function () {
		// show loader on the page
		flippyCoinsLoader.showLoader();

		if ( flippyCoinsForm.isFormValid( 'login_form' ) ) { // front end checks passed
			// ajax call to server
		} else { // front end checks failed hide loader
			flippyCoinsLoader.hideLoader();
		}
	}
}

$( function() { // doc is ready
	// initialize log in javascript
	flippyCoinsLogIn.initialize();
} );