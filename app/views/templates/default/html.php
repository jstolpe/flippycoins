<!DOCTYPE html>
<html>
	<head>
		<!-- html title -->
		<title>
			<?php echo $html_title ;?>
		</title>

		<!-- meta -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

		<!-- css from outside -->
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css?family=Coda" rel="stylesheet">

		<!-- template css -->
		<link href="<?php echo BASE_URL_ASSETS; ?>css/templates/default/global.css" rel="stylesheet" type="text/css">

		<!-- loader css -->
		<link href="<?php echo BASE_URL_ASSETS; ?>css/loader/global.css" rel="stylesheet" type="text/css">

		<!-- jquery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

		<!-- template js -->
		<script src="<?php echo BASE_URL_ASSETS; ?>js/templates/default/global.js"></script>

		<!-- loader js -->
		<script src="<?php echo BASE_URL_ASSETS; ?>js/loader/global.js"></script>

		<!-- form js -->
		<script src="<?php echo BASE_URL_ASSETS; ?>js/form/global.js"></script>

		<script type="text/javascript">
			// define mobile break for js
			var jsMobileBreakpoint = '1200';

			$( function() {
				flippyCoins.initialize( { // initalize global javascript
					baseUrl: '<?php echo HREF_BASE_URL; ?>',
					isMobile: $( window ).width() < jsMobileBreakpoint ? true : false
				} );

				// initialize loader for use
				flippyCoinsLoader.initialize();
			} );
		</script>

		<!-- html page specific head html -->
		<?php echo $html_head; ?>
	</head>
	<body>
		<!-- main content html -->
		<div class="body-container">
			<?php echo $html_body; ?>
		</div>
	</body>
</html>