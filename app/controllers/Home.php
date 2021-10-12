<?php
	/**
	 * Home page.
	 *
	 * Handle functionality for home page.
	 *
	 * @package		flippycoins/app
	 * @subpackage	controllers
	 * @author		Justin Stolpe
	 * @link		https://github.com/jstolpe/flippycoins
	 * @version     1.0.0
	 */
	class Home extends Controller {
		/**
		 * Index function.
		 *
		 * Load the home view.
		 *
		 * @return void
		 */
		public function index() {
			// html page title
			$data['html_title'] = 'Flippy Coins';

			// html head content
			$data['html_head'] = $this->Model->getViewHtml( 'home/html_head', $data );

			// html body content
			$data['html_body'] = $this->Model->getViewHtml( 'home/html_body', $data );
			
			// load view
			$this->loadView( 'templates/default/html', $data );
		}
	}
?>