<?php
	
	class Extension_Enhanced_Selects extends Extension {
		protected static $fields = array();

		public static $params = null;
				
		public function getSubscribedDelegates() {
			return array(
				array(
					'page'		=> '/backend/',
					'delegate'	=> 'InitaliseAdminPageHead',
					'callback'	=> 'initaliseAdminPageHead'
				)
			);
		}
		
		public function initaliseAdminPageHead($context) {
			$page = Administration::instance()->Page;
			$page->addScriptToHead(URL . '/extensions/enhanced_selects/lib/select2/js/select2.full.min.js');
			$page->addScriptToHead(URL . '/extensions/enhanced_selects/assets/enhanced_selects.js');
			$page->addStylesheetToHead(URL . '/extensions/enhanced_selects/lib/select2/css/select2.min.css', 'screen');
			$page->addStylesheetToHead(URL . '/extensions/enhanced_selects/assets/enhanced_selects.css', 'screen');
		}
	}
	
?>
