<?php
	/**
	 * Log in.
	 *
	 * Handle log in functionality.
	 *
	 * @package		flippycoins/php
	 * @subpackage	controllers
	 * @author		Justin Stolpe
	 * @link		https://github.com/jstolpe/flippycoins
	 */
	class Login extends Controller {
		/**
		 * Index function.
		 *
		 * Load the login view.
		 *
		 * @return void
		 */
		public function index() {
			// html page title
			$data['html_title'] = 'Flippy Coins | Login';

			// html head content
			$data['html_head'] = $this->Model->getViewHtml( 'login/html_head', $data );

			// html body content
			$data['html_body'] = $this->Model->getViewHtml( 'login/html_body', $data );
			
			// load view
			$this->loadView( 'templates/default/html', $data );
		}
	}
?>