/**
 * Handle javascript functionality for the form validation.
 *
 * @author Justin Stolpe
 */
var flippyCoinsForm = {
	/**
	 * Default class for input fields.
	 *
	 * @var string
	 */
	inputDefaultClass : 'input-default',

	/**
	 * Default class for input fields with error.
	 *
	 * @var string
	 */
	inputDefaultErrorClass : 'input-default-error',

	/**
	 * Password min length.
	 *
	 * @var integer
	 */
	passwordMinLength : 8,

	/**
	 * Check for and verify inputs
	 *
	 * @param string form id
	 * @return boolean
	 */
	isFormValid : function( formId ) {
		// flag for if we are should submit data to server or not
		var formIsValid = true;

		$( '#' + formId + ' input' ).each( function() { // loop over from inputs
			// validate the input
			var validInput = flippyCoinsForm.validateInput( this );

			if ( !validInput ) { // input is not valid so we are not good to go
				formIsValid = false;
			}
		} );

		// return if the form is valid or not
		return formIsValid;
	},

	/**
	 * Check the confirm password against the original password.
	 *
	 * @param string confirmPassword
	 * @return boolean
	 */
	isValidateConfirmPassword : function ( confirmPassword, password ) {
		if ( '' == confirmPassword || '' == password || confirmPassword != password ) { // blank or does not equal
			return false;
		} else { // confirm password matches
			return true;
		}
	},

	/**
	 * Check the email to see if it is a valid email address format.
	 *
	 * @param string email
	 * @return boolean
	 */
	isValidateEmail : function ( email ) {
		// regex for email validation
   		var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   		// return true/false from regex test
	    return regex.test( String( email ).toLowerCase() );
	},

	/**
	 * Check a name to see if it is valid.
	 *
	 * @param string name
	 * @return boolean
	 */
	isValidateName : function ( name ) {
		// return false if invalid name
		return '' == name ? false : true;
	},

	/**
	 * Check a password to see if it is valid.
	 *
	 * @param string password
	 * @return boolean
	 */
	isValidatePassword : function ( password ) {
		// return false if password is not valid
		return flippyCoinsForm.passwordMinLength > password.length ? false : true;
	},

	/**
	 * Check a username to see if it is valid.
	 *
	 * @param string name
	 * @return boolean
	 */
	isValidateUserName : function ( userName ) {
		// regex for username validation
   		var regex = /^[0-9a-zA-Z]{4,}$/;

   		// return true/false from regex test
	    return regex.test( String( userName ).toLowerCase() );
	},

	/**
	 * Update an input depending if it is valid or not.
	 *
	 * @param object  inputElement
	 * @param boolean isValidInput
	 * @return boolean
	 */
	updateInputOnvalidation : function ( inputElement, isValidInput ) {
		if ( isValidInput ) { // input is valid
			// remove input error class
			$( inputElement ).removeClass( flippyCoinsForm.inputDefaultErrorClass );

			// add default input class
			$( inputElement ).addClass( flippyCoinsForm.inputDefaultClass );

			// hide any error message container
			$( inputElement ).siblings().hide();
		} else { // invalid input
			// remove default input class
			$( inputElement ).removeClass( flippyCoinsForm.inputDefaultClass );

			// add the error class to the input
			$( inputElement ).addClass( flippyCoinsForm.inputDefaultErrorClass );

			// show any error message for the input
			$( inputElement ).siblings().show();
		}
	},

	/**
	 * Check and verify if an input has a valid value.
	 *
	 * @param object inputElement
	 * @return boolean
	 */
	validateInput : function ( inputElement ) {
		// assume true
		var isValidInput = true;

		if ( 'email' == $( inputElement ).data( 'type' ) ) { // checking an email input
			isValidInput = flippyCoinsForm.isValidateEmail( $( inputElement ).val() );
		} else if ( 'username' == $( inputElement ).data( 'type' ) ) { // checking a username
			isValidInput = flippyCoinsForm.isValidateUserName( $( inputElement ).val() );
		} else if ( 'name' == $( inputElement ).data( 'type' ) ) { // checking a name input
			isValidInput = flippyCoinsForm.isValidateName( $( inputElement ).val() );
		} else if ( 'password' == $( inputElement ).data( 'type' ) ) { // checking password input
			isValidInput = flippyCoinsForm.isValidatePassword( $( inputElement ).val() );
		} else if ( 'confirm_password' == $( inputElement ).data( 'type' ) ) { // checking confirm password input
			isValidInput = flippyCoinsForm.isValidateConfirmPassword( $( inputElement ).val(), $( '[name="password"]' ).val() );
		} else if ( 'file' == $( inputElement ).data( 'type' ) ) { // checking file input
			isValidInput = flippyCoinsForm.isValidateFile( inputElement );
		}

		// update input from validation
		flippyCoinsForm.updateInputOnvalidation( inputElement, isValidInput );

		// return true/false for if the input is valid or not
		return isValidInput;
	}
}