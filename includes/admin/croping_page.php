<?php

class wpda_gall_crop_page{
	
	public $notification;
	
	public $image_manipulatioan;
	
	private $uploaded_image_html='';
	
	private $options;
	
	function __construct(){
		$this->options=array(
			"wpda_gall_croping_imagae_thumbnail_width"=>array(
				"title"=>"Images thumbnails cropping width",
				"description"=>"Type here the images thumbnail width, after you set this parameter the image thumbnails width will be cropped",
				"value"=>get_option("wpda_gall_croping_imagae_thumbnail_width","200"),
				"function_name"=>"simple_input",
				"type"=>"number",
				"small_text"=>"(Px)",						
			),
			/*
			"wpda_gall_croping_imagae_thumbnail_height"=>array(
				"title"=>"Images thumbnails cropping height",
				"description"=>"Type here the images thumbnail height, after you set  this parameter the image thumbnails height will be cropped",
				"value"=>get_option("wpda_gall_croping_imagae_thumbnail_height","40"),
				"function_name"=>"simple_input",
				"type"=>"number",
				"small_text"=>"(Px)",						
			),
			*/
			"wpda_gall_croping_imagae_max_width"=>array(
				"title"=>"Images cropping max width",
				"description"=>"Type images cropping max width",
				"value"=>get_option("wpda_gall_croping_imagae_max_width","1920"),
				"function_name"=>"simple_input",
				"type"=>"number",
				"small_text"=>"(Px)",						
			),
			"wpda_gall_croping_imagae_max_height"=>array(
				"title"=>"Images cropping max height",
				"description"=>"Type images cropping max height",
				"value"=>get_option("wpda_gall_croping_imagae_max_height","1080"),
				"function_name"=>"simple_input",
				"type"=>"number",
				"small_text"=>"(Px)",						
			),
		);
	}
	public function controller(){
		$this->save_changes();
		$this->page_view();
	}
	private function save_changes(){
		if(isset($_POST['wpda_gall_crop_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_crop_page_nonce_name'],'wpda_gall_crop_page_nonce_action') ){
			foreach($this->options as $key =>$value){ 				
				if(isset($_POST[$key])){
					$curent_value=$_POST[$key];						
					$this->options[$key]['value']=$curent_value;
				}
				update_option($key,$curent_value);
				$this->notification['type']='updated';
				$this->notification['text']='Croping parametrs changed';				
			}
		}
	}
	private function genererete_notification(){ 
		if(count($this->notification)>1){
		?>
        <div id="setting-error-settings_updated" class="<?php echo $this->notification['type'] ?> settings-error notice is-dismissible"> 
			<p><strong><?php echo $this->notification['text']; ?></strong></p>
         	<button type="button" class="notice-dismiss">
            	<span class="screen-reader-text">Dismiss this notice.</span>
            </button>
        </div>
		<?php
		}
	}
	
	private function page_view(){
		?>       
		<div class="wpda_gall_head">
			<h2>Gallery Images Croping Settings</h2>
			<?php $this->genererete_notification(); ?>

		</div> 
		
		<div class="wpda_gall_content">
			<form method="post" id="wpda_gall_pupup_form">
				<div class="wpda_gall_main_settings_div">

					<table>
						<?php 
						foreach($this->options as $key =>$value){ 						
							$args=array(
								"name"=>$key,
							);
							$args=array_merge($args,$value);
							$function_name=$value['function_name'];
							wpdevart_gallery_library::$function_name($args);						
						}

						?>
						<tr><td style="text-align:right" colspan="2"><input class="button button-primary" type="submit" value="Save changes"></td></tr>
					</table>
				</div>
				 <?php wp_nonce_field('wpda_gall_crop_page_nonce_action','wpda_gall_crop_page_nonce_name'); ?>
			</form>
		</div> 		
		<?php
	}
}