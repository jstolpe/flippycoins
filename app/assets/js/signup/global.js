/**
 * Handle login page javascript functionality.
 *
 * @author Justin Stolpe
 */
var flippyCoinsSignUp = {
	/**
	 * Initialize javascript for login functionality.
	 *
	 * @return void
	 */
	initialize : function () {
		$( '.button-signup' ).on( 'click', function() { // signup on button click
			flippyCoinsSignUp.signUserUp();
		} );

		$( '.input-default' ).on( 'keyup', function( e ) { // on keyup for any input
			if ( e.keyCode == 13 ) { // sign up on enter key was pressed
				flippyCoinsSignUp.signUserUp();
			}
		} );
	},

	/**
	 * Sign user up.
	 *
	 * @return void
	 */
	signUserUp : function () {
		// show loader on the page
		flippyCoinsLoader.showLoader();

		if ( flippyCoinsForm.isFormValid( 'signup_form' ) ) { // front end checks passed
			// server ajax call
		} else { // front end checks failed hide loader
			flippyCoinsLoader.hideLoader();
		}
	}
}

$( function() { // doc is ready
	// initialize sign up javascript
	flippyCoinsSignUp.initialize();
} );