<?php

class wpda_gall_popup_page{
	
	public $notification;
	
	public $image_manipulatioan;
	
	private $uploaded_image_html='';
	
	private $options;
	
	function __construct(){
		$this->options=self::return_params_array();
	}
	public static function return_params_array(){
		return array(
			"popup_general_settings"=>array(
				"heading_name"=>"General",
				"params"=>array(
					
				"wpdeva_gall_popup_base_cornice"=>array(
						"title"=>"Distance Popup from screen",
						"description"=>"Select the distance popup from screen",
						"value"=>get_option("wpdeva_gall_popup_base_cornice","20"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",
                        "pro"=>true,						
					),			
					"wpdeva_gall_popup_start_rotate"=>array(
						"title"=>"Popup rotation when its started",
						"description"=>"Type here the Popup rotation degree when its started",
						"value"=>get_option("wpdeva_gall_popup_start_rotate","0"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(deg)",
                        "pro"=>true,
					),
					"wpdeva_gall_popup_position"=>array(
						"title"=>"Popup Position",
						"description"=>"Choose the popup Position",
						"values"=>array("fixed"=>"Fixed","absolute"=>"Absolute"),
						"value"=>get_option("wpdeva_gall_popup_position","fixed"),
						"function_name"=>"simple_select",
					),	
					"wpdeva_gall_start_popup_location"=>array(
						"title"=>"Popup location at its started",
						"description"=>"Choose the Popup location at its started",
						"values"=>array("0"=>"Image","1"=>"Left top","2"=>"Middle top","3"=>"Right top","4"=>"Left middle","5"=>"Middle middle","6"=>"Middle right","7"=>"Left bottom","8"=>"Middle bottom","9"=>"Right bottom"),
						"value"=>get_option("wpdeva_gall_start_popup_location","0"),
						"function_name"=>"simple_select",
                        "pro"=>true,
					),	
					"wpdeva_gall_popup_location"=>array(
						"title"=>"Popup location",
						"description"=>" Choose the popup location ",
						"values"=>array("1"=>"Left top","2"=>"Middle top","3"=>"Right top","4"=>"Left middle","5"=>"Middle middle","6"=>"Middle right","7"=>"Left bottom","8"=>"Middle bottom","9"=>"Right bottom"),
						"value"=>get_option("wpdeva_gall_popup_location","5"),
						"function_name"=>"simple_select",
                        "pro"=>true,
					),
					"wpdeva_gall_popup_brd_width"=>array(
						"title"=>"Popup border width",
						"description"=>"Type the popup border width",
						"value"=>get_option("wpdeva_gall_popup_brd_width","5"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",						
					),
					"wpdeva_gall_popup_brd_color"=>array(
						"title"=>"Popup border color",
						"description"=>"Select the popup border color",
						"value"=>get_option("wpdeva_gall_popup_brd_color","#0085ba"),
						"default_value"=>"#0085ba",
						"function_name"=>"color_input",									
					),
					"wpdeva_gall_popup_brd_opasity"=>array(
						"title"=>"Popup border color opacity",
						"description"=>"Select the popup border color opacity",
						"value"=>get_option("wpdeva_gall_popup_brd_opasity","100"),
						"function_name"=>"range_input",
						"small_text"=>"(%)",						
					),
					"wpdeva_gall_popup_brd_radius"=>array(
						"title"=>"Popup border radius",
						"description"=>"Type the popup border radius",
						"value"=>get_option("wpdeva_gall_popup_brd_radius","1"),
						"function_name"=>"simple_input",
						"type"=>"number",												
					),
					"wpdeva_gall_pixel"=>array(
						"title"=>"Popup radius metric type",
						"description"=>"Select the popup radius metric type",
						"values"=>array("px"=>"Pixels","%"=>"Pracents","em"=>"Em","cm"=>"Cantimetrs"),
						"value"=>get_option("wpdeva_gall_pixel","%"),
						"function_name"=>"simple_select",
					),
					"wpdeva_gall_popup_min_width"=>array(
						"title"=>"Minimum Popup width",
						"description"=>"Type the minimum Popup width",
						"value"=>get_option("wpdeva_gall_popup_min_width","400"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",						
					),
					"wpdeva_gall_popup_start_width"=>array(
						"title"=>"Popup width at its starting",
						"description"=>"Type the width of the popup window when starting",
						"value"=>get_option("wpdeva_gall_popup_start_width","200"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",						
					),
					"wpdeva_gall_close_location"=>array(
						"title"=>"Popup size at its start and close",
						"description"=>"Select the size of the Popup when you start and close its window",
						"values"=>array("0"=>"image thumbnail size","1"=>"popup start size"),
						"value"=>get_option("wpdeva_gall_close_location","0"),
						"function_name"=>"simple_select",
                        "pro"=>true,
					),
					"wpdeva_gall_loading_img"=>array(
						"title"=>"Popup loading image",
						"description"=>" Choose the popup loading image ",
						"values"=>array("load1.gif"=>"load1","load2.gif"=>"load2","load3.gif"=>"load3","load4.gif"=>"load4","load5.gif"=>"load5","load6.gif"=>"load6","load7.gif"=>"load7","load8.gif"=>"load8","load9.gif"=>"load9","load10.gif"=>"load10","load11.gif"=>"load11","load12.gif"=>"load12","load13.gif"=>"load13","load14.gif"=>"load14","load15.gif"=>"load15","load16.gif"=>"load16","load17.gif"=>"load17","load18.gif"=>"load18","load19.gif"=>"load19","load20.gif"=>"load20","load21.gif"=>"load21","load22.gif"=>"load22"),
						"value"=>get_option("wpdeva_gall_loading_img","load1.gif"),
						"function_name"=>"simple_select"
					),										
				),
			),
			"popup_description_settings"=>array(
				"heading_name"=>"Description panel",
				"params"=>array(
							
					"wpdeva_gall_image_description_bg_color"=>array(
						"title"=>"Description panel background color",
						"description"=>"Select the description panel background color",
						"value"=>get_option("wpdeva_gall_image_description_bg_color","#FFFFFF"),
						"default_value"=>"#FFFFFF",
						"function_name"=>"color_input",									
					),
					"wpdeva_gall_image_description_bg_color_hover"=>array(
						"title"=>"Description panel background color <span style='color:blue'>on hover</span>",
						"description"=>"Select the description panel on hover background color",
						"value"=>get_option("wpdeva_gall_image_description_bg_color_hover","#FFFFFF"),
						"default_value"=>"#FFFFFF",
						"function_name"=>"color_input",									
					),
					"wpdeva_gall_image_description_bg_color_opacity"=>array(
						"title"=>"Description panel opacity",
						"description"=>"Select the description panel opacity",
						"value"=>get_option("wpdeva_gall_image_description_bg_color_opacity","100"),
						"function_name"=>"range_input",
						"small_text"=>"(%)",						
					),			
					"wpdeva_gall_image_description_bg_color_opacity_hover"=>array(
						"title"=>"Description panel opacity <span style='color:blue'>on hover</span>",
						"description"=>"Select the description panel on hover opacity",
						"value"=>get_option("wpdeva_gall_image_description_bg_color_opacity_hover","100"),
						"function_name"=>"range_input",
						"small_text"=>"(%)",						
					),
					"wpdeva_gall_image_description_text_color"=>array(
						"title"=>"Description panel text color",
						"description"=>"Select the description panel text color",
						"value"=>get_option("wpdeva_gall_image_description_text_color","#000000"),
						"default_value"=>"#000000",
						"function_name"=>"color_input",									
					),
					"wpdeva_gall_image_description_text_color_hover"=>array(
						"title"=>"Description panel text color <span style='color:blue'>on hover</span>",
						"description"=>"Select the description panel on hover text color",
						"value"=>get_option("wpdeva_gall_image_description_text_color_hover","#000000"),
						"default_value"=>"#000000",
						"function_name"=>"color_input",									
					),
					"wpdeva_gall_image_description_distacne_top"=>array(
						"title"=>"Description panel text distance from top",
						"description"=>"Type the description panel text distance from top",
						"value"=>get_option("wpdeva_gall_image_description_distacne_top","15"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",								
					),
					"wpdeva_gall_image_description_distacne_left_right"=>array(
						"title"=>"Text distance from left and right side",
						"description"=>"Type the description panel text distance from left and right side",
						"value"=>get_option("wpdeva_gall_image_description_distacne_left_right","10"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",								
					),
					"wpdeva_gall_image_description_font_size"=>array(
						"title"=>"Description panel text font size",
						"description"=>"Type the description panel text font size",
						"value"=>get_option("wpdeva_gall_image_description_font_size","18"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",									
					),					
				)
			),
			"popup_icons_settings"=>array(
				"heading_name"=>"Icons general settings",
				"params"=>array(
					"wpdeva_gall_icons_inBar_height"=>array(
						"title"=>"Control bar height",
						"description"=>"Type the control bar height",
						"value"=>get_option("wpdeva_gall_icons_inBar_height","50"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",						
					),
					"wpdeva_gall_icons_distance"=>array(
						"title"=>"Distance between control bar icons",
						"description"=>"Type distance between control bar icons",
						"value"=>get_option("wpdeva_gall_icons_distance","15"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",						
					),
					"wpdeva_gall_icons_inBar_yes_no"=>array(
						"title"=>"Control bar display settings",
						"description"=>"Choose when to show or hide the control bar",
						"values"=>array("02"=>"Always hide","1"=>"Always show","0"=>"Show when mouse near to the bar","01"=>"Show when mouse inside Popup"),
						"value"=>get_option("wpdeva_gall_icons_inBar_yes_no","1"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					"wpdeva_gall_outBar_icons_center"=>array(
						"title"=>"Control bar icons position",
						"description"=>"Select control bar icons position",
						"values"=>array("0"=>"Center","1"=>"Left right"),
						"value"=>get_option("wpdeva_gall_outBar_icons_center","1"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
			
					"wpdeva_gall_icons_in_out"=>array(
						"title"=>"Control bar position",
						"description"=>"Select the control bar position",
						"values"=>array("in"=>"Inside popup","out"=>"Outside popup"),
						"value"=>get_option("wpdeva_gall_icons_in_out","in"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					"wpdeva_gall_icons_top_bottom"=>array(
						"title"=>"Control bar vertical position",
						"description"=>"Choose the control bar vertical position",
						"values"=>array("0"=>"Bottom","1"=>"Top"),
						"value"=>get_option("wpdeva_gall_icons_top_bottom","0"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					"wpdeva_gall_popup_bg_color"=>array(
						"title"=>"Control bar background color",
						"description"=>"Select the control bar background color",
						"value"=>get_option("wpdeva_gall_popup_bg_color","#ffffff"),
						"default_value"=>"#ffffff",
						"function_name"=>"color_input",	
						"pro"=>true,
					),
					"wpdeva_gall_icons_color"=>array(
						"title"=>"Control bar icons color",
						"description"=>"Select the control bar icons color",
						"value"=>get_option("wpdeva_gall_icons_color","#0085ba"),
						"default_value"=>"#0085ba",
						"function_name"=>"color_input",
						"pro"=>true,
					),
					"wpdeva_gall_icons_hover_color"=>array(
						"title"=>"Control bar icons color <span style='color:blue'>on hover</span> ",
						"description"=>"Select the control bar icons on hover color",
						"value"=>get_option("wpdeva_gall_icons_hover_color","#006799"),
						"default_value"=>"#006799",
						"function_name"=>"color_input",
						"pro"=>true,
					),					
					"wpdeva_gall_icons_scale_hover"=>array(
						"title"=>"Control bar icons size changing <span style='color:blue'>on hover</span>",
						"description"=>"Type here how to zoom in or zoom out icons on hover",
						"value"=>get_option("wpdeva_gall_icons_scale_hover","100"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(100/100)",
						"pro"=>true,
					),					
				)
			),
			
			"popup_select_icons_settings"=>array(
				"heading_name"=>"Control bar icons",
				"params"=>array(
					// left right
					"wpdeva_gall_right_icon_relative_font_size"=>array(
						"title"=>"Previous and Next image icons size",
						"description"=>"Type the Previous and Next image icons size",
						"value"=>get_option("wpdeva_gall_right_icon_relative_font_size","50"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(%)",						
					),
					"wpdeva_gall_play_icon_relative_font_size"=>array(
						"title"=>"Play and Pause icon size",
						"description"=>"Type the Play and Pause icon size",
						"value"=>get_option("wpdeva_gall_play_icon_relative_font_size","50"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(%)",						
					),
					"wpdeva_gall_count_icon"=>array(
						"title"=>"Counter separating symbol",
						"description"=>"Type the counter separating symbol",
						"value"=>get_option("wpdeva_gall_count_icon","/"),
						"function_name"=>"simple_input",						
					),	
					"wpdeva_gall_count_icon_relative_font_size"=>array(
						"title"=>"Counter separating symbol size",
						"description"=>"Type the counter separating symbol size",
						"value"=>get_option("wpdeva_gall_count_icon_relative_font_size","50"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(%)",						
					),
					"wpdeva_gall_full_icon_relative_font_size"=>array(
						"title"=>"Full and small size images icon size",
						"description"=>"Type the full and small size images icon size",
						"value"=>get_option("wpdeva_gall_full_icon_relative_font_size","50"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(%)",						
					),
					"wpdeva_gall_setting_icon_relative_font_size"=>array(
						"title"=>"Image description icon size",
						"description"=>"Type the image description icon size",
						"value"=>get_option("wpdeva_gall_setting_icon_relative_font_size","50"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(%)",						
					),
					"wpdeva_gall_close_icon_relative_font_size"=>array(
						"title"=>"Close icon size",
						"description"=>"Type the close icon size",
						"value"=>get_option("wpdeva_gall_close_icon_relative_font_size","80"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(%)",						
					),					
					"wpdeva_gall_right_icon"=>array(
						"title"=>"Previous and Next image icons",
						"description"=>"Choose the Previous and Next image icons",
						"values"=>array(
							"fa fa-arrow-"=>"&#xf060; &#xf061;",
							"fa fa-angle-double-"=>"&#xf100; &#xf101;",
							"fa fa-angle-"=>"&#xf104; &#xf105;",
							"fa fa-chevron-"=>"&#xf053; &#xf054;",							
							"fa fa-arrow-circle-"=>"&#xf0a8; &#xf0a9;",
							"fa fa-arrow-circle-o-"=>"&#xf190; &#xf18e;",
							"fa fa-caret-square-o-"=>"&#xf191; &#xf152;",
							"fa fa-chevron-circle-"=>"&#xf137; &#xf138;",
							"fa fa-hand-o-"=>"&#xf0a5; &#xf0a4;",
							"fa fa-long-arrow-"=>"&#xf177; &#xf178;",
							"wpdeva_gall_display_none"=>"Disable",
						),
						"value"=>get_option("wpdeva_gall_right_icon","fa fa-chevron-circle-"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					// play stop
					"wpdeva_gall_play_icon"=>array(
						"title"=>"Play icon",
						"description"=>"Choose the play icon",
						"values"=>array(
							"fa fa-play"=>"&#xf04b;",
							"fa fa-play-circle"=>"&#xf144;",
							"fa fa-play-circle-o"=>"&#xf01d;",
							"fa fa-youtube-play"=>"&#xf16a;",
							"wpdeva_gall_display_none"=>"Disable",			
						),
						"value"=>get_option("wpdeva_gall_play_icon","fa fa-play"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					"wpdeva_gall_stop_icon"=>array(
						"title"=>"Pause icon",
						"description"=>"Choose the pause icon",
						"values"=>array(
							"fa fa-pause"=>"&#xf04c;",
							"fa fa-pause-circle"=>"&#xf28b;",
							"fa fa-pause-circle-o"=>"&#xf28c;",
							"fa fa-stop"=>"&#xf04d;",
							"fa fa-stop-circle"=>"&#xf28d;",
							"fa fa-stop-circle-o"=>"&#xf28e;",
							"fa fa-hand-paper-o"=>"&#xf256;",
							"wpdeva_gall_display_none"=>"Disable",			
						),
						"value"=>get_option("wpdeva_gall_stop_icon","fa fa-pause"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
						
					"wpdeva_gall_full_icon"=>array(
						"title"=>"Full and small size images icon",
						"description"=>"Choose the full and small size images icon",
						"values"=>array(
							"fa fa-compress"=>array("&#xf065; &#xf066;",''),
							"material-icons"=>array("fullscreen fullscreen_exit","material-icons"),
							"wpdeva_gall_display_none"=>array("Disable","arial"),
						),
						"value"=>get_option("wpdeva_gall_full_icon","fa fa-compress"),
						"function_name"=>"simple_select_extend_font_size",
						"pro"=>true,
					),	
					
					// go to description icon
					"wpdeva_gall_setting_icon"=>array(
						"title"=>"Image description icon",
						"description"=>"Choose the image description icon",
						"values"=>array(
							"fa fa-commenting-o"=>"&#xf27b;",
							"fa fa-file-text"=>"&#xf15c;",
							"fa fa-reorder"=>"&#xf0c9;",	
							"wpdeva_gall_display_none"=>"Disable",			
						),
						"value"=>get_option("wpdeva_gall_setting_icon","fa fa-file-text"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
				
					// close
					"wpdeva_gall_close_icon"=>array(
						"title"=>"Close icon",
						"description"=>"Choose the close icon",
						"values"=>array(
							"fa fa-close"=>"&#xf00d;",
							"fa fa-times-circle"=>"&#xf057;",
							"fa fa-times-circle-o"=>"&#xf05c;",
							"fa fa-remove"=>"&#xf00d;",
							"wpdeva_gall_display_none"=>"Disable",
						),
						"value"=>get_option("wpdeva_gall_close_icon","fa fa-close"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					
				)
			),

			"popup_window_navigation_settings"=>array(
				"heading_name"=>"Outside Icons conteiner",
				"params"=>array(
					"wpdeva_gall_icons_outBar_distance_from_html"=>array(
						"title"=>"Outside Icons distance from screen",
						"description"=>"Type here outside Icons distance from screen",
						"value"=>get_option("wpdeva_gall_icons_outBar_distance_from_html","0"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",
						"pro"=>true,
					),
					"wpdeva_gall_icons_outBar_bg_color"=>array(
						"title"=>"Outside Icons panel background color",
						"description"=>"Select outside Icons panel background color",
						"value"=>get_option("wpdeva_gall_icons_outBar_bg_color","#000000"),
						"default_value"=>"#000000",
						"function_name"=>"color_input",	
						"pro"=>true,
					),	
					"wpdeva_gall_icons_outBar_bg_opasaty"=>array(
						"title"=>"Outside Icons panel background opacity",
						"description"=>"Select outside Icons panel background opacity",
						"value"=>get_option("wpdeva_gall_icons_outBar_bg_opasaty","0"),
						"function_name"=>"range_input",
						"small_text"=>"(%)",	
						"pro"=>true,
					),	
					"wpdeva_gall_icons_outBar_brd_radius"=>array(
						"title"=>"Outside Icons panel border radius",
						"description"=>"Type outside Icons panel border radius",
						"value"=>get_option("wpdeva_gall_icons_outBar_brd_radius","0"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(Px)",	
						"pro"=>true,
					),
				)
			),
			"popup_overlay_settings"=>array(
				"heading_name"=>"Overlay",
				"params"=>array(
					"wpdeva_gall_overlay_bg_color"=>array(
						"title"=>"Overlay background color",
						"description"=>"Select the overlay background color",
						"value"=>get_option("wpdeva_gall_overlay_bg_color","#000000"),
						"default_value"=>"#000000",
						"function_name"=>"color_input",									
					),
					"wpdeva_gall_overlay_opacity"=>array(
						"title"=>"Overlay opacity",
						"description"=>"Select the overlay opacity",
						"value"=>get_option("wpdeva_gall_overlay_opacity","20"),
						"function_name"=>"range_input",
						"small_text"=>"(%)",						
					),				
				)
			),
			"popup_animation_settings"=>array(
				"heading_name"=>"Slide effects",
				"params"=>array(
					"wpdeva_gall_pause_duration"=>array(
						"title"=>"Pause time",
						"description"=>"Type pause time",
						"value"=>get_option("wpdeva_gall_pause_duration","5000"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(ms)",						
					),
					"wpdeva_gall_slide_delay"=>array(
						"title"=>"When start slide effect",
						"description"=>"Choose when the slide effect should start",
						"values"=>array(
							"0"=>"With Image resizing",
							"1"=>"After Image resizing"
						),
						"value"=>get_option("wpdeva_gall_slide_delay","0"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					"wpdeva_gall_slide_show_effect"=>array(
						"title"=>"Slide type",
						"description"=>"Select slide effect type",
						"values"=>array(
							"0"=>"Canvas",
							"1"=>"Standard",
							"2"=>"None"	
						),
						"value"=>get_option("wpdeva_gall_slide_show_effect","0"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),	
					"wpdeva_gall_slide_show_effect_standart"=>array(
						"title"=>"Standard effects list",
						"description"=>"Choose what standard effects use",
						"values"=>array(
							"0"=>"From bottom to top",			
							"1"=>"From right to left",
							"2"=>"From left to right",
							"3"=>"Opacity effect",
							"4"=>"From top to bottom"
						),
						"value"=>get_option("wpdeva_gall_slide_show_effect_standart",array("0"=>"0","1"=>"1","2"=>"2","3"=>"3","4"=>"4")),
						"function_name"=>"simple_checkbox",
						"pro"=>true,
					),	
					"wpdeva_gall_slide_show_effect_canvas"=>array(
						"title"=>"Canvas effects list",
						"description"=>"Choose what Canvas effects use",
						"values"=>array(
							"0"=>"Effect 0",
							"1"=>"Effect 1",
							"2"=>"Effect 2",
							"3"=>"Effect 3",
							"4"=>"Effect 4",
							"5"=>"Effect 5",
							"6"=>"Effect 6",
							"7"=>"Effect 7",
							"8"=>"Effect 8",
							"9"=>"Effect 9",
							"10"=>"Effect 10",
							"11"=>"Effect 11",
							"12"=>"Effect 12",
							"13"=>"Effect 13",
							"14"=>"Effect 14",
							"15"=>"Effect 15",
							"16"=>"Effect 16",
							"17"=>"Effect 17",
							"18"=>"Effect 18",
							"19"=>"Effect 19",
							"20"=>"Effect 20",
							"21"=>"Effect 21",
							"22"=>"Effect 22",
							"23"=>"Effect 23",
							"24"=>"Effect 24",
							"25"=>"Effect 25",
							"26"=>"Effect 26",
							"27"=>"Effect 27",
						),
						"value"=>get_option("wpdeva_gall_slide_show_effect_canvas",array("0"=>"0","1"=>"1","2"=>"2","3"=>"3","4"=>"4","5"=>"5","6"=>"6","7"=>"7","8"=>"8","9"=>"9","10"=>"10","11"=>"11","12"=>"12","13"=>"13","14"=>"14","15"=>"15","16"=>"16","17"=>"17","18"=>"18","19"=>"19","20"=>"20","21"=>"21","22"=>"22","23"=>"23","24"=>"24","25"=>"25","26"=>"26","27"=>"27",)),
						"type"=>"multiple",
						"function_name"=>"simple_checkbox",
						"pro"=>true,
					),	
					"wpdeva_gall_transition_duration"=>array(
						"title"=>"Slide animation time",
						"description"=>"Type slide animation time",
						"value"=>get_option("wpdeva_gall_transition_duration","700"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(ms)",	
						"pro"=>true,
					),
					
				)
			),
			"popup_select_outside_icons_settings"=>array(
				"heading_name"=>"Popup Previous and Next icons",
				"params"=>array(
					// left right
					"wpdeva_gall_popup_right_icon"=>array(
						"title"=>"Popup Previous and Next icons",
						"description"=>"Select the Previous and Next image icons for Popup",
						"values"=>array(
							"fa fa-arrow-"=>"&#xf060; &#xf061;",
							"fa fa-angle-double-"=>"&#xf100; &#xf101;",
							"fa fa-angle-"=>"&#xf104; &#xf105;",
							"fa fa-chevron-"=>"&#xf053; &#xf054;",							
							"fa fa-arrow-circle-"=>"&#xf0a8; &#xf0a9;",
							"fa fa-arrow-circle-o-"=>"&#xf190; &#xf18e;",
							"fa fa-caret-square-o-"=>"&#xf191; &#xf152;",
							"fa fa-chevron-circle-"=>"&#xf137; &#xf138;",
							"fa fa-hand-o-"=>"&#xf0a5; &#xf0a4;",
							"fa fa-long-arrow-"=>"&#xf177; &#xf178;",
							"wpdeva_gall_display_none"=>"Disable",
						),
						"value"=>get_option("wpdeva_gall_popup_right_icon","fa fa-angle-double-"),
						"function_name"=>"simple_select",
					),
					"wpdeva_gall_popup_icons_color"=>array(
						"title"=>"Previous and Next icons color",
						"description"=>"Selcet Previous and Next icons color",
						"value"=>get_option("wpdeva_gall_popup_icons_color","#006799"),
						"default_value"=>"#006799",
						"function_name"=>"color_input",									
					),
					"wpdeva_gall_popup_right_icon_font_size"=>array(
						"title"=>"Previous and Next icons size",
						"description"=>"Type the Previous and Next icons size",
						"value"=>get_option("wpdeva_gall_popup_right_icon_font_size","36"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",						
					),
					"wpdeva_gall_popup_icon_distance"=>array(
						"title"=>"Previous and Next icons position",
						"description"=>"Type the distance for Previous and Next icons from popup border",
						"value"=>get_option("wpdeva_gall_popup_icon_distance","5"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",						
					),					
				)
			),
			"popup_thumbanils_line_settings"=>array(
				"heading_name"=>"Popup thumbnail line",
				"params"=>array(
					// left right
					"wpdeva_gall_thumbanils_line_visibility"=>array(
						"title"=>"Show popup thumbnail line",
						"description"=>"Choose to show or hide popup thumbnail line",
						"values"=>array("visible"=>'Show',"hidden"=>'hide'),
						"value"=>get_option("wpdeva_gall_thumbanils_line_visibility","visible"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_top"=>array(
						"title"=>"Distance between control bar icons and thumbnail line",
						"description"=>"Type the distance between control bar icons and thumbnail line",
						"value"=>get_option("wpdeva_gall_progress_bar_top","0"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_width"=>array(
						"title"=>"Popup thumbnail line width",
						"description"=>"Select the thumbnail line width",
						"value"=>get_option("wpdeva_gall_progress_bar_width","95"),
						"function_name"=>"range_input",
						"small_text"=>"(%)",
						"pro"=>true,
					),
					"wpdeva_gall_scrubber_height"=>array(
						"title"=>"Active thumbnail line height",
						"description"=>"Type the active thumbnail image line height",
						"value"=>get_option("wpdeva_gall_scrubber_height","2"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_bg_color"=>array(
						"title"=>"Popup thumbnail line color",
						"description"=>"Select the popup thumbnail line color",
						"value"=>get_option("wpdeva_gall_progress_bar_bg_color","#ffffff"),
						"default_value"=>"#ffffff",
						"function_name"=>"color_input",	
						"pro"=>true,
					),
					"wpdeva_gall_scrubber_bg_color"=>array(
						"title"=>"Active image line color",
						"description"=>"Select the active image line color",
						"value"=>get_option("wpdeva_gall_scrubber_bg_color","#559dba"),
						"default_value"=>"#559dba",
						"function_name"=>"color_input",	
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_button_bg_color_click"=>array(
						"title"=>"Viewed image line color",
						"description"=>"Select the viewed image line color",
						"value"=>get_option("wpdeva_gall_progress_bar_button_bg_color_click","#e2b7b7"),
						"default_value"=>"#e2b7b7",
						"function_name"=>"color_input",	
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_button_bg_color_hover"=>array(
						"title"=>"Hovered image line color",
						"description"=>"Select the hovered image line color",
						"value"=>get_option("wpdeva_gall_progress_bar_button_bg_color_hover","#1e73be"),
						"default_value"=>"#1e73be",
						"function_name"=>"color_input",	
						"pro"=>true,
					)											
				)
			),
			"popup_thumbanils_image_settings"=>array(
				"heading_name"=>"Popup thumbnail images",
				"params"=>array(
					// left right
					"wpdeva_gall_progress_bar_screen_width"=>array(
						"title"=>"Width",
						"description"=>"Type the width of Popup thumbnail image",
						"value"=>get_option("wpdeva_gall_progress_bar_screen_width","150"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",	
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_screen_height"=>array(
						"title"=>"Height",
						"description"=>"Type the height of Popup thumbnail image",
						"value"=>get_option("wpdeva_gall_progress_bar_screen_height","100"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_screen_brd_width"=>array(
						"title"=>"Thumbnail border",
						"description"=>"Type the Popup thumbnail border size",
						"value"=>get_option("wpdeva_gall_progress_bar_screen_brd_width","3"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_screen_bottom"=>array(
						"title"=>"Distance between thumbnail line and thumbnail images",
						"description"=>"Type here distance between the thumbnail line(or control bar) and thumbnail images",
						"value"=>get_option("wpdeva_gall_progress_bar_screen_bottom","10"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_screen_brd_color"=>array(
						"title"=>"Thumbnail border color",
						"description"=>"Type the Popup thumbnail border color",
						"value"=>get_option("wpdeva_gall_progress_bar_screen_brd_color","#559dba"),
						"default_value"=>"#559dba",
						"function_name"=>"color_input",	
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_screen_bg_color"=>array(
						"title"=>"Background color of residual space",
						"description"=>"Select the background color of Thumbnail image residual space",
						"value"=>get_option("wpdeva_gall_progress_bar_screen_bg_color","#000000"),
						"default_value"=>"#000000",
						"function_name"=>"color_input",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_screen_opacity"=>array(
						"title"=>"Thumbnail opacity",
						"description"=>"Select the Popup thumbnail opacity",
						"value"=>get_option("wpdeva_gall_progress_bar_screen_opacity","80"),
						"function_name"=>"range_input",
						"small_text"=>"(%)",
						"pro"=>true,
					),
					
				)
			),
			"popup_thumbnail_description_settings"=>array(
				"heading_name"=>"Thumbnail image counter",
				"params"=>array(
					"wpdeva_gall_progress_bar_count_screen_visibility"=>array(
						"title"=>"Show image counter",
						"description"=>"Choose to show or hide image counter",
						"values"=>array("visible"=>'Show',"hidden"=>'hide'),
						"value"=>get_option("wpdeva_gall_progress_bar_count_screen_visibility","visible"),
						"function_name"=>"simple_select",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_count_screen_width"=>array(
						"title"=>"Counter width",
						"description"=>"Type the counter width",
						"value"=>get_option("wpdeva_gall_progress_bar_count_screen_width","40"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_count_screen_height"=>array(
						"title"=>"Counter height",
						"description"=>"Type the counter height ",
						"value"=>get_option("wpdeva_gall_progress_bar_count_screen_height","30"),
						"function_name"=>"simple_input",
						"type"=>"number",
						"small_text"=>"(px)",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_count_screen_bg_color"=>array(
						"title"=>"Counter background color",
						"description"=>"Select the counter background color",
						"value"=>get_option("wpdeva_gall_progress_bar_count_screen_bg_color","#5e5e5e"),
						"default_value"=>"#5e5e5e",
						"function_name"=>"color_input",	
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_count_screen_opacity"=>array(
						"title"=>"Counter opacity",
						"description"=>"Select the counter opacity",
						"value"=>get_option("wpdeva_gall_progress_bar_count_screen_opacity","50"),
						"function_name"=>"range_input",
						"small_text"=>"(%)",
						"pro"=>true,
					),
					"wpdeva_gall_progress_bar_count_screen_color"=>array(
						"title"=>"Numbers text color",
						"description"=>"Select the numbers text color",
						"value"=>get_option("wpdeva_gall_progress_bar_count_screen_color","#FFFFFF"),
						"default_value"=>"#FFFFFF",
						"function_name"=>"color_input",	
						"pro"=>true,
					),
					
				)
			),
		);
	}
	public function controller(){
		$this->save_changes();
		$this->page_view();
	}
	private function save_changes(){

		if(isset($_POST['wpda_gall_popup_page_nonce_name']) && wp_verify_nonce($_POST['wpda_gall_popup_page_nonce_name'],'wpda_gall_popup_page_nonce_action') ){
			foreach($this->options as $params_grup_name =>$params_group_value){ 
				foreach($params_group_value['params'] as $param_name => $param_value){
					if(isset($_POST[$param_name])){
						if(isset($param_value['pro']) && $param_value['pro']==true){
							continue;
						}
						$curent_value=$_POST[$param_name];						
						$this->options[$params_grup_name]['params'][$param_name]['value']=$curent_value;
						update_option($param_name,$curent_value);
					}					
					$this->notification['type']='updated';
					$this->notification['text']='Popup settings successfully saved';
				}
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
			<h2 style="width: 90%;">Popup settings <button class="button button-primary">Save Changes</button><a style="text-decoration:none;float:right;" target="_blank" href="http://wpdevart.com/wordpress-gallery-plugin/"><span style="color: rgba(10, 154, 62, 1);"> (Upgrade to Pro Version)</span></a></h2>
			<?php $this->genererete_notification(); ?>

		</div> 
		
		<div class="wpda_gall_content">
			<div class="wpda_gall_tabs_content">
			<?php
				foreach($this->options as $params_grup_name =>$params_group_value){ 
					echo '<span id="'.$params_grup_name.'_tab">'.$params_group_value['heading_name'].'</span>';
				}
			?>
			</div>
			<form method="post" id="wpda_gall_pupup_form">
				<div class="wpda_gall_main_settings_div">

					<table>
						<?php 
						foreach($this->options as $params_grup_name =>$params_group_value){ 
							wpdevart_gallery_library::create_table_heading($params_group_value['heading_name'],$params_grup_name);
							foreach($params_group_value['params'] as $param_name => $param_value){
								$args=array(
									"name"=>$param_name,
									"heading_name"=>$params_group_value['heading_name'],
									"heading_group"=>$params_grup_name,
								);
								$args=array_merge($args,$param_value);
								$function_name=$param_value['function_name'];
								wpdevart_gallery_library::$function_name($args);
							}
						}

						?>
					</table>
				</div>
				 <?php wp_nonce_field('wpda_gall_popup_page_nonce_action','wpda_gall_popup_page_nonce_name'); ?>
			</form>
			<div class="wpda_gall_map_settings_map">    
				<div id="wpda_gall_wrap_overlay"></div>         
				<div id="wpda_gall_overlay"  title="overlay">                 
					<div id="wpda_gall_bar_icons_out" class="wpda_gall_bar_icons_out" title="bar_icons_out"></div>    	
					<div id="wpda_gall_map_conteiner" class="wpda_gall_map_conteiner">
						<div id="wpda_gall_map_popup" class="wpda_gall_map_popup" title="popup">          
							<img id="wpda_gall_map_popup_img" class="wpda_gall_map_popup_img_content" src="<?php echo wpdevart_gallery_plugin_url; ?>includes/admin/images/popup_map_content.jpg" style="width: 500px; height: 313px;">
							<div id="wpda_gall_map_popup_icon_left_bar" class="wpda_gall_map_popup_icon_left_bar" style="z-index: 10;"  title="popup_left_icon">
								<div class="wpda_gall_map_popup_icon_left_base">
									<i id="wpda_gall_map_popup_icon_left_bar_"  class="fa fa-chevron-left wpda_gall_map_popup_icon_left"></i>
								</div>
							</div>
							<div id="wpda_gall_map_popup_icon_right_bar" class="wpda_gall_map_popup_icon_right_bar" style="z-index: 10; display: inline;"  title="popup_right_icon">
								<div class="wpda_gall_map_popup_icon_right_base">
									<i id="wpda_gall_map_popup_icon_right_bar_" class="fa fa-chevron-right wpda_gall_map_popup_icon_right"></i>
								</div>
							</div>           
							<div dir="ltl" id="wpda_gall_left_bar_icons" class="wpda_gall_left_bar_icons" title="barIconsIn">
								<div id="wpda_gall_map_thumbnail" class="wpda_gall_map_thumbnail" style=" left: 271px; background-image: url(<?php echo wpdevart_gallery_plugin_url; ?>includes/admin/images/popup_map_thumbnail.jpg)" title="screen">
									<div id="wpda_gall_map_thumbnail_count" class="wpda_gall_map_thumbnail_count" title="count_screen">4</div>
								</div>
								<div id="wpda_gall_map_thumbnail_controll_bar" class="wpda_gall_map_thumbnail_controll_bar" title="bar_thumbnail_images">
									<div id="wpda_gall_bar_thumbnail_imgs" class="wpda_gall_bar_thumbnail_imgs" style="height: 6px; top: -1px;">
										<div id="wpda_gall_thumbnail_imgs_1" class="wpda_gall_thumbnail_imgs_" style="width: 20%;">
											<div class="wpda_gall_thumbnail_imgs" style="height: 24px; top: -9px;"></div>
										</div>
										<div id="wpda_gall_thumbnail_imgs_2" class="wpda_gall_thumbnail_imgs_" style="width: 20%;">
											<div class="wpda_gall_thumbnail_imgs" style="height: 24px; top: -9px;"></div>
										</div>
										<div id="wpda_gall_thumbnail_imgs_3" class="wpda_gall_thumbnail_imgs_" style="width: 20%; background-color: rgb(0, 0, 255);">
											<span class="wpda_gall_pntik" style="height: 8px; top: -1px;" title="pntik"></span>
											<div class="wpda_gall_thumbnail_imgs" style="height: 24px; top: -9px;" title="pntik"></div>
										</div>
										<div id="wpda_gall_thumbnail_imgs_" class="wpda_gall_thumbnail_imgs_" style="width: 20%; background-color: rgb(0, 0, 255);" title="thumbnail-image">
											<div class="wpda_gall_thumbnail_imgs" style="height: 24px; top: -9px;" title="thumbnail-image"></div>
										</div>
										<div id="wpda_gall_thumbnail_imgs_4" class="wpda_gall_thumbnail_imgs_" style="width: 20%;">
											<div class="wpda_gall_thumbnail_imgs" style="height: 24px; top: -9px;"></div>
										</div>
									 </div>
								 </div>
								<i id="wpda_gall_left_icon" class="fa fa-arrow-left wpda_gall_class_icon" style="font-size: 14.4px;" title="left_icon"></i>
								<i id="wpda_gall_play_icon" class="fa fa-play wpda_gall_class_icon" style="font-size: 14.4px;" title="play_icon"></i>
								<i id="wpda_gall_right_icon" class="fa fa-arrow-right wpda_gall_class_icon" style="font-size: 14.4px;" title="right_icon"></i>
								<span id="wpda_gall_imgs_count" class="wpda_gall_number_image " style="font-size: 14.4px;" title="imgs_count">3/5</span>
								<div dir="rtl" id="wpda_gall_right_bar_icons" class="wpda_gall_right_bar_icons">
									<i id="wpda_gall_close_icon"  class="fa fa-close wpda_gall_class_icon" style="font-size: 14.4px; margin-right: 12px;" title="close_icon"></i>
									<i id="wpda_gall_setting_icon" class="fa fa-cogs wpda_gall_class_icon" style="font-size: 14.4px;" title="setting_icon"></i>
									<i id="wpda_gall_full_icon"  class="fa fa-expand wpda_gall_class_icon" style="font-size: 14.4px;" title="full_icon"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> 		
		<?php
	}
}