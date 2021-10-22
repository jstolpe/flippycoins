$( function() { // doc is ready
	$( '.loader-test-button' ).on( 'click', function() { // loader test element on click
		// show the loader
		flippyCoinsLoader.showLoader();

		setTimeout( function() { // hide the loader after 2 sec
			flippyCoinsLoader.hideLoader();
		}, 1000 );
	} );
} );