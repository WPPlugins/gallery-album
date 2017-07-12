<?php

class wpda_gall_gallery_page{
	
	public $notification;
	
	public $image_manipulatioan;
	
	private $uploaded_image_html='';
	
	function __construct(){
		$this->image_manipulatioan = new wpda_gall_image_manupulation();
	}
	
	public function controller(){	
		$this->save_album_images_name_description();	
		$this->insert_gallery_into_database();
		$this->insert_album_into_database();
		$this->update_gallery_name_in_database();
		$this->update_album_name_in_database();
		$this->delete_album();
		$this->delete_gallery();
		$this->update_image_info();
		$this->remove_image();
		$this->remove_images();		
		$this->insert_image_from_media_library();
		$this->insert_image_from_standart_uploader();
		$this->page_view();			
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
        
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">       
        <div class="wpda_gall_load_trash"></div>
        <div id="wpdevart_gallery_page_content">
			<div class="wpdevart_page_head">
    			<h2>WpDevArt Gallery Page</h2>
                <?php $this->genererete_notification(); ?>
    		</div>
            <div class="uploader_and_image_editor" id="uploader_and_image_editor">
           		<div id="wpda_gall_welcome_tab" class="tab active">
					<center>
               			<h1>Welcome to WpDevArt Gallery</h1>					
               		</center>
               		 <ol>
                        <li class="wpda_gall_descriptin">Here is short user manual for creating galleries</li>                
                        <li class="wpda_gall_descriptin">1.How to create Gallery:</li>
                        <li class="wpda_gall_descriptin">	Click on "Create gallery", then type the Gallery name and click on "Add new gallery" button on the right side.
                            The new gallery will be added to the tree.</li>
                        <li class="wpda_gall_descriptin">2.How to create Album:</li>
                        <li class="wpda_gall_descriptin">    Click the "+" button on the left side of created gallery, then you will see "Create Album" option. Click on "Create Album" and type the new Album name, then press "Create Album" button on the right side.
                            The new Album will be added to the tree.</li>
                        <li class="wpda_gall_descriptin">3.Uploading Images:</li>
                        <li class="wpda_gall_descriptin">	Click the "+" button on the left side of created Album. After that you will see "New" option.
                            Click on "New" button and you will see the upload options in the right side.
                            You can use the WpDevArt uploader for uploading new images or choose images from WordPress media library. 
                            Just choose(from WordPress media Library) or upload images(using Wpdevart Uploader) and click on Insert to album button from bottom.
                            The downloaded images in these two loaders can be found in the Wpdevart library. You can select some of them to insert albums or delete them from all albums and the Wpdevart library.
                            If you want to edit the Album images, then click on the square in left side of Album name, if you want to edit Album name or delete the Album, then click on the Album name.</li>	
                        <li class="wpda_gall_descriptin">4.Delete, Moving, Rearrange Images, Albums, Galleries using drag and drop feature.</li>									
                        <li class="wpda_gall_descriptin">	a.Drag an image button of tree and drop any other image button(inversion).</li>
                        <li class="wpda_gall_descriptin">	b.Click some album button.Images of this album will appear on the right side of the tree.
                              Drag the image or album and drop in window from the right side of tree or in the album  tree.</li>		
                        <li class="wpda_gall_descriptin">	c.Click some image button.Image of this button will appear on the right side of the tree.
                                Drag this photo and drop in any album or image of tree or a basket of trash (if you want to delete).</li>		
                        <li class="wpda_gall_descriptin">	d.Drag an image,album,gallery of tree and drop it into the basket of trash (if you want to delete).</li>
                        <li class="wpda_gall_descriptin">5.Edit Galleries and Album names, Edit Image details, Removing Images.</li>
                        <li class="wpda_gall_descriptin">	a.You can edit Galleries or Albums names easily, just click on Gallery or Album name and you will see the edit field, type the new name and save it by clicking on save button from right side.</li>
                        <li class="wpda_gall_descriptin">	b.Click on the tree album. On the right side of the tree there will be images of this album. Then click on the image button(left side) for editing image. Now you can edit the name and description of image and save it.</li>
                        <li class="wpda_gall_descriptin">	c.Click on the album of tree. On the right side of the tree there are images of this album. Select the flag in the images and click the "Remove images" button to remove it.</li>                     
					</ol>
                </div>
            	<div id="wpda_gall_add_new_image_tab" class="tab">
               		<div class="wpda_gall_add_image_tab_links">
						<ul>
							<li  class="active">Wpdevart Uploader</li>
							<li>WordPress media Library</li>
							<li>Wpdevart media Library</li>						
						</ul>
                    </div>
                    <div class="wpda_gall_add_image_tab_contents">
						<div class="standart_uploader active">
                       		<form id="wpdevart_standart_uploader" action="" method="post" enctype="multipart/form-data">
                       			<input type="hidden" name="gallery_name" value="">
                       			<input type="hidden" name="album_name" value="">                  
                       			<input type="file" name="fileToUpload[]" id="wpda_gall_stadndart_files_upload" multiple style="display: inline;">
                       			<?php echo $this->uploaded_image_html; ?>
                       			<input name="insert_from_standat_uploader" type="submit" class="button button-primary wpda_gall_isnert_images" value="Insert to album">
                       		</form>
                       	</div>
                        <div class="media_library_uploader centrr">
							<form id="from_media_library" method="post" action="">
								<input type="hidden" name="gallery_name" value="">
                       			<input type="hidden" name="album_name" value="">
                                <input name="remove_from_upload_images" type="submit" class="button button-primary wpda_gall_isnert_images wpda_gall_wpdevat_remove" value="Remove images"> 
                                <input name="insert_from_upload_images" type="submit" class="button button-primary wpda_gall_isnert_images" value="Insert to album"> 
                       			<input name="insert_from_meia_library" type="submit" class="button button-primary wpda_gall_isnert_images" value="Insert to album">
							</form>
						</div>
                    </div>
                </div>
                <div id="wpda_gall_edit_album_images_tab" class="tab centrr">			
					<form id="wpda_gall_edit_album_form" method="post" action="">
						<h2>Edit album "<span></span>" 
                        	<div class="wpda_gall_float_right">
                            <b id="wpda_gall_album_caunt"></b>
                                <a href="javascript:wpda_gallery_edit_upload.redact_album_list_view();"><i class="fa wpda_gall_font_size_24">&#xf03a;</i></a> 
                                <a href="javascript:wpda_gallery_edit_upload.redact_album_square_view();"><i class="fa wpda_gall_font_size_24">&#xf00a;</i></a>
                            </div>
                        </h2>                                                      
						<input type="hidden" name="gallery_name" value="">
						<input type="hidden" name="album_name" value="">
                        <input name="save_album_images_name_description" type="submit" class="button button-primary wpda_gall_album_save" value="Save Changes">  
						<input name="remov_album_images" type="submit" class="button button-primary wpda_gall_isnert_from_media1" value="Remove images">
					</form>
                </div>
                <div id="wpda_gall_edit_image_tab" class="tab">
                	<form id="wpda_gall_edit_image_form" method="post" action="">
						<div class="show_image_conteiner">
							<img id="edited_image" class="wpda_gall_edited_image" title="loading image please wait">
						</div>
                   		<div class="image_info_conteiner">
                   			<h2>Image Information</h2>
							<div class="image_not_editable_information">
								<div  class="wpda_gall_image_filname"><span>File name:</span><span>File Name</span></div>
								<div  class="wpda_gall_image_filesize"><span>File size:</span><span>File size</span></div>
								<div  class="wpda_gall_image_filedemisions"><span>File Demisions:</span><span>File Demisions</span></div>
								<div  class="wpda_gall_image_filetype"><span>File type:</span><span>File type</span></div>
								<div  class="wpda_gall_image_uploadeddate"><span>Updated date:</span><span>Updated date</span></div>
								
							</div>
							<hr>
							<table>
								<tr class="wpda_edit_image_line">
									<td class="edit_image_label">Image url:</td><td class="edit_image_input"><input name="wpda_gall_edit_image_url" type="text" class="regular-text" value="text value" readonly></td>
								</tr>
								<tr class="wpda_edit_image_line">
									<td class="edit_image_label">Image name:</td><td class="edit_image_input"><input name="wpda_gall_edit_image_name" type="text" class="regular-text" value="text value"></td>
								</tr>
								<tr class="wpda_edit_image_line">
									<td class="edit_image_label">Image description:</td>
									<td class="edit_image_input"><textarea name="wpda_gall_edit_image_description" class="regular-text" rows="5" name="text"></textarea></td>
								</tr>
							</table>
							<input type="hidden" name="wpda_gall_image_id" value="">
							<input name="delete_image" type="submit" class="button wpda_gall_remove_image" value=""></input> 
							<input name="edit_image" type="submit" class="button button-primary wpda_gall_isnert_from_media" value="Save Changes">
                            
                            <a href="javascript:{localStorage.setItem('wpda_gall_gallery_active_tab_index','3');wpda_gallery_edit_upload.restart_tree();}" class="button button-primary wpda_gall_go_to_album">
                            	<i class="fa wpda_gall_font_size_24">&#xf112;</i>
                            </a>                            
                            
						</div>
                    </form>
                </div>
            </div>
            <?php wp_nonce_field('wpda_gall_gallery_page_nonce_action','wpda_gall_gallery_page_nonce_name'); ?>
		</div>              
        <?php
		$this->php_to_js_variable();
	}
			
	private function php_to_js_variable(){
		global $wpdb;
		$table_gallery = wpdevart_gallery_databese::$table_names['gallery'];
		$table_images = wpdevart_gallery_databese::$table_names['images'];
		$tree='';	
		$gallerys = $wpdb->get_col( "SELECT DISTINCT `gallery` FROM ".$table_gallery." WHERE `album` IS NULL ORDER BY `order_id` ASC ;");
		$galler_counter=0;
		$album_counter=0;
		foreach($gallerys as $key=>$value){
			$tree[$galler_counter]['name']=$value;
			$curent_gallery_albums=$wpdb->get_col( "SELECT DISTINCT `album` FROM ".$table_gallery." WHERE `gallery` = '$value' And `album` IS NOT NULL And `image_name` IS NULL ORDER BY `order_id` ASC ;" );		
				foreach($curent_gallery_albums as $alb_key=>$alb_value){
					//$images = $wpdb->get_results( "SELECT `id`,`image_w`, `image_h`, `url`,`image_type`,`image_size`, `image_name`, `time`, `image_description`,`order_id` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = '$value' And `album` = '$alb_value' And `url` != '' ORDER BY `order_id` ASC ;" ,ARRAY_A);					
					$images = $wpdb->get_results( "SELECT ".$table_gallery.".id,".$table_images.".image_w, ".$table_images.".image_h, ".$table_images.".url,".$table_images.".image_type,".$table_images.".image_size, ".$table_gallery.".image_name, ".$table_gallery.".time, ".$table_gallery.".image_description,".$table_gallery.".order_id,".$table_gallery.".published FROM ".$table_gallery." INNER JOIN ".$table_images." ON ".$table_gallery.".img_id = ".$table_images.".id WHERE ".$table_gallery.".gallery = '$value' And ".$table_gallery.".album = '$alb_value' And ".$table_gallery.".image_name IS NOT NULL ORDER BY ".$table_gallery.".order_id ASC ;" ,ARRAY_A);
					$tree[$galler_counter][$album_counter]=$images;
					$tree[$galler_counter][$album_counter]['name']=$alb_value;
					$album_counter++;
				}
			$galler_counter++;
			$album_counter=0;
            //Wpdevart media library
			$upload_images = $wpdb->get_results( "SELECT id, url FROM ".$table_images." ;");//20-05-2017
		}
		?><script> 
			var wpda_gall_admin_ajax_url="<?php  echo admin_url( 'admin-ajax.php' ); ?>";
			var wpda_gall_content_url="<?php  echo   $this->image_manipulatioan->urls['original']; ?>";
			var wpda_gall_content_url_width ="<?php  echo   $this->image_manipulatioan->urls['width']; ?>";
			var wpda_gall_content_url_height ="<?php  echo   $this->image_manipulatioan->urls['height']; ?>";
			var wpda_gall_admin_url ="<?php  echo   wpdevart_gallery_plugin_url; ?>";
		<?php		
		$output_text = "wpda_gallery_tree['tree_info'] = " . json_encode($tree ,JSON_FORCE_OBJECT). ";";

		//get wordpress media library pictures information
		$query_images_args = array(
			'post_type'      => 'attachment',
			'post_mime_type' => 'image',
			'post_status'    => 'inherit',
			'posts_per_page' => - 1,
		);
		$query_images = new WP_Query( $query_images_args );
		$counter=0;
		$abstract_media_library_images=array();
		foreach($query_images->posts as $key=>$value){
			$abstract_media_library_images[$counter]['id']=$value->ID;
			$abstract_media_library_images[$counter]['thumb_url']=wp_get_attachment_thumb_url( $value->ID );
			$counter++;
			
		}
		$counter=0;
		$upload_media_library_images=array();
		if(!isset($upload_images)){
			$upload_images=array();
		}
		foreach($upload_images as $key=>$value){
			$upload_media_library_images[$counter]['id']=$value->id;
			$upload_media_library_images[$counter]['thumb_url']= $this->image_manipulatioan->urls['width'].$value->url ;
			$counter++;
			
		}		
		$output_text .= "wpda_gallery_edit_upload['medi_attachments'] = " . json_encode($abstract_media_library_images ,JSON_FORCE_OBJECT). ";";
		$output_text .= "wpda_gallery_edit_upload['upload_images'] = " . json_encode($upload_media_library_images ,JSON_FORCE_OBJECT). ";";
		echo $output_text;
		?>
		</script>		
		<?php
	}


/*########################################### SAVE AND UPDATE DATABASE ###########################################*/
/*########################################### SAVE AND UPDATE DATABASE ###########################################*/
/*########################################### SAVE AND UPDATE DATABASE ###########################################*/
	private function insert_gallery_into_database(){
		global $wpdb;	
		if(isset($_POST['wpda_gall_tree_gallery_form_name_input']) && isset($_POST['wpda_gall_tree_gallery_form_submit_button'])){
			$name=$_POST['wpda_gall_tree_gallery_form_name_input'];
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){
				if($name!=''){
					$exsisting_name=$wpdb->get_var($wpdb->prepare("SELECT `gallery` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = %s ORDER BY `id` ASC;",$name));				
					if($exsisting_name!=$name){
						$max_ord=$wpdb->get_var( "SELECT MAX(order_id) FROM ".wpdevart_gallery_databese::$table_names['gallery'].";" )+1;
						$wpdb->insert(
							wpdevart_gallery_databese::$table_names['gallery'], 
							array( 								
								'gallery'           => $name,
								'time'              => current_time( 'mysql' ),
								'order_id'           	=> $max_ord
							) ,
							array('%s','%s','%d')
						);	
						$this->notification['type']='updated';
						$this->notification['text']='Gallery "'.$name.'" successfully created';
						
					}else{
						//error this gallery name exsists
						$this->notification['type']='error';
						$this->notification['text']='Gallery Name must by unique. "'.$name.'" name already exist';					
					}
				}else{
					//error name not null	
					$this->notification['type']='error';
					$this->notification['text']='Gallery Name is Not null. Please type any text for gallery name';				
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}		
	}
	private function insert_album_into_database(){
		global $wpdb;
		if(isset($_POST['wpda_gall_tree_gallery_form_name_input']) && isset($_POST['wpda_gall_tree_album_form_name_input']) && isset($_POST['wpda_gall_tree_album_form_submit_button'])){
			$name_gallery=$_POST['wpda_gall_tree_gallery_form_name_input'];
			$name_album=$_POST['wpda_gall_tree_album_form_name_input'];
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){
				if($name_gallery!='' && $name_album!=''){
					$exsisting_name=$wpdb->get_var($wpdb->prepare("SELECT `album` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` =%s and album=%s ORDER BY `id` ASC ;",$name_gallery,$name_album));
					if($exsisting_name!=$name_album){
						$wpdb->insert(
							wpdevart_gallery_databese::$table_names['gallery'], 
							array( 								 
								'gallery'           => $name_gallery,
								'album'           	=> $name_album,
								'time'              => current_time( 'mysql' )
							) ,
							array('%s','%s','%s')
						);	
						$this->notification['type']='updated';
						$this->notification['text']='Album "'.$name_album.'" successfully created';
					}else{
						//error this gallery name exsists
						$this->notification['type']='error';
						$this->notification['text']='Album Name must by unique. "'.$name_album.'" name already exist';					
					}
				}else{
					//error name not null	
					$this->notification['type']='error';
					$this->notification['text']='Album Name is Not null. Please type any text for album name';				
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
	}
	private function update_gallery_name_in_database(){
		global $wpdb;	
		if(isset($_POST['wpda_gall_tree_gallery_form_name_input']) && isset($_POST['wpda_gall_old_name'])  && isset($_POST['wpda_gall_update_gallery_name'])){			
			$gallery_old_name=$_POST['wpda_gall_old_name'];
			$gallery_new_name=$_POST['wpda_gall_tree_gallery_form_name_input'];
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){
				if($gallery_new_name!='' && $gallery_old_name!=''){
					$exsisting_name=$wpdb->get_var($wpdb->prepare("SELECT `gallery` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = %s ORDER BY `id` ASC;",$gallery_new_name));				
					if($exsisting_name!=$gallery_new_name){
						$wpdb->update(
							wpdevart_gallery_databese::$table_names['gallery'], 
							array( 								
								'gallery'           => $gallery_new_name,
								'time'              => current_time( 'mysql' )
							) ,
							array( 'gallery'  =>$gallery_old_name, ),
							array('%s','%s'),
							array('%s')
						);	
						$this->notification['type']='updated';
						$this->notification['text']='Gallery "'.$gallery_old_name.'" successfully updated to "'.$gallery_new_name.'"';
						
					}else{
						//error this gallery name exsists
						$this->notification['type']='error';
						$this->notification['text']='Gallery Name must by unique. "'.$gallery_new_name.'" name already exist';					
					}
				}else{
					//error name not null	
					$this->notification['type']='error';
					$this->notification['text']='Gallery Name is Not null. Please type any text for gallery name';				
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}		
	}
	private function update_album_name_in_database(){
		global $wpdb;	
		if(isset($_POST['wpda_gall_tree_album_form_name_input']) && isset($_POST['wpda_gall_update_album_name'])  && isset($_POST['wpda_gall_gallery_old_name'])  && isset($_POST['wpda_gall_album_old_name'])){			
			$gallery_name=$_POST['wpda_gall_gallery_old_name'];
			$album_old_name=$_POST['wpda_gall_album_old_name'];
			$album_new_name=$_POST['wpda_gall_tree_album_form_name_input'];
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){
				if($gallery_name!='' && $album_old_name!='' && $album_new_name!=''){
					$exsisting_name=$wpdb->get_var($wpdb->prepare("SELECT `album` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = %s and `album`=%s ORDER BY `id` ASC;",$gallery_name,$album_new_name));				
					if($exsisting_name!=$album_new_name){
						$wpdb->update(
							wpdevart_gallery_databese::$table_names['gallery'], 
							array( 								
								'album'           	=> $album_new_name,
								'time'              => current_time( 'mysql' )
							) ,
							array( 'gallery'  =>$gallery_name,'album'  =>$album_old_name, ),
							array('%s','%s'),
							array('%s')
						);	
						$this->notification['type']='updated';
						$this->notification['text']='Album "'.$album_old_name.'" successfully updated to "'.$album_new_name.'"';
						
					}else{
						//error this gallery name exsists
						$this->notification['type']='error';
						$this->notification['text']='Album Name must by unique. "'.$album_new_name.'" name already exist';					
					}
				}else{
					//error name not null	
					$this->notification['type']='error';
					$this->notification['text']='Album Name is Not null. Please type any text for album name';				
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
	}
	private function delete_gallery(){
		global $wpdb;	
		if(isset($_POST['wpda_gall_tree_gallery_form_name_input']) && isset($_POST['wpda_gall_old_name'])  && isset($_POST['wpda_gall_delete_gallery'])){			
			$gallery_old_name=$_POST['wpda_gall_old_name'];
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){									
				$file_name=$wpdb->get_col( "SELECT `url` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = '$gallery_old_name' ;" );				
				$file_name_length = count($file_name);					
				for ($x = 0; $x < $file_name_length; $x++) {						
					$this->image_manipulatioan->remove_image_from_url($file_name[$x]);						
				}
				$wpdb->delete( wpdevart_gallery_databese::$table_names['gallery'], array( 'gallery' => $gallery_old_name ),array('%s') );	
				$this->notification['type']='updated';
				$this->notification['text']='Gallery "'.$gallery_old_name.'" successfully deleted';				
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
	}
	private function delete_album(){
		global $wpdb;	
		if(isset($_POST['wpda_gall_tree_album_form_name_input']) && isset($_POST['wpda_gall_delete_album'])  && isset($_POST['wpda_gall_gallery_old_name'])  && isset($_POST['wpda_gall_album_old_name'])){			
			$album_name=$_POST['wpda_gall_album_old_name'];
			$gallery_name=$_POST['wpda_gall_gallery_old_name'];
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){	

				$file_name=$wpdb->get_col( "SELECT `url` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = '$gallery_name' And `album` = '$album_name' ;" );
				
				$file_name_length = count($file_name);					
				for ($x = 0; $x < $file_name_length; $x++) {						
					$this->image_manipulatioan->remove_image_from_url($file_name[$x]);						
				}
				$wpdb->delete( wpdevart_gallery_databese::$table_names['gallery'], array( 'gallery' => $gallery_name,'album' =>$album_name ));
				$this->notification['type']='updated';
				$this->notification['text']='Album "'.$album_name.'" successfully deleted';				
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}		
	}
	/*
	private function insert_image_from_media_library(){	
		if(isset($_POST["insert_from_meia_library"])) {
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){	
				if(isset($_POST['medi_library_attachment'])) {
					if(isset($_POST['gallery_name']) && $_POST['gallery_name'] && isset($_POST['album_name']) && $_POST['album_name']){
						$gallery_name	=$_POST['gallery_name'];
						$album_name		=$_POST['album_name'];						
						foreach ($_POST['medi_library_attachment'] as $value) {
							$this->image_manipulatioan->insert_from_media_library($value,$gallery_name,$album_name);
						}
					}else{
						$this->notification['type']='error';
						$this->notification['text']='"album name" or "gallery name" not detected';
					}
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
	}
	
	*/
	//20-05-2017
	private function insert_image_from_media_library(){
		//from Wordpress media library	
		if(isset($_POST["insert_from_meia_library"])) {
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){	
				if(isset($_POST['medi_library_attachment'])) {
					if(isset($_POST['gallery_name']) && $_POST['gallery_name'] && isset($_POST['album_name']) && $_POST['album_name']){
						$gallery_name	=$_POST['gallery_name'];
						$album_name		=$_POST['album_name'];						
						foreach ($_POST['medi_library_attachment'] as $value) {
							$this->image_manipulatioan->insert_from_media_library($value,$gallery_name,$album_name);
						}
					}else{
						$this->notification['type']='error';
						$this->notification['text']='"album name" or "gallery name" not detected';
					}
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}		
		//from Wpdevart media library
		if(isset($_POST["insert_from_upload_images"])) {
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){	
				if(isset($_POST['medi_library_attachment'])) {
					if(isset($_POST['gallery_name']) && $_POST['gallery_name'] && isset($_POST['album_name']) && $_POST['album_name']){
						global $wpdb;
						$table_gallery = wpdevart_gallery_databese::$table_names['gallery'];
						$table_images = wpdevart_gallery_databese::$table_names['images'];						
						$gallery_name	=$_POST['gallery_name'];
						$album_name		=$_POST['album_name'];
				
						$upload_images = $wpdb->get_results( "SELECT id, url FROM ".$table_images." ;");//20-05-2017																
						$xxxxx=array();
						foreach($upload_images as $key=>$value){
							$xxxxx[$value->id]['image_name']= substr($value->url,0,strrpos($value->url,"."));							
						}						

						$max_ord=$wpdb->get_var( "SELECT MAX(order_id) FROM ".wpdevart_gallery_databese::$table_names['gallery'].";" ) + 1;						
						foreach ($_POST['medi_library_attachment'] as $value) {   
							$wpdb->insert( 
								$table_gallery, 
								array( 
									'time'              => current_time( 'mysql' ), 
									'gallery'           => $gallery_name, 
									'album'             => $album_name, 
									'image_description' => '',
									'image_name' 		=> $xxxxx[$value]['image_name'],
									'order_id'       	=> $max_ord,
									'img_id' 		    => $value,
									'published'         => 1,                    
								),array(
									'%s',
									'%s',
									'%s',
									'%s',
									'%s',
									'%d',
									'%d',
									'%d'
								)
							);																		
							$max_ord++;	
						}
					}else{
						$this->notification['type']='error';
						$this->notification['text']='"album name" or "gallery name" not detected';
					}
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
		// 22-05-2017       remove from Wpdevart media library
		if(isset($_POST["remove_from_upload_images"])) {
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){	
				if(isset($_POST['medi_library_attachment'])) {					
					global $wpdb;
					$yyyy = $_POST['medi_library_attachment'];
					$table_gallery = wpdevart_gallery_databese::$table_names['gallery'];
					$table_images = wpdevart_gallery_databese::$table_names['images'];						
					$upload_images = $wpdb->get_results( "SELECT id, url FROM ".$table_images." ;");																
					$xxxxx = array();
					foreach($upload_images as $key=>$value){
						$xxxxx[$value->id]['url'] = $value->url;							
					}											
					foreach ($yyyy as $value) {   							
						$this->image_manipulatioan->remove_image_from_url($xxxxx[$value]['url']);
						$wpdb->query("DELETE FROM $table_images WHERE id='$value'");								
					}
					$wpdb->query("DELETE FROM $table_gallery WHERE img_id IN (".implode(',',$yyyy).");");
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}		
		
	}	
	
	private function insert_image_from_standart_uploader(){	
		if(isset($_POST['insert_from_standat_uploader'])) {
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){	
				if(isset($_POST['gallery_name']) && $_POST['gallery_name'] && isset($_POST['album_name']) && $_POST['album_name']){
					if(isset($_FILES['fileToUpload']) && $_FILES['fileToUpload']['name'][0]){
					}else{
						$this->notification['type']='error';
						$this->notification['text']='Files not attached. Please attach one or more files.';
					}
					$gallery_name	=$_POST['gallery_name'];
					$album_name		=$_POST['album_name'];						
					$this->uploaded_image_html=$this->image_manipulatioan->insert_from_standart_uploader($_FILES['fileToUpload'],$gallery_name,$album_name);
				}else{
					$this->notification['type']='error';
					$this->notification['text']='"album name" or "gallery name" not detected';
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}					
		}
	}
	
	private function remove_image(){
		if(isset($_POST['delete_image'])){	
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){	
				if(isset($_POST['wpda_gall_image_id']) && $_POST['wpda_gall_image_id']){
					$image_id=(int)$_POST['wpda_gall_image_id'];
					$this->image_manipulatioan->remove_images($image_id);
					$this->notification['type']='updated';
					$this->notification['text']='iamge successfully deleted';
				}else{
					$this->notification['type']='error';
					$this->notification['text']='"image id" not detected';
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
	}
	private function update_image_info(){
		if(isset($_POST['edit_image'])){
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){	
				if(isset($_POST['wpda_gall_image_id']) && $_POST['wpda_gall_image_id']){
					$image_id=(int)$_POST['wpda_gall_image_id'];
					$image_name=$_POST['wpda_gall_edit_image_name'];
					$image_description=$_POST['wpda_gall_edit_image_description'];
					$this->image_manipulatioan->update_image_info($image_id,$image_name,$image_description);
					$this->notification['type']='updated';
					$this->notification['text']='iamge successfully updated';
				}else{
					$this->notification['type']='error';
					$this->notification['text']='"image id" not detected';
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
	}
	private function remove_images(){
		if(isset($_POST['remov_album_images'])){	
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){
				if(isset($_POST['album_thumbnail']) && $_POST['album_thumbnail']){
					$image_ids=$_POST['album_thumbnail'];
					$this->image_manipulatioan->remove_images($image_ids);
					$this->notification['type']='updated';
					$this->notification['text']='iamges successfully deleted';
				}else{
					$this->notification['type']='error';
					$this->notification['text']='please Select images';
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
	}
		
	private function save_album_images_name_description(){
		if(isset($_POST['save_album_images_name_description'])){	
			if(isset($_POST['wpda_gall_gallery_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_gallery_page_nonce_name'],'wpda_gall_gallery_page_nonce_action') ){
				if(isset($_POST['album_thumbnail']) && $_POST['album_thumbnail']){
					$image_ids=$_POST['album_thumbnail'];
					$album_name=$_POST['album_name'];
					$album_description=$_POST['album_description'];
					foreach($image_ids as $x => $id){
						$this->image_manipulatioan->update_image_info($id,$album_name[$x],$album_description[$x]);
					}
					
					$this->notification['type']='updated';
					$this->notification['text']='iamge successfully updated';
				}else{
					$this->notification['type']='error';
					$this->notification['text']='"image id" not detected';
				}
			}else{
				//error authentication
				$this->notification['type']='error';
				$this->notification['text']='Authentication Error please try again';	
			}
		}
	}
	
}

class wpda_gall_image_manupulation{
	public $directory='wpdevart_gallery';
	public $directorys=array();
	public $urls=array();
	private $thumb_width='200';
	private $thumb_height='40';//'200';
	private $max_width='1920';
	private $max_height='1080';
	//
	function __construct(){
		$destination=$this->create_directory();
		$this->directorys=$destination[0];
		$this->urls=$destination[1];
		// geting croping option for croping settings
		$this->thumb_width=get_option('wpda_gall_croping_imagae_thumbnail_width',$this->thumb_width);
		$this->thumb_height='40';//get_option('wpda_gall_croping_imagae_thumbnail_height',$this->thumb_height);
		$this->max_width=get_option('wpda_gall_croping_imagae_max_width',$this->max_width);
		$this->max_height=get_option('wpda_gall_croping_imagae_max_height',$this->max_height);
		
		add_action( 'wp_ajax_wpda_gall_drag_img_drop_img_inversia', array($this,'drag_img_drop_img_inversia') ); 
		add_action( 'wp_ajax_wpda_gall_drag_album_drop_album', array($this,'drag_album_drop_album') ); 
		add_action( 'wp_ajax_wpda_gall_drag_img_drop_album', array($this,'drag_img_drop_album') ); 
		add_action( 'wp_ajax_wpda_gall_drag_img_drop_delet', array($this,'drag_img_drop_delet') ); 
		add_action( 'wp_ajax_wpda_gall_drag_album_drop_delet', array($this,'drag_album_drop_delet') ); 		
		add_action( 'wp_ajax_wpda_gall_drag_gallery_drop_delet', array($this,'drag_gallery_drop_delet') );
		add_action( 'wp_ajax_wpda_gall_form_album_rename', array($this,'form_album_rename') );
		add_action( 'wp_ajax_wpda_gall_form_album_delete', array($this,'form_album_delete') );
		add_action( 'wp_ajax_wpda_gall_form_gallery_rename', array($this,'form_gallery_rename') );
		add_action( 'wp_ajax_wpda_gall_form_gallery_delete', array($this,'form_gallery_delete') );
		add_action( 'wp_ajax_wpda_gall_form_create_gallery', array($this,'form_create_gallery') );
		add_action( 'wp_ajax_wpda_gall_form_create_album', array($this,'form_create_album') );
		add_action( 'wp_ajax_wpda_gall_form_edit_image', array($this,'form_edit_image') );
		add_action( 'wp_ajax_wpda_gall_visibility', array($this,'visibility') );
	}
	private function create_directory(){
		$directory=array();
		if(!file_exists(WP_CONTENT_DIR . "/" . $this->directory . "/")) {
			mkdir(WP_CONTENT_DIR . "/" . $this->directory . "/");
		}
		if(!file_exists(WP_CONTENT_DIR . "/" . $this->directory . "/main/")) {
			mkdir(WP_CONTENT_DIR . "/" . $this->directory . "/main/");			
		}
		$urls['main']=WP_CONTENT_URL . "/" . $this->directory . "/main/";
		$directory['main']=WP_CONTENT_DIR . "/" . $this->directory . "/main/";
		if(!file_exists(WP_CONTENT_DIR . "/" . $this->directory . "/width/")) {
			mkdir(WP_CONTENT_DIR . "/" . $this->directory . "/width/");			
		}	
		$urls['width']=WP_CONTENT_URL . "/" . $this->directory . "/width/";
		$directory['width']=WP_CONTENT_DIR . "/" . $this->directory . "/width/";
		if(!file_exists(WP_CONTENT_DIR . "/" .$this->directory . "/height/")) {
			mkdir(WP_CONTENT_DIR . "/" . $this->directory . "/height/");			
		}
		$urls['height']=WP_CONTENT_URL . "/" . $this->directory . "/height/";
		$directory['height']=WP_CONTENT_DIR . "/" . $this->directory . "/height/";
		if(!file_exists(WP_CONTENT_DIR . "/" . $this->directory . "/original/")) {
			mkdir(WP_CONTENT_DIR . "/" . $this->directory . "/original/");			
		}
		$urls['original']=WP_CONTENT_URL . "/" . $this->directory . "/original/";
		$directory['original']=WP_CONTENT_DIR . "/" . $this->directory . "/original/";
		return array($directory,$urls);
	}
	//
	private function create_image_duplicates($main_image_path){
		$image= new wpda_gall_image();
		$image1= new wpda_gall_image();
		$image2= new wpda_gall_image();
		
		$image_name=basename($main_image_path);
		
		$image->load($main_image_path);
		$image1->load($main_image_path);
		$image2->load($main_image_path);
			
		if($this->max_height /  $this->max_width > $image->getWidth() / $image->getHeight()){
			$resize_max_height = floor(min( $this->max_width, $image->getWidth()) * $image->getHeight() / $image->getWidth()) ;
		} else {
			$resize_max_height = min($image->getHeight(), $this->max_height);
		}
		// Resize to main.
		$image->resizeToHeight($resize_max_height);
		$image->save($this->directorys['main'].$image_name);				
		// Resize to width.		
		$image1->resizeToWidth($this->thumb_width);
		$image1->save($this->directorys['width'].$image_name);
		// Resize to height.
		$image2->resizeToHeight($this->thumb_height);
		$image2->save($this->directorys['height'].$image_name);	
	}
	//
	public function insert_from_media_library($image_id,$gallery_name,$album_name){
		if ($image_id) {
			$image_post=get_post($image_id);
			$target_dir_upload= get_attached_file( $image_id );
			$image_title=$image_post->post_title;
			$image_description=$image_post->post_content;
			$image_name = basename( wp_get_attachment_url( $image_id ) );
			$image_size = filesize($target_dir_upload);
			$image_demisions = getimagesize($target_dir_upload);
			$image_w = $image_demisions[0];
			$image_h = $image_demisions[1];	
			$image_type = substr(strrchr($image_name, "."), 1);
			$dublicate_counter='';				
			$image_name_whitouth_info = pathinfo($image_name , PATHINFO_FILENAME);
			for ($i=0;$i<1000;$i++) {
				if(!file_exists($this->directorys['original'].$image_name_whitouth_info  . $dublicate_counter . '.' . $image_type)){											
					$image_name = $image_name_whitouth_info  . $dublicate_counter . '.' . $image_type;					
				}else{
					$dublicate_counter='-'.$i;
				}											
			}						
			copy($target_dir_upload, $this->directorys['original'] . $image_name);	
			$this->create_image_duplicates($this->directorys['original'] . $image_name);
			////////	
			global $wpdb;
			$max_ord=$wpdb->get_var( "SELECT MAX(order_id) FROM ".wpdevart_gallery_databese::$table_names['gallery'].";" )+1;
			
/*				
			$wpdb->insert( 
				wpdevart_gallery_databese::$table_names['gallery'], 
				array( 
					'time'              => current_time( 'mysql' ), 
					'gallery'           => $gallery_name, 
					'album'             => $album_name, 
					'image_h'           => $image_h,
					'image_w'           => $image_w,
					'image_size'        => $image_size,
					'image_type'        => $image_type,
					'url'               => $image_name,
					'image_description' => $image_description,
					'image_name' 		=> $image_title,
					'order_id'       	    => $max_ord,
				),array(
					'%s',
					'%s',
					'%s',
					'%s',
					'%s',
					'%s',
					'%s',
					'%s',
					'%s',
					'%s',
					'%d'
				)
			);
*/			
			//17-05-2017
			$wpdb->insert( 
				wpdevart_gallery_databese::$table_names['images'], 
 				array(  
					'image_h'           => $image_h,
					'image_w'           => $image_w,
					'image_size'        => $image_size,
					'image_type'        => $image_type,
					'url'               => $image_name,
				),array(
					'%s',
					'%s',
					'%s',
					'%s',
					'%s'
				)
			);                
            $lastid = $wpdb->insert_id;     
                                
			$wpdb->insert( 
				wpdevart_gallery_databese::$table_names['gallery'], 
				array( 
					'time'              => current_time( 'mysql' ), 
					'gallery'           => $gallery_name, 
					'album'             => $album_name, 
					'image_description' => $image_description,
					'image_name' 		=> $image_title,
					'order_id'       	=> $max_ord,
                    'img_id' 		    => $lastid,
					'published'         => 1,                    
				),array(
					'%s',
					'%s',
					'%s',
					'%s',
					'%s',
					'%d',
					'%d',
					'%d'
				)
			);			
																			
		}else{
			return 'Not selected image';
		}
	}


	///////////////////////////////////////////////////////////////      insert image from media_library
	public function insert_from_upload_images($image_id,$gallery_name,$album_name){
		if ($image_id) {
			$image_post=get_post($image_id);
			$target_dir_upload= get_attached_file( $image_id );
			$image_title=$image_post->post_title;
			$image_description=$image_post->post_content;

			////////	
			global $wpdb;
			$max_ord=$wpdb->get_var( "SELECT MAX(order_id) FROM ".wpdevart_gallery_databese::$table_names['gallery'].";" ) + 1;
                    
			$wpdb->insert( 
				wpdevart_gallery_databese::$table_names['gallery'], 
				array( 
					'time'              => current_time( 'mysql' ), 
					'gallery'           => $gallery_name, 
					'album'             => $album_name, 
					'image_description' => $xxxxx[$image_id]['image_name'],
					'image_name' 		=> $xxxxx[$image_id]['image_name'],
					'order_id'       	=> $max_ord,
                    'img_id' 		    => $image_post->id,
					'published'         => 1,                    
				),array(
					'%s',
					'%s',
					'%s',
					'%s',
					'%s',
					'%d',
					'%d',
					'%d'
				)
			);																			
		}else{
			return 'Not selected image';
		}
	}	
	// insert from standart uploader
	public function insert_from_standart_uploader($files,$gallery_name,$album_name){
		$output_html='';
		global $wpdb;
		if(!empty($files["name"][0])){	  
			$length = count($files["name"]);
			
			$output_html= '<div class="wpda_gall_standart_uploaded_image_status">';
			
			for($i = 0; $i < $length; $i++){
				$local_output_html='';
				$image_name = basename($files["name"][$i]);
				$image_title = pathinfo($image_name , PATHINFO_FILENAME);				
				$image_name = preg_replace('/[^A-Za-z0-9\. -]/', '', preg_replace('/\\s+/', '-',trim($image_name)));	
				$target_file = $this->directorys['original'] . $image_name;	
				$image_uploaded = 1;
				$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
				
				// Check if image file is a actual image or fake image
				
				$check = getimagesize($files["tmp_name"][$i]);
				if($check !== false) {			
					$wpda_gall_image_size = $files["size"][$i];	                
					$wpda_gall_image_width = $check[0];
					$wpda_gall_image_height = $check[1];	
					$wpda_gall_image_type = $imageFileType;
					$local_output_html .= "File is an image - " . $check["mime"] . " ";						
					$image_uploaded = 1;
				} else {
					$local_output_html .= "File is not an image. ";
					$image_uploaded = 0;
				}
				
				$dublicate_counter='';		
				$image_name_whitouth_info = pathinfo($image_name , PATHINFO_FILENAME);
				for ($j=0;$j<1000;$j++) {
					if(!file_exists($this->directorys['original'].$image_name_whitouth_info  . $dublicate_counter . '.' . $imageFileType)){											
						$image_name = $image_name_whitouth_info  . $dublicate_counter . '.' . $imageFileType;					
					}else{
						$dublicate_counter='-'.$j;
					}											
				}	
				// Check file size
				if ($files["size"][$i] > wp_max_upload_size()) {
					$local_output_html .= "Sorry, your file is too large.";
					$image_uploaded = 0;
				}
				// Allow certain file formats
				if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
				&& $imageFileType != "gif" ) {
					$local_output_html .= "Sorry, only JPG, JPEG, PNG & GIF files are allowed. ";
					$image_uploaded = 0;
				}
				// Check if $uploadOk is set to 0 by an error
				if ($image_uploaded == 0) {
					$local_output_html .= "Sorry, your file was not uploaded. <br>";
				// if everything is ok, try to upload file
				} else {				
					if (move_uploaded_file($files["tmp_name"][$i], $this->directorys['original'] . $image_name)) {
						$this->create_image_duplicates($this->directorys['original'] . $image_name);
						$max_ord=$wpdb->get_var( "SELECT MAX(order_id) FROM ".wpdevart_gallery_databese::$table_names['gallery'].";" )+1;
/*												
						$wpdb->insert( 
							wpdevart_gallery_databese::$table_names['gallery'], 
							array( 
								'time'              => current_time( 'mysql' ), 
								'gallery'           => $gallery_name, 
								'album'             => $album_name, 
								'image_h'           => $wpda_gall_image_height,
								'image_w'           => $wpda_gall_image_width,
								'image_size'        => $wpda_gall_image_size,
								'image_type'        => $wpda_gall_image_type,
								'url'               => $image_name,
								'image_description' => '',
								'image_name' 		=> $image_title,
								'order_id'       	    => $max_ord,
							),array(
								'%s',
								'%s',
								'%s',
								'%s',
								'%s',
								'%s',
								'%s',
								'%s',
								'%s',
								'%s',
								'%d'
							)
						);
*/						
						//17-05-2017
						$wpdb->insert( 
							wpdevart_gallery_databese::$table_names['images'], 
							array(  
								'image_h'           => $wpda_gall_image_height,
								'image_w'           => $wpda_gall_image_width,
								'image_size'        => $wpda_gall_image_size,
								'image_type'        => $wpda_gall_image_type,
								'url'               => $image_name,
							),array(
								'%s',
								'%s',
								'%s',
								'%s',
								'%s'
							)
						);                
						$lastid = $wpdb->insert_id;     
											
						$wpdb->insert( 
							wpdevart_gallery_databese::$table_names['gallery'], 
							array( 
								'time'              => current_time( 'mysql' ), 
								'gallery'           => $gallery_name, 
								'album'             => $album_name, 
								'image_description' => '',
								'image_name' 		=> $image_title,
								'order_id'       	=> $max_ord,
								'img_id' 		    => $lastid,
								'published'         => 1,                    
							),array(
								'%s',
								'%s',
								'%s',
								'%s',
								'%s',
								'%d',
								'%d',
								'%d'
							)
						);						
									
						$local_output_html .= "The file ". basename( $files["name"][$i]). " has been uploaded. <br>";
					} else {
						$local_output_html .= "Sorry, there was an error uploading your file.<br>";
					}
				}				
				$local_output_html = '<div class="wpda_gall_standart_uploaded_image_info"><span><img src="' . $this->urls['width'].$image_name . '" style="width:60px;height:60px;margin-right:10px;"></span><span>'.$local_output_html.'</span></div>';
				$local_output_html .= '<hr>';
				$output_html .=$local_output_html;
			}
			$output_html .= '</div>';
		}
		return $output_html;
	}
	// remove image
	public function remove_images($image_ids){
		global $wpdb;
		if(!is_array($image_ids)){
			//$image_row=$wpdb->get_var($wpdb->prepare("SELECT `url` FROM ".wpdevart_gallery_databese::$table_names['gallery'].' WHERE id=%d',$image_ids));  //19-05-2017
			//this->remove_image_from_url($image_row);//19-05-2017
			$wpdb->delete( wpdevart_gallery_databese::$table_names['gallery'], array( 'id' => $image_ids ), array( '%d' ) );
		}else{
			foreach($image_ids as $id){
				if(is_array($id)){
					return;
				}else{
					$this->remove_images($id);
				}
			}
		}
	}
	public function remove_image_from_url($file_name){
		foreach($this->directorys as $value){
			if($file_name != ''){unlink($value.$file_name);}
		}
	}
	public function update_image_info($image_id,$image_name,$image_description){
		global $wpdb;
		$wpdb->update( 
			wpdevart_gallery_databese::$table_names['gallery'], 
			array( 
				'image_name' 		 => $image_name,	
				'image_description' => $image_description,
				'time'              => current_time( 'mysql' ),
			), 
			array( 'id' => $image_id ), 
			array( 
				'%s',	
				'%s'	
			), 
			array( '%d' ) 
		);		
	}	
/*	public function drag_img_drop_img_inversia() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		
		$drop_g =$_GET['drop_g'];
		$drop_a =$_GET['drop_a'];
		$drop_i =$_GET['drop_i'];
		$drag_g =$_GET['drag_g'];
		$drag_a =$_GET['drag_a'];
		$drag_i =$_GET['drag_i'];	

		$wpdb->update( $table_name, array('id' => 1000000), array('id'=> $drop_i) );
		$wpdb->update( $table_name, array('id' => $drop_i, 'gallery' => $drop_g, 'album' => $drop_a), array('id' => $drag_i) );
		$wpdb->update( $table_name, array('id' => $drag_i, 'gallery' => $drag_g, 'album' => $drag_a), array('id' => 1000000) );
		exit;	
	}
*/	
	
	public function drag_img_drop_img_inversia() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		
		$drop_g =$_GET['drop_g'];
		$drop_a =$_GET['drop_a'];
		$drop_i =$_GET['drop_i'];
		$drop_ord =$_GET['drop_ord'];
		$drag_g =$_GET['drag_g'];
		$drag_a =$_GET['drag_a'];
		$drag_i =$_GET['drag_i'];
		$drag_ord =$_GET['drag_ord'];	
		
		//11-05-2017
		$wpdb->update( $table_name, array('order_id' => $drop_ord, 'gallery' => $drop_g, 'album' => $drop_a), array('id' => $drag_i) );
		$wpdb->update( $table_name, array('order_id' => $drag_ord, 'gallery' => $drag_g, 'album' => $drag_a), array('id' => $drop_i) );		
		exit;	
	}	
	
		
	public function drag_album_drop_album() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		
		$drop_g =$_GET['drop_g'];
		$drop_a =$_GET['drop_a'];
		$drag_g =$_GET['drag_g'];
		$drag_a =$_GET['drag_a'];

		$wpdb->query("UPDATE $table_name SET gallery='$drop_g', album='$drop_a' WHERE gallery='$drag_g' AND album='$drag_a' AND NOT image_name='NULLL'");//image_type IS NOT NULLL chi ashxatum
		exit;
	}	
	public function drag_img_drop_album() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		
		$drop_g =$_GET['drop_g'];
		$drop_a =$_GET['drop_a'];

		$drag_g =$_GET['drag_g'];
		$drag_a =$_GET['drag_a'];
		$drag_i =$_GET['drag_i'];	

		$wpdb->update( $table_name, array('gallery' => $drop_g, 'album' => $drop_a), array('id' => $drag_i) );
		exit;
	}			
	public function drag_img_drop_delet() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];

		$drag_i =(int)$_GET['drag_i'];
			
		//$this->remove_images($drag_i);		
		$wpdb->delete( wpdevart_gallery_databese::$table_names['gallery'], array( 'id' => $drag_i ), array( '%d' ) );//19-05-2017

		exit;		
	}		
	public function drag_album_drop_delet() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];

		$drag_g =$_GET['drag_g'];
		$drag_a =$_GET['drag_a'];

/*	19-05-2017 //nkarnere uploaderic jnjoxn e	
		$file_name=$wpdb->get_col( "SELECT `url` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = '$drag_g' And `album` = '$drag_a' ;" );		
		$file_name_length = count($file_name);					
		for ($x = 0; $x < $file_name_length; $x++) {						
			$this->remove_image_from_url($file_name[$x]);				
		}		
*/
		//$wpdb->query("DELETE FROM $table_name WHERE gallery='$drag_g' AND image_type IS NOT NULL AND album='$drag_a'");// delet only album images
		$wpdb->query("DELETE FROM $table_name WHERE gallery='$drag_g' AND album='$drag_a'");//global delet album with name
		exit; 	
	}
	
	public function drag_gallery_drop_delet() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];

		$drag_g =$_GET['drag_g'];
		
		/*	19-05-2017 //nkarnere uploaderic jnjoxn e
		$file_name=$wpdb->get_col( "SELECT `url` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = '$drag_g' ;" );		
		$file_name_length = count($file_name);					
		for ($x = 0; $x < $file_name_length; $x++) {						
			$this->remove_image_from_url($file_name[$x]);				
		}
		*/		
		//$wpdb->query("DELETE FROM $table_name WHERE gallery='$drag_g' AND album IS NOT NULL");// delet only albums and images from gallery
		$wpdb->query("DELETE FROM $table_name WHERE gallery='$drag_g'");//global delet gallery with name
		exit; 	
	}
	public function form_album_rename() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		
		$form_album_index_name =$_GET['form_album_index_name'];
		$form_gallery_index_name =$_GET['form_gallery_index_name'];
		$form_album_index_old_name =$_GET['form_album_index_old_name'];

		$wpdb->query("UPDATE $table_name SET gallery='$form_gallery_index_name', album='$form_album_index_name' WHERE gallery='$form_gallery_index_name' AND album='$form_album_index_old_name'");
		exit;
	}
	public function form_album_delete() {
		global $wpdb;						 					
       // $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		$table_gallery = wpdevart_gallery_databese::$table_names['gallery'];//19-05-2017
		$table_images = wpdevart_gallery_databese::$table_names['images'];//19-05-2017

		$form_gallery_index_name =$_GET['form_gallery_index_name'];
		$form_album_index_old_name =$_GET['form_album_index_old_name'];
		
		//$file_name=$wpdb->get_col( "SELECT `url` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = '$form_gallery_index_name' And `album` = '$form_album_index_old_name' ;" );
		//19-05-2017
		/*22-05-2017
		$file_name=$wpdb->get_col( "SELECT DISTINCT ".$table_images.".url FROM ".$table_gallery." INNER JOIN ".$table_images." ON ".$table_gallery.".img_id = ".$table_images.".id WHERE ".$table_gallery.".gallery = '$form_gallery_index_name' And ".$table_gallery.".album = '$form_album_index_old_name' ;" );
				
		$file_name_length = count($file_name);				
		for ($x = 0; $x < $file_name_length; $x++) {						
			$this->remove_image_from_url($file_name[$x]);
			$wpdb->query("DELETE FROM $table_images WHERE url='$file_name[$x]'");//19-05-2017				
		}
		*/		
		//$wpdb->query("DELETE FROM $table_name WHERE gallery='$form_gallery_index_name' AND album='$form_album_index_old_name'");//global delet album with name
		$wpdb->query("DELETE FROM $table_gallery WHERE gallery='$form_gallery_index_name' AND album='$form_album_index_old_name'");//19-05-2017
		
		// $remove_ids = $wpdb->get_results( "SELECT ".$table_gallery.".id FROM ".$table_gallery." LEFT JOIN ".$table_images." ON ".$table_gallery.".img_id = ".$table_images.".id AND ".$table_gallery.".img_id <> ".$table_images.".id ;",ARRAY_A);
        // $wpdb->query("DELETE FROM $table_gallery WHERE id IN ($remove_ids)");//22-05-2017 delete free id from table_gallery		

		exit; 
	}		
	
	public function form_gallery_rename() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		
		$form_gallery_index_name =$_GET['form_gallery_index_name'];
		$form_gallery_index_old_name =$_GET['form_gallery_index_old_name'];

		$wpdb->query("UPDATE $table_name SET gallery='$form_gallery_index_name' WHERE gallery='$form_gallery_index_old_name'");
		exit;
	}	
	public function form_gallery_delete() {
		global $wpdb;						 					
       // $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		$table_gallery = wpdevart_gallery_databese::$table_names['gallery'];//19-05-2017
		$table_images = wpdevart_gallery_databese::$table_names['images'];//19-05-2017		

		$form_gallery_index_old_name =$_GET['form_gallery_index_old_name'];
		
		//$file_name=$wpdb->get_col( "SELECT `url` FROM ".wpdevart_gallery_databese::$table_names['gallery']." WHERE `gallery` = '$form_gallery_index_old_name' ;" );
		//19-05-2017
		/*
		$file_name=$wpdb->get_col( "SELECT DISTINCT ".$table_images.".url FROM ".$table_gallery." INNER JOIN ".$table_images." ON ".$table_gallery.".img_id = ".$table_images.".id WHERE ".$table_gallery.".gallery = '$form_gallery_index_old_name';" );
		
		$file_name_length = count($file_name);					
		for ($x = 0; $x < $file_name_length; $x++) {						
			$this->remove_image_from_url($file_name[$x]);
			$wpdb->query("DELETE FROM $table_images WHERE url='$file_name[$x]'");//19-05-2017				
		}
		*/		
		//$wpdb->query("DELETE FROM $table_name WHERE gallery='$form_gallery_index_old_name'");//global delet album with name
		$wpdb->query("DELETE FROM $table_gallery WHERE gallery='$form_gallery_index_old_name'");//19-05-2017
		exit; 
	}	
	public function form_create_gallery() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		$max_ord=$wpdb->get_var( "SELECT MAX(order_id) FROM ".wpdevart_gallery_databese::$table_names['gallery'].";" ) + 1;
		$drag_g =$_GET['drag_g'];
/*		
		$wpdb->insert( 
			$table_name, 
			array( 
				'time'              => current_time( 'mysql' ), 
				'gallery'           => $drag_g, 
				'album'             => NULL, 
				'image_h'           => NULL,
				'image_w'           => NULL,
				'image_size'        => NULL,
				'image_type'        => NULL,
				'url'               => '',
				'image_description' => NULL,
				'image_name' 		=> NULL,
				'order_id'       	    => $max_ord,
			),array(
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%d'
			)
		);
*/		
		$wpdb->insert( 
			$table_name, 
			array( 
				'time'              => current_time( 'mysql' ), 
				'gallery'           => $drag_g, 
				'album'             => NULL, 
				'image_description' => NULL,
				'image_name' 		=> NULL,
				'order_id'       	=> $max_ord,
				'published'       	=> 1,
			),array(
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%d',
				'%d'
			)
		);		
	
		exit; 
	}
	public function form_create_album() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		$max_ord=$wpdb->get_var( "SELECT MAX(order_id) FROM ".wpdevart_gallery_databese::$table_names['gallery'].";" ) + 1;
		$drag_g =$_GET['drag_g'];
		$drag_a =$_GET['drag_a'];
/*		
		$wpdb->insert( 
			$table_name, 
			array( 
				'time'              => current_time( 'mysql' ), 
				'gallery'           => $drag_g, 
				'album'             => $drag_a, 
				'image_h'           => NULL,
				'image_w'           => NULL,
				'image_size'        => NULL,
				'image_type'        => NULL,
				'url'               => '',
				'image_description' => NULL,
				'image_name' 		=> NULL,
				'order_id'       	    => $max_ord,
			),array(
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%d'
			)
		);
*/		
		$wpdb->insert( 
			$table_name, 
			array( 
				'time'              => current_time( 'mysql' ), 
				'gallery'           => $drag_g, 
				'album'             => $drag_a, 
				'image_description' => NULL,
				'image_name' 		=> NULL,
				'order_id'       	=> $max_ord,
				'published'       	=> 1,
			),array(
				'%s',
				'%s',
				'%s',
				'%s',
				'%s',
				'%d',
				'%d'
			)
		);				
		exit; 
	}
	public function form_edit_image() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		

		$form_img_index_id =$_GET['form_img_index_id'];
		$form_img_index_name =$_GET['form_img_index_name'];
		$form_img_index_description =$_GET['form_img_index_description'];

		$wpdb->query("UPDATE $table_name SET image_name='$form_img_index_name', image_description='$form_img_index_description' WHERE id='$form_img_index_id'");
		exit;
	}
	//18-05-2017
	public function visibility() {
		global $wpdb;						 					
        $table_name = wpdevart_gallery_databese::$table_names['gallery'];
		
		$visibility_id =$_GET['visibility_id'];
		$visibility_value =$_GET['visibility_value'];
		$visibility_value = ($visibility_value =='visibility')?0:1;

		$wpdb->query("UPDATE $table_name SET published='$visibility_value' WHERE id='$visibility_id'");
		exit;
	}							
}
$aaaaaa=new wpda_gall_image_manupulation();
class wpda_gall_image{
	var $image;
	var $image_type;
	var $image_w;   
	var $image_h;
	var $image_size;   	   
	function load($filename) {
		$image_info = getimagesize($filename);
		$this->image_type = $image_info[2];
		$this->image_w = $image_info[0];
		$this->image_h = $image_info[1];
		$this->image_size = $image_info[3];	  
		if( $this->image_type == IMAGETYPE_JPEG ) {
			$this->image = imagecreatefromjpeg($filename);
		} elseif( $this->image_type == IMAGETYPE_GIF ) {
			$this->image = imagecreatefromgif($filename);
		} elseif( $this->image_type == IMAGETYPE_PNG ) {
			$this->image = imagecreatefrompng($filename);
		}
	}
	function save($filename, $image_type=IMAGETYPE_JPEG, $compression=100, $permissions=null) {
		if( $image_type == IMAGETYPE_JPEG ) {
			imagejpeg($this->image,$filename,$compression);
		} elseif( $image_type == IMAGETYPE_GIF ) {
			imagegif($this->image,$filename);
		} elseif( $image_type == IMAGETYPE_PNG ) {
			imagepng($this->image,$filename);
		}
		if( $permissions != null) {
			chmod($filename,$permissions);
		}
	}
	function output($image_type=IMAGETYPE_JPEG) {
		if( $image_type == IMAGETYPE_JPEG ) {
			imagejpeg($this->image);
		} elseif( $image_type == IMAGETYPE_GIF ) {
			imagegif($this->image);
		} elseif( $image_type == IMAGETYPE_PNG ) {
			imagepng($this->image);
		}
	}
	function getWidth() {
		return imagesx($this->image);
	}
	function getHeight() {
		return imagesy($this->image);
	}
	function resizeToHeight($height) {
		$ratio = $height / $this->getHeight();
		$width = $this->getWidth() * $ratio;
		$this->resize($width,$height);
	}
	function resizeToWidth($width) {
		$ratio = $width / $this->getWidth();
		$height = $this->getheight() * $ratio;
		$this->resize($width,$height);
	}
	function scale($scale) {
		$width = $this->getWidth() * $scale/100;
		$height = $this->getheight() * $scale/100;
		$this->resize($width,$height);
	}
	function resize($width,$height) {
		$new_image = imagecreatetruecolor($width, $height);
		imagecopyresampled($new_image, $this->image, 0, 0, 0, 0, $width, $height, $this->getWidth(), $this->getHeight());
		$this->image = $new_image;
	}
}

/////                 
?>