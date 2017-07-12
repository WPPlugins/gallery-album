// JavaScript Document
var wpdeva_gall_window_h = window.innerHeight;
var wpdeva_gall_window_w = document.body.clientWidth;
var wpdeva_gall_wrap_w =  document.getElementById("wpdeva_gall_wrap").clientWidth;
jQuery(document).ready(function(){

	jQuery("#wpdeva_gall_popup_settings_").css({"width": wpdeva_gall_wrap_w -900 + "px"});
	jQuery("#wpdeva_gall_popup_settings_").css({"height": (wpdeva_gall_window_h - 160) + "px"});
	jQuery("#wpdeva_gall_wrap_overlay").css({"height": (wpdeva_gall_window_h - 0) + "px"});
	//jQuery("#wpdeva_gall_iframe").attr({"height": Math.max(200,(wpdeva_gall_window_h - 160)), "width": Math.max(200, (wpdeva_gall_wrap_w - 825))});
	jQuery("#wpdeva_gall_overlay").css({"height": Math.max(600,(wpdeva_gall_window_h - 160)) + "px", "width":"800px"});	
    jQuery( window ).resize(function(){
        wpdeva_gall_window_w = document.body.clientWidth;                       
        wpdeva_gall_window_h = window.innerHeight;		
	    wpdeva_gall_wrap_w = document.getElementById("wpdeva_gall_wrap").clientWidth;
	    wpdeva_gall_wrap_h = document.getElementById("wpdeva_gall_wrap").clientHeight;			
		//jQuery("#wpdeva_gall_iframe").attr({"height": Math.max(200,(wpdeva_gall_window_h - 160)), "width": Math.max(200,(wpdeva_gall_wrap_w - 825))});
		jQuery("#wpdeva_gall_overlay").css({"height": Math.max(600,(wpdeva_gall_window_h - 160)) + "px", "width":"800px"});
        wpdeva_gall_open_icon_setting111_();		
    });
});
 
 
//adminum settingnere slaidov bacel pakelu funkcianer
jQuery(document).ready(function(){
	jQuery("#wpdeva_gall_open_icon_setting").click(function(){
		wpdeva_gall_open_icon_setting111_();
	});
	jQuery("#wpdeva_gall_wrap_overlay").click(function(){
		wpdeva_gall_open_icon_setting111_();
	});	
});

 function wpdeva_gall_open_icon_setting_() { 
			var wpdeva_gall_window_w = document.body.clientWidth;
			jQuery("#wpdeva_gall_popup_settings").show();
			jQuery(".wpdeva_gall_table_klass").show();
			jQuery("#wpdeva_gall_popup_settings").css({"left": (wpdeva_gall_window_w - 420) + "px", "top": "81px"});
			jQuery("#wpdeva_gall_popup_settings_").css({"height": (wpdeva_gall_window_h - 160) + "px"});
 }

function wpdeva_gall_open_icon_setting111_() {
	wpdeva_gall_close_popup_settings();
	jQuery("#wpdeva_gall_wrap_overlay").css({"height": (wpdeva_gall_window_h - 0) + "px"});
	jQuery("#wpdeva_gall_popup_settings_").css({"height": (wpdeva_gall_window_h - 160) + "px"});
	jQuery("#wpdeva_gall_popup_settings").show();
	jQuery(".wpdeva_gall_table_klass").show();
	jQuery("#wpdeva_gall_popup_settings_").css({"width": wpdeva_gall_wrap_w -900 + "px"});	

	//document.getElementById("wpdeva_gall_popup_settings").setAttribute('style', '');
	//document.getElementById("wpdeva_gall_popup_settings").className = "wpdeva_gall_popup_settings111";
}

window.addEventListener('resize', wpdeva_gall_open_icon_setting111_);

jQuery(document).ready(function(){
    jQuery("#wpdeva_gall_close_icon_settings_").hover(function(){
        jQuery("#wpdeva_gall_close_icon").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_close_icon").css("background-color", "transparent");
    });		
    jQuery("#wpdeva_gall_overlay_settings_").hover(function(){
        jQuery("#wpdeva_gall_overlay").css("background-color", "rgb(0,255,255)");  
     },
    function(){
         jQuery("#wpdeva_gall_overlay").css("background-color", "rgba(0,0,0,0.19)");
    });		
    jQuery("#wpdeva_gall_bar_icons_out_settings_").hover(function(){
        jQuery("#wpdeva_gall_bar_icons_out").css("background-color", "rgb(0,255,255)");  
     },
    function(){
         jQuery("#wpdeva_gall_bar_icons_out").css("background-color", "rgba(0,0,0,0.6)");
    });	
    jQuery("#wpdeva_gall_bar_icons_in_settings_").hover(function(){
        jQuery("#wpdeva_gall_left_bar_icons").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_left_bar_icons").css("background-color", "black");
    });	
    jQuery("#wpdeva_gall_right_icon_settings_").hover(function(){
        jQuery("#wpdeva_gall_left_icon, #wpdeva_gall_right_icon").css("background-color", "rgb(0,255,255)");
     },
    function(){
         jQuery("#wpdeva_gall_left_icon, #wpdeva_gall_right_icon").css("background-color", "transparent");
    });		
    jQuery("#wpdeva_gall_play_icon_settings_").hover(function(){
        jQuery("#wpdeva_gall_play_icon").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_play_icon").css("background-color", "transparent");
    });		
    jQuery("#wpdeva_gall_count_icon_settings_").hover(function(){
        jQuery("#wpdeva_gall_imgs_count").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_imgs_count").css("background-color", "transparent");
    });	
    jQuery("#wpdeva_gall_full_icon_settings_").hover(function(){
        jQuery("#wpdeva_gall_full_icon").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_full_icon").css("background-color", "transparent");
    });		
    jQuery("#wpdeva_gall_slide_settings_, #wpdeva_gall_setting_icon_settings_").hover(function(){
        jQuery("#wpdeva_gall_setting_icon").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_setting_icon").css("background-color", "transparent");
    });			
    jQuery("#wpdeva_gall_popup_right_icon_settings_").hover(function(){
        jQuery("#wpdeva_gall_popup_icon_right_bar_, #wpdeva_gall_popup_icon_left_bar_").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_popup_icon_right_bar_, #wpdeva_gall_popup_icon_left_bar_").css("background-color", "transparent");
    });	
    jQuery("#wpdeva_gall_bar_tumbnail_img_settings_").hover(function(){
        jQuery(".wpdeva_gall_thumbnail_imgs").css({"background-color": "rgb(0,255,255)", "opacity": "0.5"}); 
     },
    function(){
         jQuery(".wpdeva_gall_thumbnail_imgs").css("background-color", "transparent");
    });	
    jQuery("#wpdeva_gall_t_i_screen_settings_").hover(function(){
        jQuery("#wpdeva_gall_t_i_screen").css("opacity", "0.5"); 
     },
    function(){
         jQuery("#wpdeva_gall_t_i_screen").css("opacity", "1");
    });	
    jQuery("#wpdeva_gall_t_i_count_screen_settings_").hover(function(){
        jQuery("#wpdeva_gall_t_i_count_screen").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_t_i_count_screen").css("background-color", "transparent");
    });	
    jQuery("#wpdeva_gall_icons_settings_").hover(function(){
        jQuery("#wpdeva_gall_close_icon, #wpdeva_gall_left_icon, #wpdeva_gall_right_icon, #wpdeva_gall_play_icon, #wpdeva_gall_imgs_count, #wpdeva_gall_full_icon, #wpdeva_gall_setting_icon").css("background-color", "rgb(0,255,255)"); 
     },
    function(){
         jQuery("#wpdeva_gall_close_icon, #wpdeva_gall_left_icon, #wpdeva_gall_right_icon, #wpdeva_gall_play_icon, #wpdeva_gall_imgs_count, #wpdeva_gall_full_icon, #wpdeva_gall_setting_icon").css("background-color", "transparent");
    });		
    jQuery("#wpdeva_gall_popup_setting_").hover(function(){
        jQuery("#wpdeva_gall_popup").css("opacity", "0.5"); 
     },
    function(){
         jQuery("#wpdeva_gall_popup").css("opacity", "1");
    });			
});
/////////                                                                                                      
wpdeva_gall_popup_parent                   = document.getElementById("wpdeva_gall_popup_parent");
wpdeva_gall_popup                          = document.getElementById("wpdeva_gall_popup");
wpdeva_gall_loading_img                    = document.getElementById("wpdeva_gall_loading_img");
wpdeva_gall_popup_img                      = document.getElementById("wpdeva_gall_popup_img");
wpdeva_gall_popup_img_copi                 = document.getElementById("wpdeva_gall_popup_img_copi");	              
wpdeva_gall_overlay                        = document.getElementById("wpdeva_gall_overlay");
wpdeva_gall_close_icon                     = document.getElementById("wpdeva_gall_close_icon");
wpdeva_gall_setting_icon                   = document.getElementById("wpdeva_gall_setting_icon");
wpdeva_gall_play_icon                      = document.getElementById("wpdeva_gall_play_icon");
wpdeva_gall_full_icon                      = document.getElementById("wpdeva_gall_full_icon");	                
wpdeva_gall_imgs_count                     = document.getElementById("wpdeva_gall_imgs_count");
wpdeva_gall_popup_icon_left_bar            = document.getElementById("wpdeva_gall_popup_icon_left_bar");
wpdeva_gall_popup_icon_right_bar           = document.getElementById("wpdeva_gall_popup_icon_right_bar");
wpdeva_gall_popup_icon_left_bar_           = document.getElementById("wpdeva_gall_popup_icon_left_bar_");
wpdeva_gall_popup_icon_right_bar_          = document.getElementById("wpdeva_gall_popup_icon_right_bar_");
wpdeva_gall_right_icon                     = document.getElementById("wpdeva_gall_right_icon");   
wpdeva_gall_left_icon                      = document.getElementById("wpdeva_gall_left_icon");
wpdeva_gall_bar_thumbnail_imgs_base        = document.getElementById("wpdeva_gall_bar_thumbnail_imgs_base");
wpdeva_gall_left_bar_icons                 = document.getElementById("wpdeva_gall_left_bar_icons");	
wpdeva_gall_right_bar_icons                = document.getElementById("wpdeva_gall_right_bar_icons");
wpdeva_gall_t_i_screen                     = document.getElementById("wpdeva_gall_t_i_screen");
wpdeva_gall_t_i_count_screen               = document.getElementById("wpdeva_gall_t_i_count_screen");
wpdeva_gall_bar_icons_out                  = document.getElementById("wpdeva_gall_bar_icons_out");
wpdeva_gall_pntik                          = document.getElementById("wpdeva_gall_pntik");
wpdeva_gall_thumbnail_imgs_                = document.getElementById("wpdeva_gall_thumbnail_imgs_");
///////////	
wpdeva_gall_popup_icon_left_bar.onclick = function(event) {
	setTimeout(function() {
		wpdeva_gall_hide_tables();   

		wpdeva_gall_popup_right_icon_settings.style.display = "inline";
	},100);
}
wpdeva_gall_popup_icon_right_bar.onclick = function(event) {
	setTimeout(function() {
		wpdeva_gall_hide_tables();   

		wpdeva_gall_popup_right_icon_settings.style.display = "inline";
	},100);
} 
wpdeva_gall_left_bar_icons.onclick = function(event) {
	setTimeout(function(){wpdeva_gall_hide_tables();   

	    wpdeva_gall_bar_icons_in_settings.style.display="inline";
	},50);
} 
wpdeva_gall_play_icon.onclick = function(event) {
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_play_icon_settings.style.display = "inline";
	},100);
}
wpdeva_gall_left_icon.onclick = function(event) {
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_right_icon_settings.style.display = "inline";
	},100);
}
wpdeva_gall_right_icon.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_right_icon_settings.style.display = "inline";
	},100);
} 
wpdeva_gall_close_icon.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_close_icon_settings.style.display="inline";
	},100);
}
wpdeva_gall_imgs_count.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   
	
		wpdeva_gall_count_icon_settings.style.display = "inline";
	},200);
} 
wpdeva_gall_setting_icon.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_setting_icon_settings.style.display = "inline";
		wpdeva_gall_icons_settings.style.display = "inline";
		wpdeva_gall_slide_settings.style.display = "inline"; 
	},100);
} 
wpdeva_gall_full_icon.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_full_icon_settings.style.display = "inline";
	},100);
} 
wpdeva_gall_bar_thumbnail_imgs_base.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_bar_tumbnail_img_settings.style.display = "inline";
	},300);
} 
wpdeva_gall_t_i_count_screen.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_t_i_count_screen_settings.style.display = "inline";
	},200);
} 
wpdeva_gall_t_i_screen.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_t_i_screen_settings.style.display = "inline";
	},100);
} 
wpdeva_gall_popup.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_popup_setting.style.display = "inline";
	},40);
} 
wpdeva_gall_bar_icons_out.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();  

		wpdeva_gall_bar_icons_out_settings.style.display = "inline";
	},0);
}	
wpdeva_gall_thumbnail_imgs_.onclick = function(event){
	setTimeout(function(){
		wpdeva_gall_hide_tables();   

		wpdeva_gall_tumbnail_imgs_settings.style.display="inline";
	},500);
} 	
wpdeva_gall_overlay.onclick = function(event){
	wpdeva_gall_hide_tables();   

	wpdeva_gall_overlay_settings.style.display = "inline";
}
////////////////
document.getElementById("wpdeva_gall_popup_settings_").appendChild(document.getElementById("wpdeva_gall_admin_form"));       
var wpdeva_gall_tables = document.getElementsByClassName("wpdeva_gall_table_klass");
//////////////////	                   	         
function wpdeva_gall_show_tables() { 
    var j;
    for(j = 0; j < wpdeva_gall_tables.length; j++) {
        wpdeva_gall_tables[j].style.display = 'inline';
    }
}
function wpdeva_gall_hide_tables() { 
    var j;
	//jQuery("#wpdeva_gall_popup_settings_").css({"width": 400 + "px"});

    for(j = 0; j < wpdeva_gall_tables.length; j++) { 
        wpdeva_gall_tables[j].style.display = 'none';
    }
}
function wpdeva_gall_close_popup_settings() {
    var j;
    for(j = 0; j < wpdeva_gall_tables.length; j++) {
        wpdeva_gall_tables[j].style.display = 'none';
    }
}		         
