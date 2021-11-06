<?php
	/**
	 * Sign Up.
	 *
	 * Handle sign up functionality.
	 *
	 * @package		flippycoins/app/controllers
	 * @subpackage	controllers
	 * @author		Justin Stolpe
	 * @link		https://github.com/jstolpe/flippycoins
	 */
	class Signup extends Controller {
		/**
		 * Index function.
		 *
		 * Load the signup view.
		 *
		 * @return void
		 */
		public function index() {
			// html page title
			$data['html_title'] = 'Flippy Coins | Sign Up';

			// html head content
			$data['html_head'] = $this->Model->getViewHtml( 'signup/html_head', $data );

			// html body content
			$data['html_body'] = $this->Model->getViewHtml( 'signup/html_body', $data );
			
			// load view
			$this->loadView( 'templates/default/html', $data );
		}
	}
?>