<?php
/*
* Plugin Name: Gallery - Wpdevart Gallery
* Plugin URI: http://wpdevart.com/wordpress-gallery-plugin
* Author URI: http://wpdevart.com
* Description: Gallery - WpDevArt Gallery plugin is an useful tool that will help you to create Galleries and Albums. There are a lot of nice Gallery views and useful options that you can use.
* Version: 1.1.3
* Author: wpdevart
* License: GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
*/

class wpdevart_gallery{
	
	private $version;
	
	private $databese;	
	
	public $options;
	
	public $admin_menu;	
	
	function __construct(){		
		$this->version     = 1.0;
		// define constatnt. all files in wpdevart use this constants
		$this->define_constants();
		// include files 
		$this->include_files();
		// call filters for plugin
		$this->call_base_filters();
		// crate admin panel	
		$this->databese = new wpdevart_gallery_databese();
		$this->create_admin();
		$this->front_end();
		
		
	}	
	private function create_admin(){
		// create admin menu		
		$this->admin_menu = new wpdevar_gallery_admin_panel();		
	}
	public function front_end(){
		// create front end	
		$wpda_gall_fornt_end = new wpdevar_gallery_frontend();	
	}
	
	public function registr_requeried_scripts(){	
		/*registr scripts*/	
		wp_register_style('FontAwesome',wpdevart_gallery_plugin_url.'includes/admin/css/font-awesome.min.css');
		/*front end scripts styles*/
		wp_register_style('wpda_gallery_style',wpdevart_gallery_plugin_url.'includes/frontend/css/front_end.css');
		wp_register_script('wpda_gall_gallery_class_prototype',wpdevart_gallery_plugin_url.'includes/frontend/js/GALLERIA_CLASS_PROTOTYPE.js');
		wp_register_script('wpda_gall_popup',wpdevart_gallery_plugin_url.'includes/frontend/js/popup.js',array(),'1.0',true);
	}
	
	private function call_base_filters(){
		/* some admin hooks*/
		
		register_activation_hook( __FILE__, array($this,'install_databese') );
		add_action('init',  array($this,'registr_requeried_scripts') );
	}
  	private function define_constants(){
		 define('wpdevart_gallery_plugin_url',trailingslashit( plugins_url('', __FILE__ ) ));
		 define('wpdevart_gallery_plugin_path',trailingslashit( plugin_dir_path( __FILE__ ) ));
	}
	private function include_files(){
		require_once(wpdevart_gallery_plugin_path.'includes/install_databese.php');
		require_once(wpdevart_gallery_plugin_path.'includes/admin/popup_settings.php'); // for geting popup parametrs		
		require_once(wpdevart_gallery_plugin_path.'includes/admin/gallery_theme.php'); // for geting popup parametrs		
		require_once(wpdevart_gallery_plugin_path.'includes/wpdevart_library.php'); 
		require_once(wpdevart_gallery_plugin_path.'includes/admin/admin.php'); 	
		require_once(wpdevart_gallery_plugin_path.'includes/frontend/front_end.php');
	}	
	public function install_databese(){
		// new class for installing databese
		$this->databese->install_gallery_table();
		$this->databese->install_theme_tabel();
	}
}
$wpdevart_gallery = new wpdevart_gallery();
?>