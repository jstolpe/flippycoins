<?php
	/**
	 * Style guide.
	 *
	 * Handle functionality for style guide.
	 *
	 * @package		flippycoins/app
	 * @subpackage	controllers
	 * @author		Justin Stolpe
	 * @link		https://github.com/jstolpe/flippycoins
	 * @version     1.0.0
	 */
	class Styleguide extends Controller {
		/**
		 * Index function.
		 *
		 * Load the style guide view.
		 *
		 * @return void
		 */
		public function index() {
			// html page title
			$data['html_title'] = 'Style Guide Flippy Coins';

			// html head content
			$data['html_head'] = $this->Model->getViewHtml( 'styleguide/html_head', $data );

			// html body content
			$data['html_body'] = $this->Model->getViewHtml( 'styleguide/html_body', $data );
			
			// load view
			$this->loadView( 'templates/default/html', $data );
		}
	}
?>