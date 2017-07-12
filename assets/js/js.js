 ///////////////////////////////////   FUNKCIANERI SAHMANUME
// 1.wpdeva_gall_create_popup()
// 2.wpdeva_gall_create_popup_()
// 3.wpdeva_gall_create_thumbnail_imgs(i)
// 4.wpdeva_gall_restart_resize()
// 5.wpdeva_gall_restart()
// 6.wpdeva_gall_start_popup()
// 7.wpdeva_gall_open_popup()
// 8.wpdeva_gall_Slideshow()
// 9.wpdeva_gall_Slideshow_()
//10.wpdeva_gall_close_popup()
//11.wpdeva_gall_close_popup_overlay()
//12.wpdeva_gall_resurs(t_, z_, e)
//13.wpdeva_gall_onmousemove_thumbnail_imgs(i, j)
//14.wpdeva_gall_click_thumbnail_imgs(i, j)
//15.wpdeva_gall_show_coords_thumbnail_imgs(event)
//16.wpdeva_gall_show_coords_little_imgs(event)
//17.wpdeva_gall_click_img_little(i, j)
//18.wpdeva_gall_ra(i, j)

//19.wpdeva_gall_F0()
//20.wpdeva_gall_F1()
//21.wpdeva_gall_FF0()
//22.wpdeva_gall_FF1()
//23.wpdeva_gall_aftomat()
//24.wpdeva_gall_aftomat1()



 /*1*/
function wpdeva_gall_create_popup() {
    var test = 
    '<div id="wpdeva_gall_overlay" onclick="wpdeva_gall_close_popup_overlay();"></div>' +                  
    '<div id="wpdeva_gall_bar_icons_out" class="wpdeva_gall_bar_icons_out"></div>' +
    '<div id="wpdeva_gall_popup_parent" class="wpdeva_gall_popup_parent">' +
        '<div id="wpdeva_gall_popup" class="wpdeva_gall_popup">' +
	        '<img id="wpdeva_gall_loading_img" src="http://www.pvsm.ru/images/kto-pridumal-indikator-vypolneniya-6.gif" style="position:absolute;left:40px;top:40px;width:128px;height:72px;z-index:100;" />' +                                              	       
	        '<img id="wpdeva_gall_popup_img" class="wpdeva_gall_popup_img0" />' + 
	        '<img id="wpdeva_gall_popup_img_copi" class="wpdeva_gall_popup_img0" />' + 
	        '<canvas id="wpdeva_gall_popup_canvas_copi" class="wpdeva_gall_popup_img0"></canvas>' +	       
		    '<div id="wpdeva_gall_popup_icon_left_bar" class="wpdeva_gall_popup_icon_left_bar" onclick="wpdeva_gall_F1(); wpdeva_gall_effect_ = 1;">' +
		        '<div class="wpdeva_gall_popup_icon_left_base">' +
				    '<i id="wpdeva_gall_p_popup_icon_left_"></i>' +
			    '</div>' +
			'</div>' +
            '<div id="wpdeva_gall_popup_icon_right_bar" class="wpdeva_gall_popup_icon_right_bar" onclick="wpdeva_gall_F0(); wpdeva_gall_effect_ = 2;" >' +
		        '<div class="wpdeva_gall_popup_icon_right_base">' +
				    '<i id="wpdeva_gall_p_popup_icon_right_"></i>' +
				'</div>' +
			'</div>' +	       		   	   		      
		    '<div dir="ltl" id="wpdeva_gall_left_bar_icons" class="wpdeva_gall_left_bar_icons">' +
			    '<div id="wpdeva_gall_t_i_screen"class="wpdeva_gall_t_i_screen">' +
				    '<div id="wpdeva_gall_t_i_count_screen"class="wpdeva_gall_t_i_count_screen">7</div>' +
				'</div>' +
			    '<div id="wpdeva_gall_bar_thumbnail_imgs_base" class="wpdeva_gall_bar_thumbnail_imgs_base"></div>' +
			    '<i id="wpdeva_gall_p_left_icon" onclick="wpdeva_gall_F1(); wpdeva_gall_effect_ = 1;"></i>' +			      
				'<i id="wpdeva_gall_p_play_icon" onclick="wpdeva_gall_aftomat(); wpdeva_gall_effect_ = 0;"></i>' +
			    '<i id="wpdeva_gall_p_right_icon" onclick="wpdeva_gall_F0(); wpdeva_gall_effect_ = 2;"></i>' +
		        '<span id="wpdeva_gall_p_imgs_count" class="wpdeva_gall_number_image ">number nkar</span>' +
			    '<div dir="rtl" id="wpdeva_gall_right_bar_icons" class="wpdeva_gall_right_bar_icons">' +
		            '<i id="wpdeva_gall_p_close_icon" onclick="wpdeva_gall_close_popup();"></i>' +	
				    '<i id="wpdeva_gall_p_setting_icon"></i>' +
		            '<i id="wpdeva_gall_p_full_icon" onclick="wpdeva_gall_FULL();"></i>' +              			
		        '</div>' +
		    '</div>' +           		   	   	   
	    '</div>' +      
    '</div>';	 
    wpdeva_gall_papik = document.createElement("div");               
    document.body.appendChild(wpdeva_gall_papik);
	wpdeva_gall_papik.style.all = "initial";
    wpdeva_gall_papik.innerHTML = test;		                        				                                                                      
    wpdeva_gall_popup_parent                   = document.getElementById("wpdeva_gall_popup_parent");       
    wpdeva_gall_popup                          = document.getElementById("wpdeva_gall_popup");
    wpdeva_gall_loading_img                    = document.getElementById("wpdeva_gall_loading_img");
	wpdeva_gall_popup_img                      = document.getElementById("wpdeva_gall_popup_img");
	wpdeva_gall_popup_img_copi                 = document.getElementById("wpdeva_gall_popup_img_copi");
    wpdeva_gall_canvas                         = document.getElementById("wpdeva_gall_popup_canvas_copi");
	wpdeva_gall_ctx                            = wpdeva_gall_canvas.getContext("2d");               
	wpdeva_gall_overlay                        = document.getElementById("wpdeva_gall_overlay");
	wpdeva_gall_p_close_icon                   = document.getElementById("wpdeva_gall_p_close_icon");
    wpdeva_gall_p_setting_icon                 = document.getElementById("wpdeva_gall_p_setting_icon");
	wpdeva_gall_p_play_icon                    = document.getElementById("wpdeva_gall_p_play_icon");
	wpdeva_gall_p_full_icon                    = document.getElementById("wpdeva_gall_p_full_icon");	                
	wpdeva_gall_p_imgs_count                   = document.getElementById("wpdeva_gall_p_imgs_count");
	wpdeva_gall_popup_icon_left_bar            = document.getElementById("wpdeva_gall_popup_icon_left_bar");
    wpdeva_gall_popup_icon_right_bar           = document.getElementById("wpdeva_gall_popup_icon_right_bar");
	wpdeva_gall_p_popup_icon_left_             = document.getElementById("wpdeva_gall_p_popup_icon_left_");
	wpdeva_gall_p_popup_icon_right_            = document.getElementById("wpdeva_gall_p_popup_icon_right_");
	wpdeva_gall_p_right_icon                   = document.getElementById("wpdeva_gall_p_right_icon");   
	wpdeva_gall_p_left_icon                    = document.getElementById("wpdeva_gall_p_left_icon");
	wpdeva_gall_bar_thumbnail_imgs_base        = document.getElementById("wpdeva_gall_bar_thumbnail_imgs_base");
	wpdeva_gall_left_bar_icons                 = document.getElementById("wpdeva_gall_left_bar_icons");	
	wpdeva_gall_right_bar_icons                = document.getElementById("wpdeva_gall_right_bar_icons");
	wpdeva_gall_t_i_screen                     = document.getElementById("wpdeva_gall_t_i_screen");
	wpdeva_gall_t_i_count_screen               = document.getElementById("wpdeva_gall_t_i_count_screen");
    wpdeva_gall_bar_icons_out                  = document.getElementById("wpdeva_gall_bar_icons_out");																  
    wpdeva_gall_bar_icons_out_cln              = wpdeva_gall_bar_icons_out.cloneNode(true);			                                  
	wpdeva_gall_bar_icons_out_cln.style.zIndex = "100000";								
	wpdeva_gall_papik.appendChild(wpdeva_gall_bar_icons_out_cln);
    document.getElementById("wpdeva_gall_loading_img").src = wpdeva_gall_loadimage;
} 
/*2*/					  							  
function wpdeva_gall_create_popup_() {	      
    if(wpdeva_gall_bar_icons_in_yes_no == 0) {
	    wpdeva_gall_left_bar_icons.className += " wpdeva_gall_left_bar_icons_grad" + wpdeva_gall_icons_top_bottom;
	}	
    wpdeva_gall_p_play_icon.className             = wpdeva_gall_play_icon + " wpdeva_gall_class_icon";	 
	wpdeva_gall_p_setting_icon.className          = wpdeva_gall_setting_icon + " wpdeva_gall_class_icon";	 
    wpdeva_gall_p_right_icon.className            = wpdeva_gall_right_icon + "right wpdeva_gall_class_icon";
    wpdeva_gall_p_left_icon.className             = wpdeva_gall_right_icon + "left wpdeva_gall_class_icon";
	wpdeva_gall_p_close_icon.className            = wpdeva_gall_close_icon + " wpdeva_gall_class_icon";
	wpdeva_gall_p_full_icon.className             = wpdeva_gall_small_icon + " wpdeva_gall_class_icon";
	wpdeva_gall_p_popup_icon_right_.className     = wpdeva_gall_popup_right_icon + "right wpdeva_gall_popup_icon_right";
	wpdeva_gall_p_popup_icon_left_.className      = wpdeva_gall_popup_right_icon + "left wpdeva_gall_popup_icon_left";	  		 
	wpdeva_gall_popup_img.className               = "wpdeva_gall_popup_img" + wpdeva_gall_icons_top_bottom;
    wpdeva_gall_popup_img_copi.className          = "wpdeva_gall_popup_img" + wpdeva_gall_icons_top_bottom;
	wpdeva_gall_canvas.className                  = "wpdeva_gall_popup_img" + wpdeva_gall_icons_top_bottom;			         
    if(wpdeva_gall_icons_top_bottom == 1) {
	    wpdeva_gall_bar_thumbnail_imgs_base.style.top = (wpdeva_gall_bar_icons_height - 4) + "px";
		wpdeva_gall_left_bar_icons.style.top = "0px";
		wpdeva_gall_t_i_screen.style.top = (1 + wpdeva_gall_t_i_screen_bottom+wpdeva_gall_bar_icons_height) + "px";
		wpdeva_gall_t_i_count_screen.style.top = "0px";
	}
	if(wpdeva_gall_pitak_h == 0) { 
		wpdeva_gall_left_bar_icons.className += " wpdeva_gall_opasity_0";
	} else {
		//wpdeva_gall_right_bar_icons.style.backgroundColor = wpdeva_gall_popup_bg_color_;
	}		    
    wpdeva_gall_p_close_icon.style.fontSize       = wpdeva_gall_close_icon_relative_font_size * (wpdeva_gall_bar_icons_height - 4) / 100 + "px";			              
    wpdeva_gall_p_play_icon.style.fontSize        = wpdeva_gall_play_icon_relative_font_size * (wpdeva_gall_bar_icons_height - 4) / 100 + "px";				   				 
	wpdeva_gall_p_full_icon.style.fontSize        = wpdeva_gall_full_icon_relative_font_size * (wpdeva_gall_bar_icons_height - 4) / 100 + "px";				       
	wpdeva_gall_p_left_icon.style.fontSize        = wpdeva_gall_right_icon_relative_font_size * (wpdeva_gall_bar_icons_height - 4) / 100 + "px"; 		        	       
    wpdeva_gall_p_right_icon.style.fontSize       = wpdeva_gall_right_icon_relative_font_size * (wpdeva_gall_bar_icons_height - 4) / 100 + "px"; 		        	           					     					 
	wpdeva_gall_p_imgs_count.style.fontSize       = wpdeva_gall_count_icon_relative_font_size * (wpdeva_gall_bar_icons_height - 4) / 100 + "px";
	wpdeva_gall_p_setting_icon.style.fontSize     = wpdeva_gall_setting_icon_relative_font_size * (wpdeva_gall_bar_icons_height - 4) / 100 + "px";	
	wpdeva_gall_p_close_icon.style.marginRight    = wpdeva_gall_icons_distance + "px";		 
    wpdeva_gall_popup.style.border                = wpdeva_gall_popup_brd;	
	wpdeva_gall_popup.style.boxShadow             = wpdeva_gall_popup_box_shadov;                                    									
    if(wpdeva_gall_icons == "out") {	
        wpdeva_gall_left_bar_icons.appendChild(wpdeva_gall_p_full_icon);
	    wpdeva_gall_left_bar_icons.appendChild(wpdeva_gall_p_setting_icon);
		wpdeva_gall_left_bar_icons.appendChild(wpdeva_gall_p_close_icon);
		wpdeva_gall_left_bar_icons.removeChild(wpdeva_gall_right_bar_icons);
        wpdeva_gall_left_bar_icons.style.textAlign = "center"; 
	    wpdeva_gall_bar_icons_out.appendChild(wpdeva_gall_popup_icon_left_bar); 
	    wpdeva_gall_bar_icons_out.appendChild(wpdeva_gall_popup_icon_right_bar);
	    wpdeva_gall_bar_icons_out.appendChild(wpdeva_gall_left_bar_icons);
        wpdeva_gall_bar_icons_out_cln.className += " wpdeva_gall_bar_icons_out_box_shadow";		
    } else {
		wpdeva_gall_papik.removeChild(wpdeva_gall_bar_icons_out);
		wpdeva_gall_papik.removeChild(wpdeva_gall_bar_icons_out_cln);
	}	 
	wpdeva_gall_restart();				                                      							                                                 
    if(wpdeva_gall_slide_show_effect == 1) {wpdeva_gall_popup.removeChild(wpdeva_gall_canvas);} 
	if(wpdeva_gall_slide_show_effect == 0) {wpdeva_gall_popup.removeChild(wpdeva_gall_popup_img_copi);}
}
/*3*/
function wpdeva_gall_create_thumbnail_imgs(i) {							                     
	wpdeva_gall_bar_thumbnail_imgs = document.createElement("div");
    wpdeva_gall_bar_thumbnail_imgs_base.appendChild(wpdeva_gall_bar_thumbnail_imgs);
	wpdeva_gall_bar_thumbnail_imgs.className = "wpdeva_gall_bar_thumbnail_imgs";
	var j;
    for (j = 0; j < wpdeva_gall_number_imgs[i]; j++) {
        wpdeva_gall_thumbnail_imgs_[j] = document.createElement("div");
	    wpdeva_gall_bar_thumbnail_imgs.appendChild(wpdeva_gall_thumbnail_imgs_[j]);
		wpdeva_gall_thumbnail_imgs_[j].className = "wpdeva_gall_thumbnail_imgs_";	                           
        wpdeva_gall_thumbnail_imgs_[j].style.width = 100 / wpdeva_gall_number_imgs[i] + "%";						  
        wpdeva_gall_thumbnail_imgs[j] = document.createElement("div");
	    wpdeva_gall_thumbnail_imgs_[j].appendChild(wpdeva_gall_thumbnail_imgs[j]);
		wpdeva_gall_thumbnail_imgs[j].className = "wpdeva_gall_thumbnail_imgs";	                                                      						   						   	                     						   
		wpdeva_gall_onmousemove_thumbnail_imgs(i, j);								
	}
	wpdeva_gall_pntik = document.createElement("span");
	wpdeva_gall_pntik.className = "wpdeva_gall_pntik";
	wpdeva_gall_thumbnail_imgs_[0].appendChild(wpdeva_gall_pntik);
    for (j = 0; j < wpdeva_gall_number_imgs[i]; j++) {wpdeva_gall_click_thumbnail_imgs(i, j);} 
} 
//////////////////////////////////////////////////////////////////////////////////////////////////////FUNKCIANERI SAHMANUME	
/*4*/ 	 	 
function wpdeva_gall_restart_resize() {
    if(wpdeva_gall_resize_ == 1) {wpdeva_gall_restart()}
}
/*5*/ 	 	 			
function wpdeva_gall_restart() {
    wpdeva_gall_krz1 = wpdeva_gall_krz1_ = wpdeva_gall_kfull * wpdeva_gall_bar_icons_out_cornice;
    wpdeva_gall_karniz = wpdeva_gall_karniz_ = wpdeva_gall_kfull * wpdeva_gall_popup_base_cornice+wpdeva_gall_popup_brd_width;
    wpdeva_gall_p2_w = wpdeva_gall_full_value * wpdeva_gall_popup_start_width;
    var img_w = wpdeva_gall_t;
    var img_h = wpdeva_gall_z; 
    wpdeva_gall_window_w = document.body.clientWidth + 2 * wpdeva_gall_body_margin;                          ////wpdeva_gall_window_w=document.body.clientWidth;wpdeva_gall_window_w=window.innerWidth;
    wpdeva_gall_window_h = window.innerHeight;
    if(wpdeva_gall_window_w - 2 * wpdeva_gall_karniz_ < 300 || wpdeva_gall_window_h - 2 * wpdeva_gall_karniz_ < 200) {wpdeva_gall_karniz = wpdeva_gall_popup_brd_width; wpdeva_gall_krz1 = 0;} else {wpdeva_gall_karniz = wpdeva_gall_karniz_; wpdeva_gall_krz1 = wpdeva_gall_krz1_}			  
	wpdeva_gall_bar_icons_out.style.left = wpdeva_gall_krz1 + "px";
    wpdeva_gall_bar_icons_out.style.top = wpdeva_gall_krz1 + "px";
	wpdeva_gall_bar_icons_out.style.width = (wpdeva_gall_window_w - 2 * wpdeva_gall_krz1) + "px";
	wpdeva_gall_bar_icons_out.style.height = (wpdeva_gall_window_h - 2 * wpdeva_gall_krz1) + "px";			  			  			  
	wpdeva_gall_bar_icons_out_cln.style.left = wpdeva_gall_krz1 + "px";
    wpdeva_gall_bar_icons_out_cln.style.top = wpdeva_gall_krz1 + "px";
	wpdeva_gall_bar_icons_out_cln.style.width = (wpdeva_gall_window_w - 2 * wpdeva_gall_krz1) + "px";
	wpdeva_gall_bar_icons_out_cln.style.height = (wpdeva_gall_window_h - 2 * wpdeva_gall_krz1) + "px";       
    wpdeva_gall_p1_w = wpdeva_gall_window_w - 2 * wpdeva_gall_karniz;
    wpdeva_gall_p1_h = wpdeva_gall_window_h - 2 * wpdeva_gall_karniz;
    var x_ = Math.min(wpdeva_gall_p1_w, Math.max(wpdeva_gall_p2_w, img_w));
    var y_ = wpdeva_gall_pitak_h + x_ * img_h / img_w;
    y_ = Math.min(wpdeva_gall_p1_h, y_);
    x_ = (y_ - wpdeva_gall_pitak_h) * img_w / img_h;
    img_h = Math.floor(y_ - wpdeva_gall_pitak_h);
    img_w = Math.floor(x_); 			  
    wpdeva_gall_popup_posicia(wpdeva_gall_popup_location, img_w, img_h);	 
    wpdeva_gall_popup.style.left = - wpdeva_gall_popup_brd_width + "px";
    wpdeva_gall_popup.style.top = - wpdeva_gall_popup_brd_width + "px";
    wpdeva_gall_popup.style.width = img_w + "px";
    wpdeva_gall_popup.style.height = (img_h + wpdeva_gall_pitak_h) + "px";		
	wpdeva_gall_popup_img.style.width = img_w + "px";
    wpdeva_gall_popup_img.style.height = img_h + "px"; 
    wpdeva_gall_canvas.style.width = img_w + "px";
    wpdeva_gall_canvas.style.height = img_h + "px";
	wpdeva_gall_canvas.width = img_w + "px";
    wpdeva_gall_canvas.height = img_h + "px";
    wpdeva_gall_popup_img_copi.style.width = img_w + "px";
    wpdeva_gall_popup_img_copi.style.height = img_h + "px";
	wpdeva_gall_loading_img.style.left = (img_w / 2 - 64) + "px";
	wpdeva_gall_loading_img.style.top = (img_h / 2 - 36) + "px";	   
}
/*6*/
function wpdeva_gall_start_popup() { 
    wpdeva_gall_left_bar_icons.style.display = "none";                     
	wpdeva_gall_popup_img.src = wpdeva_gall_imgs_little[wpdeva_gall_d][wpdeva_gall_q].src;
	if(wpdeva_gall_d > 0) {
        wpdeva_gall_popup_img.src = wpdeva_gall_imgs_little[wpdeva_gall_d][wpdeva_gall_q].style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0]; 
    }
    wpdeva_gall_t = wpdeva_gall_popup_start_width + wpdeva_gall_pitak_h;
	wpdeva_gall_z = wpdeva_gall_popup_start_width;            	
    wpdeva_gall_resurs(wpdeva_gall_t, wpdeva_gall_z, wpdeva_gall_popup_start_width);
}
/*7*/			  
function wpdeva_gall_open_popup() {
    var img1 = new Image();
    img1.src = wpdeva_gall_Big_imgs[wpdeva_gall_d][wpdeva_gall_q];     
	wpdeva_gall_loading_img.style.display = "inline";
    var kq = wpdeva_gall_kp;
    img1.onload = function() {
	    if (kq == wpdeva_gall_kp) {		
		    wpdeva_gall_loading_img.style.display = "none"; 		
            wpdeva_gall_t = img1.width;
            wpdeva_gall_z = img1.height;			 
            wpdeva_gall_resurs(wpdeva_gall_t, wpdeva_gall_z, wpdeva_gall_popup_min_width);
			wpdeva_gall_popup_start_width= wpdeva_gall_popup_min_width;
	        img1.style.display = "none";
			wpdeva_gall_popup_img.src = img1.src;
            wpdeva_gall_popup_img_copi.style.opacity = "0";    	                 
            setTimeout(function() {
				wpdeva_gall_popup_icon_left_bar.style.display = "inline";
		        wpdeva_gall_popup_icon_right_bar.style.display = "inline";				                        
				wpdeva_gall_left_bar_icons.style.display = "inline";
				wpdeva_gall_bar_icons_out.style.display = "inline";
				wpdeva_gall_bar_icons_out_cln.style.display = "inline";
				wpdeva_gall_popup_img_copi.src = img1.src;
				wpdeva_gall_popup_img_copi.style.opacity = "1";
            }, wpdeva_gall_transition_duration);
	    }
	}		 		 
}
/*8*/			  			  	 		 
function wpdeva_gall_Slideshow() {  
    wpdeva_gall_canvas.style.display = "inline";	         
    var img = new Image();
    img.src = wpdeva_gall_Big_imgs[wpdeva_gall_d][wpdeva_gall_q];                
	wpdeva_gall_loading_img.style.display = "inline";
	var kq = wpdeva_gall_kp;
    img.onload = function() {
		if(kq == wpdeva_gall_kp) {
			wpdeva_gall_loading_img.style.display = "none";
	        if(wpdeva_gall_icons == "in" ) {	
	            wpdeva_gall_popup_icon_left_bar.style.display = "none";
	            wpdeva_gall_popup_icon_right_bar.style.display = "none";				                        
	            wpdeva_gall_left_bar_icons.style.display  ="none";
	        }
		    if(wpdeva_gall_pak == 0 && wpdeva_gall_play0 == "STOP") {
				setTimeout(function() {wpdeva_gall_aftomat1()}, wpdeva_gall_transition_duration + wpdeva_gall_slayd_duration + wpdeva_gall_pause_duration);
			};
			wpdeva_gall_pak = 1;
		    wpdeva_gall_t = img.width;
            wpdeva_gall_z = img.height;
            wpdeva_gall_resurs(wpdeva_gall_t, wpdeva_gall_z, wpdeva_gall_popup_min_width);	  
	        img.style.display = "none";				  
            setTimeout(function() {
				wpdeva_gall_ctx.drawImage(wpdeva_gall_popup_img, 0, 0, wpdeva_gall_canvas.width, wpdeva_gall_canvas.height);
				wpdeva_gall_canvas.style.zIndex = (wpdeva_gall_z_index - 97) + "";
                wpdeva_gall_popup_img.src = img.src;									     
				wpdeva_gall_EFFECT1(Math.floor(29 * Math.random()));
                wpdeva_gall_popup_icon_left_bar.style.display = "inline";
                wpdeva_gall_popup_icon_right_bar.style.display = "inline";				                        
				wpdeva_gall_left_bar_icons.style.display = "inline";
		        setTimeout(function() {wpdeva_gall_pak = 0;}, wpdeva_gall_slayd_duration );
			}, wpdeva_gall_start_slide * wpdeva_gall_transition_duration);
		}
	}		 		 
}
/*9*/					
function wpdeva_gall_Slideshow_() {
    wpdeva_gall_popup_img_copi.style.display = "inline";	       
    var img = new Image();
    img.src = wpdeva_gall_Big_imgs[wpdeva_gall_d][wpdeva_gall_q];                
	wpdeva_gall_loading_img.style.display = "inline";
	var kq = wpdeva_gall_kp;
    img.onload = function() {
		if(kq == wpdeva_gall_kp) {
			wpdeva_gall_loading_img.style.display = "none";
	        if(wpdeva_gall_icons == "in") {		
	            wpdeva_gall_popup_icon_left_bar.style.display = "none";
	            wpdeva_gall_popup_icon_right_bar.style.display = "none";				                        
	            wpdeva_gall_left_bar_icons.style.display = "none";
	        }
		    if(wpdeva_gall_pak == 0 && wpdeva_gall_play0 == "STOP") {
				setTimeout(function() {wpdeva_gall_aftomat1()}, wpdeva_gall_transition_duration+wpdeva_gall_slayd_duration + wpdeva_gall_pause_duration); 
			};
			wpdeva_gall_pak = 1;
		    wpdeva_gall_t = img.width;
            wpdeva_gall_z = img.height;
            wpdeva_gall_resurs(wpdeva_gall_t, wpdeva_gall_z, wpdeva_gall_popup_min_width);	  	             
		    wpdeva_gall_popup_img.src = img.src;
            wpdeva_gall_popup_img_copi.style.zIndex = (wpdeva_gall_z_index - 98) + "";				   
	        if(wpdeva_gall_effect_ == 0) {wpdeva_gall_EFFECT1_(Math.floor(5 * Math.random())); }			  
	        if(wpdeva_gall_effect_ == 1) {wpdeva_gall_EFFECT1_(1); }
	        if(wpdeva_gall_effect_ == 2) {wpdeva_gall_EFFECT1_(2); }
            setTimeout(function() {
				wpdeva_gall_popup_img_copi.src = img.src;
				img.style.display = "none";
				wpdeva_gall_popup_img_copi.style.opacity = "1";
	            wpdeva_gall_popup_img_copi.style.zIndex = (wpdeva_gall_z_index - 100) + "";
	            wpdeva_gall_popup_img_copi.style.top = wpdeva_gall_icons_top_bottom*wpdeva_gall_pitak_h + "px";
				wpdeva_gall_popup_img_copi.style.left = "0px";
				setTimeout(function() {wpdeva_gall_pak = 0;}, wpdeva_gall_transition_duration);
				wpdeva_gall_popup_icon_left_bar.style.display = "inline";
				wpdeva_gall_popup_icon_right_bar.style.display = "inline";				                        
				wpdeva_gall_left_bar_icons.style.display = "inline"; 
			}, wpdeva_gall_transition_duration);
		}
	}	 		 
}
/*10*/		                                               												                         
function wpdeva_gall_close_popup() {
	wpdeva_gall_popup_start_width = wpdeva_gall_popup_start_width_;
    wpdeva_gall_resize_ = 0;
    wpdeva_gall_left_bar_icons.style.display = "none";
    wpdeva_gall_popup_icon_left_bar.style.display = "none";
    wpdeva_gall_popup_icon_right_bar.style.display = "none";
	wpdeva_gall_bar_icons_out.style.display = "none";
    wpdeva_gall_kp++;
    wpdeva_gall_pak = 0;
    wpdeva_gall_p_play_icon.className = wpdeva_gall_play_icon + " wpdeva_gall_class_icon";
	wpdeva_gall_play0 = "PLAY";
    wpdeva_gall_p_full_icon.className = wpdeva_gall_full_icon + " wpdeva_gall_class_icon";
	if(wpdeva_gall_a == 0) {wpdeva_gall_FULL();}
	wpdeva_gall_t = wpdeva_gall_popup_start_width+wpdeva_gall_pitak_h;
	wpdeva_gall_z = wpdeva_gall_popup_start_width;
	wpdeva_gall_restart();
	setTimeout(function() {
		var object = wpdeva_gall_imgs_little[wpdeva_gall_d][wpdeva_gall_q].getBoundingClientRect();
        var st, x, y;
	    st = document.body.scrollTop ;
		x = object.left + window.pageXOffset;
		y = object.top + window.pageYOffset;
	    if(!document.body.scrollTop) {st = document.documentElement.scrollTop;}
	    if(wpdeva_gall_start_popup_location == 0) {
		    if(wpdeva_gall_popup_position == "absolute") {
			    st = 0; 
		    } else { 
		        x = object.left; y = object.top;
		    };
	    } else {
		if(wpdeva_gall_popup_position == "fixed") {st = 0; };
	}		 
	    switch(wpdeva_gall_start_popup_location) {
		    case 0: {wpdeva_gall_popup_parent.style.left = x + "px";           wpdeva_gall_popup_parent.style.top = y + "px";}; break;       
            case 1: {wpdeva_gall_popup_parent.style.left = 0 + "px";           wpdeva_gall_popup_parent.style.top = st + "px";}; break;
            case 2: {wpdeva_gall_popup_parent.style.left = wpdeva_gall_window_w / 2 + "px";  wpdeva_gall_popup_parent.style.top = st + "px";}; break;
            case 3: {wpdeva_gall_popup_parent.style.left = wpdeva_gall_window_w + "px";      wpdeva_gall_popup_parent.style.top = st + "px";}; break;	
	        case 4: {wpdeva_gall_popup_parent.style.left = 0 + "px";           wpdeva_gall_popup_parent.style.top = wpdeva_gall_window_h / 2 + st + "px";}; break;
	        case 5: {wpdeva_gall_popup_parent.style.left = wpdeva_gall_window_w / 2 + "px";  wpdeva_gall_popup_parent.style.top = wpdeva_gall_window_h / 2 + st + "px";}; break;         
            case 6: {wpdeva_gall_popup_parent.style.left = wpdeva_gall_window_w + "px";      wpdeva_gall_popup_parent.style.top = wpdeva_gall_window_h / 2 + st + "px";}; break;
		    case 7: {wpdeva_gall_popup_parent.style.left = 0 + "px";           wpdeva_gall_popup_parent.style.top = wpdeva_gall_window_h + st + "px";}; break;
		    case 8: {wpdeva_gall_popup_parent.style.left = wpdeva_gall_window_w / 2 + "px";  wpdeva_gall_popup_parent.style.top = wpdeva_gall_window_h + st + "px";}; break;
            case 9: {wpdeva_gall_popup_parent.style.left = wpdeva_gall_window_w + "px";      wpdeva_gall_popup_parent.style.top = wpdeva_gall_window_h + st + "px";}; break;
	    }		 
	}, wpdeva_gall_transition_duration); 	 
	setTimeout(function() {
		wpdeva_gall_overlay.style.display = "none";
		wpdeva_gall_popup_img_copi.style.display = "none";
		wpdeva_gall_canvas.style.display = "none";
		wpdeva_gall_popup_parent.style.WebkitTransition = "all 0s";
	    wpdeva_gall_popup_parent.style.transition = "all 0s";
		wpdeva_gall_popup_parent.style.display = "none";
		wpdeva_gall_papik.innerHTML = ""; 
		document.body.removeChild(wpdeva_gall_papik);
	}, 2*wpdeva_gall_transition_duration);  
}
/*11*/
function wpdeva_gall_close_popup_overlay() {
	wpdeva_gall_popup_start_width = wpdeva_gall_popup_start_width_;
    wpdeva_gall_resize_ = 0;
	wpdeva_gall_left_bar_icons.style.display = "none";
	wpdeva_gall_popup_icon_left_bar.style.display = "none";
	wpdeva_gall_popup_icon_right_bar.style.display = "none";
	wpdeva_gall_bar_icons_out.style.display = "none";            
    wpdeva_gall_kp++;
    wpdeva_gall_pak = 0;
	wpdeva_gall_p_play_icon.className = wpdeva_gall_play_icon + " wpdeva_gall_class_icon";
	wpdeva_gall_play0 = "PLAY";				
	wpdeva_gall_popup_parent.style.WebkitTransform = "rotateY(90deg)";
	wpdeva_gall_popup_parent.style.msTransform = "rotateY(90deg)";
	wpdeva_gall_popup_parent.style.transform = "rotateY(90deg)";
	setTimeout(function() {
		wpdeva_gall_overlay.style.display = "none"; 
		wpdeva_gall_popup_img_copi.style.display = "none"; 
		wpdeva_gall_canvas.style.display = "none";
		wpdeva_gall_p_full_icon.className = wpdeva_gall_full_icon + " wpdeva_gall_class_icon";
		if(wpdeva_gall_a == 0) {wpdeva_gall_FULL();}
		wpdeva_gall_t = wpdeva_gall_popup_start_width + wpdeva_gall_pitak_h;
		wpdeva_gall_z = wpdeva_gall_popup_start_width;
		wpdeva_gall_restart(); wpdeva_gall_papik.innerHTML = "";
		document.body.removeChild(wpdeva_gall_papik);
    }, wpdeva_gall_transition_duration);
}
/*12*/
function wpdeva_gall_resurs(t_, z_, e) {
    wpdeva_gall_krz1 = wpdeva_gall_kfull * wpdeva_gall_bar_icons_out_cornice;
    wpdeva_gall_karniz = wpdeva_gall_kfull * wpdeva_gall_popup_base_cornice + wpdeva_gall_popup_brd_width;
    wpdeva_gall_p2_w = wpdeva_gall_full_value * e;
    if(wpdeva_gall_window_w - 2 * wpdeva_gall_karniz_ < 300 || wpdeva_gall_window_h - 2 * wpdeva_gall_karniz_ < 200) {wpdeva_gall_karniz = wpdeva_gall_popup_brd_width; wpdeva_gall_krz1 = 0;} else {wpdeva_gall_karniz = wpdeva_gall_karniz_; wpdeva_gall_krz1 = wpdeva_gall_krz1_}
    wpdeva_gall_bar_icons_out.style.left = wpdeva_gall_krz1 + "px";
    wpdeva_gall_bar_icons_out.style.top = wpdeva_gall_krz1 + "px";
	wpdeva_gall_bar_icons_out.style.width = (wpdeva_gall_window_w - 2 * wpdeva_gall_krz1) + "px";
	wpdeva_gall_bar_icons_out.style.height = (wpdeva_gall_window_h - 2 * wpdeva_gall_krz1) + "px";
	wpdeva_gall_bar_icons_out_cln.style.left = wpdeva_gall_krz1 + "px";
    wpdeva_gall_bar_icons_out_cln.style.top = wpdeva_gall_krz1 + "px";
	wpdeva_gall_bar_icons_out_cln.style.width = (wpdeva_gall_window_w - 2 * wpdeva_gall_krz1) + "px";
	wpdeva_gall_bar_icons_out_cln.style.height = (wpdeva_gall_window_h - 2 * wpdeva_gall_krz1) + "px";
    wpdeva_gall_p1_w = wpdeva_gall_window_w - 2 * wpdeva_gall_karniz;
    wpdeva_gall_p1_h = wpdeva_gall_window_h - 2 * wpdeva_gall_karniz;
    var x_ = Math.min(wpdeva_gall_p1_w, Math.max(wpdeva_gall_p2_w, t_));
    var y_ = wpdeva_gall_pitak_h + x_ * z_ / t_;
    y_ = Math.min(wpdeva_gall_p1_h, y_);
    x_ = (y_ - wpdeva_gall_pitak_h) * t_ / z_;
    z_ = Math.floor(y_- wpdeva_gall_pitak_h);
    t_ = Math.floor(x_); 			  
    wpdeva_gall_popup_posicia(wpdeva_gall_popup_location, t_, z_);
    wpdeva_gall_popup.style.left = - wpdeva_gall_popup_brd_width + "px";
    wpdeva_gall_popup.style.top = - wpdeva_gall_popup_brd_width + "px";
    wpdeva_gall_popup.style.width = t_ + "px";
    wpdeva_gall_popup.style.height = (z_ + wpdeva_gall_pitak_h) + "px";		 		 
	wpdeva_gall_popup_img.style.width = t_ + "px";
    wpdeva_gall_popup_img.style.height = z_ + "px"; 
	wpdeva_gall_canvas.style.width = t_ + "px";
    wpdeva_gall_canvas.style.height = z_ + "px";
	wpdeva_gall_canvas.width = t_;
    wpdeva_gall_canvas.height = z_;
	wpdeva_gall_canvas.style.zIndex = (wpdeva_gall_z_index - 100) + "";
    wpdeva_gall_popup_img_copi.style.width = t_ + "px";
    wpdeva_gall_popup_img_copi.style.height = z_ + "px";
	wpdeva_gall_loading_img.style.left = (t_ / 2 - 64) + "px";
	wpdeva_gall_loading_img.style.top = (z_ / 2 - 36) + "px";            	   
}
 /*13*/
function wpdeva_gall_onmousemove_thumbnail_imgs(i, j) {
    wpdeva_gall_thumbnail_imgs[j].onmousemove = function(event) {  
	    wpdeva_gall_bar_thumbnail_imgs.style.height = "6px";
	    wpdeva_gall_bar_thumbnail_imgs.style.top = "-1px";
        wpdeva_gall_pntik.style.height = (wpdeva_gall_pntik_height + 6) + "px";
		wpdeva_gall_pntik.style.top = (-wpdeva_gall_pntik_height / 2 ) + "px";
		var b;
		for(b=0; b < wpdeva_gall_number_imgs[i]; b++) {
			wpdeva_gall_thumbnail_imgs[b].style.height = "24px"; 
			wpdeva_gall_thumbnail_imgs[b].style.top = "-9px";
		}					  
        wpdeva_gall_show_coords_thumbnail_imgs(event);
	    wpdeva_gall_t_i_count_screen.innerHTML = (j + 1) + "";
		if(i == 0) {
        wpdeva_gall_t_i_screen.style.backgroundImage = "url(" + wpdeva_gall_imgs_little[i][j].src + ")";		
	    } else {
            wpdeva_gall_t_i_screen.style.backgroundImage = wpdeva_gall_imgs_little[i][j].style.backgroundImage; 
        }		
	}		
    wpdeva_gall_thumbnail_imgs[j].onmouseout = function() {
		wpdeva_gall_bar_thumbnail_imgs.style.height = "4px";
        wpdeva_gall_bar_thumbnail_imgs.style.top = "0px";
        wpdeva_gall_pntik.style.height = "4px";
	    wpdeva_gall_pntik.style.top = "0px";
		for(b = 0; b < wpdeva_gall_number_imgs[i]; b++) {
			wpdeva_gall_thumbnail_imgs[b].style.height = "4px"; 
			wpdeva_gall_thumbnail_imgs[b].style.top = "0px";
		}
		wpdeva_gall_t_i_screen.style.display = "none";
    }
}
/*14*/  
function wpdeva_gall_click_thumbnail_imgs(i, j) {
    wpdeva_gall_thumbnail_imgs[j].addEventListener("click", function(event) {
		wpdeva_gall_q = j - 1;
		wpdeva_gall_F0();
		wpdeva_gall_effect_ = 0;
	})
}
/*15*/      	   	   	   	       
function wpdeva_gall_show_coords_thumbnail_imgs(event) {
    var str = wpdeva_gall_popup_parent.style.left;
    var res = str.slice(0, str.length - 2);
    var point1_style_left = res * 1;
    str = wpdeva_gall_popup.style.width;
    res = str.slice(0, str.length - 2);
    var  kmaxq_style_width=res * 1;
    wpdeva_gall_t_i_screen.style. display = "inline";                                    
    var _x_ = event.clientX;
	if(wpdeva_gall_icons == "in") { 
	    _x_ = Math.min(kmaxq_style_width+point1_style_left - wpdeva_gall_t_i_s_w_ / 2, Math.max(wpdeva_gall_t_i_s_w_ / 2 + point1_style_left, _x_ )); 
        wpdeva_gall_t_i_screen.style.left = (_x_ - point1_style_left - wpdeva_gall_t_i_s_w_ / 2) + "px";
	} else {
		_x_ = Math.min(wpdeva_gall_window_w - wpdeva_gall_krz1 - wpdeva_gall_popup_brd_width - wpdeva_gall_t_i_s_w_ / 2, Math.max(wpdeva_gall_t_i_s_w_ / 2 + wpdeva_gall_krz1 + wpdeva_gall_popup_brd_width, _x_ ));
	    wpdeva_gall_t_i_screen.style.left = (_x_ - wpdeva_gall_krz1 - wpdeva_gall_t_i_s_w_ / 2) + "px";
	}										
}
/*16*/   
function wpdeva_gall_show_coords_little_imgs(event) {
    var st;
	st = document.body.scrollTop ;
	if(!document.body.scrollTop) {st = document.documentElement.scrollTop;}	 
    var x;
    var y;
	if(wpdeva_gall_start_popup_location == 0) {
		if(wpdeva_gall_popup_position == "absolute") {st = 0;};
	} else {
		if(wpdeva_gall_popup_position == "fixed") {st = 0;};
	}
	switch(wpdeva_gall_start_popup_location) {
		case 0: {x = event.pageX; y = event.pageY - st;}; break;       
        case 1: {x = 0; y = st;}; break;
        case 2: {x = wpdeva_gall_window_w / 2; y = st;}; break;
        case 3: {x = wpdeva_gall_window_w; y = st;}; break;	
	    case 4: {x = 0; y = wpdeva_gall_window_h / 2 + st;}; break;
	    case 5: {x = wpdeva_gall_window_w / 2; y = wpdeva_gall_window_h / 2 + st;}; break;         
        case 6: {x = wpdeva_gall_window_w; y = wpdeva_gall_window_h / 2 + st;}; break;
		case 7: {x = 0; y = wpdeva_gall_window_h + st;}; break;
		case 8: {x = wpdeva_gall_window_w / 2; y = wpdeva_gall_window_h + st;}; break;
        case 9: {x = wpdeva_gall_window_w; y = wpdeva_gall_window_h + st;}; break;
	} 	 	 
	wpdeva_gall_popup_parent.style.WebkitTransition = "all 0s";
	wpdeva_gall_popup_parent.style.transition = "all 0s";
	wpdeva_gall_t = wpdeva_gall_popup_start_width+wpdeva_gall_pitak_h;
	wpdeva_gall_z = wpdeva_gall_popup_start_width;
    wpdeva_gall_popup_parent.style.top = (y - wpdeva_gall_popup_start_width / 2) + "px";
	wpdeva_gall_popup_parent.style.left = (x - wpdeva_gall_popup_start_width / 2) + "px";						  
}
/*17*/						 
function wpdeva_gall_click_img_little(i, j) {	
    wpdeva_gall_imgs_little[i][j].onclick = function(event) {
		wpdeva_gall_resize_ = 1; wpdeva_gall_create_popup(); 
		wpdeva_gall_create_popup_();
		wpdeva_gall_kp++;
	    wpdeva_gall_show_coords_little_imgs(event);
		setTimeout(function() {			 
			wpdeva_gall_popup_parent.style.WebkitTransition = "all "+ wpdeva_gall_transition_duration / 1000 + "s";
	        wpdeva_gall_popup_parent.style.transition = "all " + wpdeva_gall_transition_duration / 1000 + "s";
			wpdeva_gall_popup_parent.style.WebkitTransform = "rotateY(0deg)";
			wpdeva_gall_popup_parent.style.msTransform = "rotateY(0deg)";
			wpdeva_gall_popup_parent.style.transform = "rotateY(0deg)";
            wpdeva_gall_p_play_icon.className = wpdeva_gall_play_icon + " wpdeva_gall_class_icon";
		    wpdeva_gall_play0 = "PLAY";
			wpdeva_gall_pak = 0; 
			wpdeva_gall_loading_img.style.display = "none";   
            wpdeva_gall_k = 0; 
			wpdeva_gall_q = j; 
			wpdeva_gall_d = i; 
		    wpdeva_gall_create_thumbnail_imgs(i); 
			wpdeva_gall_ra(i, j);
		    wpdeva_gall_popup_parent.style.display = "inline";		                   
		    wpdeva_gall_start_popup();
			setTimeout(function() {wpdeva_gall_open_popup();}, wpdeva_gall_transition_duration);
		}, 20)
	}           
}
/*18*/	 
function wpdeva_gall_ra(i, j) {
	wpdeva_gall_p_imgs_count.innerHTML = (j + 1) + " " + wpdeva_gall_count_icon + " " + wpdeva_gall_number_imgs[i];
	if(wpdeva_gall_count_icon == "none"){wpdeva_gall_p_imgs_count.style.display = "none";}
	wpdeva_gall_thumbnail_imgs_[j].insertBefore(wpdeva_gall_pntik, wpdeva_gall_thumbnail_imgs[j]);
	wpdeva_gall_thumbnail_imgs_[j].style.backgroundColor = wpdeva_gall_click_thumbnail_img_bg_color; 
}
function wpdeva_gall_FUNCT() {
    if(wpdeva_gall_slide_show_effect == 0) { 
	    wpdeva_gall_Slideshow();
	} else { 
	    wpdeva_gall_Slideshow_();
	}
}		  
function wpdeva_gall_FULL() {
    if(wpdeva_gall_a == 1) {
		wpdeva_gall_full_value = 10000;
		wpdeva_gall_kfull = 0; 
		wpdeva_gall_p_full_icon.className = wpdeva_gall_full_icon + " wpdeva_gall_class_icon"
	} else {
		wpdeva_gall_full_value = 1;
		wpdeva_gall_kfull = 1;
		wpdeva_gall_p_full_icon.className = wpdeva_gall_small_icon + " wpdeva_gall_class_icon";
	}
	wpdeva_gall_a = (wpdeva_gall_a + 1) % 2;
	wpdeva_gall_restart();
} 
//  aj u dzax nkarnere tertelu evente
jQuery(document).ready(function(){
    jQuery("body").keydown(function(){
        if(event.which == "39"){
            wpdeva_gall_F0(); wpdeva_gall_effect_ = 2;
        }
    });
    jQuery("body").keydown(function(){
        if(event.which == "37"){
            wpdeva_gall_F1(); wpdeva_gall_effect_ = 1;
        }
    });  
});
 //aftomatikayi funkcianere	
 /*19*/
function wpdeva_gall_F0() {
	if(wpdeva_gall_pak == 0 && wpdeva_gall_play0 == "PLAY") {
		wpdeva_gall_kp++; 
		wpdeva_gall_k = 0; 
		wpdeva_gall_m = 0; 
		wpdeva_gall_p = wpdeva_gall_q; 
		wpdeva_gall_q = (wpdeva_gall_q + 1) % wpdeva_gall_number_imgs[wpdeva_gall_d]; 
		wpdeva_gall_ra(wpdeva_gall_d, wpdeva_gall_q); wpdeva_gall_FUNCT();
	};
}
 /*20*/
function wpdeva_gall_F1() {
	if(wpdeva_gall_pak == 0 && wpdeva_gall_play0 == "PLAY") {
		wpdeva_gall_kp++; 
		wpdeva_gall_k = 0; 
		wpdeva_gall_m = 0; 
		wpdeva_gall_p = wpdeva_gall_q; 
		wpdeva_gall_q = (wpdeva_gall_q + wpdeva_gall_number_imgs[wpdeva_gall_d] - 1) % wpdeva_gall_number_imgs[wpdeva_gall_d]; 
		wpdeva_gall_ra(wpdeva_gall_d, wpdeva_gall_q); wpdeva_gall_FUNCT();
	};
}
 /*21*/
function wpdeva_gall_FF0() {
	if(wpdeva_gall_pak == 0) {
		wpdeva_gall_kp++; 
		wpdeva_gall_k = 0; 
		wpdeva_gall_m = 0; 
		wpdeva_gall_p = wpdeva_gall_q; 
		wpdeva_gall_q = (wpdeva_gall_q + 1) % wpdeva_gall_number_imgs[wpdeva_gall_d]; 
		wpdeva_gall_ra(wpdeva_gall_d, wpdeva_gall_q); wpdeva_gall_FUNCT();
	};
}
 /*22*/
function wpdeva_gall_FF1() {
	if(wpdeva_gall_pak == 0) {
		wpdeva_gall_pak = 1; 
		wpdeva_gall_kp++; 
		wpdeva_gall_k = 0; 
		wpdeva_gall_m = 0; 
		wpdeva_gall_p = wpdeva_gall_q; 
		wpdeva_gall_q = (wpdeva_gall_q + wpdeva_gall_number_imgs[wpdeva_gall_d] - 1) % wpdeva_gall_number_imgs[wpdeva_gall_d]; 
		wpdeva_gall_ra(wpdeva_gall_d, wpdeva_gall_q); wpdeva_gall_FUNCT();
	};
}
 /*23*/
function wpdeva_gall_aftomat() {
	if(wpdeva_gall_pak == 0 && wpdeva_gall_play0 == "PLAY") {
		wpdeva_gall_play0 = "STOP"; 
		wpdeva_gall_p_play_icon.className = wpdeva_gall_stop_icon + " wpdeva_gall_class_icon"; wpdeva_gall_FF0();
	} else {
	    if(wpdeva_gall_play0 == "STOP") {
			wpdeva_gall_play0 = "PLAY"; 
			wpdeva_gall_p_play_icon.className = wpdeva_gall_play_icon + " wpdeva_gall_class_icon"; 
			wpdeva_gall_pak = 0; wpdeva_gall_loading_img.style.display = "none";
		};
	}
}
/*24*/
function wpdeva_gall_aftomat1() {
	if(wpdeva_gall_pak == 0 && wpdeva_gall_play0 == "STOP") {
		wpdeva_gall_FF0();
	};
} 
 //aftomatikayi funkcianeri verje    
function wpdeva_gall_EFFECT1_(e) {
    if(e == 0) {wpdeva_gall_popup_img_copi.style.top = "-100%";}
    if(e == 1) {wpdeva_gall_popup_img_copi.style.left = "-100%";}
    if(e == 2) {wpdeva_gall_popup_img_copi.style.left = "100%";}         
    if(e == 3) {wpdeva_gall_popup_img_copi.style.opacity = "0";}
    if(e == 4) {wpdeva_gall_popup_img_copi.style.top = "100%";}
	if(e == 5) {wpdeva_gall_popup_img_copi.style.top = "100%";}
}
function wpdeva_gall_EFFECT1(lab) {
	switch(lab) {
        case 0: {return wpdeva_gall_t50(), wpdeva_gall_d00();}; break;        
        case 1: {return wpdeva_gall_t50(), wpdeva_gall_d01();}; break;
        case 2: {return wpdeva_gall_t50(), wpdeva_gall_d02();}; break;
        case 3: {return wpdeva_gall_t50(), wpdeva_gall_d03();}; break;	
	    case 4: {return wpdeva_gall_t50(), wpdeva_gall_d04();}; break;
	    case 5: {return wpdeva_gall_t50(), wpdeva_gall_d05();}; break;         
        case 6: {return wpdeva_gall_t50(), wpdeva_gall_d06();}; break;
		case 7: {return wpdeva_gall_t50(), wpdeva_gall_d07();}; break;
		case 8: {return wpdeva_gall_t50(), wpdeva_gall_d08();}; break;
        case 9: {return wpdeva_gall_t50(), wpdeva_gall_d09();}; break;
		case 10: {return wpdeva_gall_t50(), wpdeva_gall_d10();}; break;				 				
		case 11: {return wpdeva_gall_t50(), wpdeva_gall_d11();}; break;
		case 12: {return wpdeva_gall_t50(), wpdeva_gall_d12();}; break;
		case 13: {return wpdeva_gall_t50(), wpdeva_gall_d13();}; break; 
		case 14: {return wpdeva_gall_t50(), wpdeva_gall_d14();}; break;
		case 15: {return wpdeva_gall_t50(), wpdeva_gall_d15();}; break;
		case 16: {return wpdeva_gall_t50(), wpdeva_gall_d16();}; break;
		case 17: {return wpdeva_gall_t50(), wpdeva_gall_d17();}; break;
		case 18: {return wpdeva_gall_t50(), wpdeva_gall_d18();}; break;
		case 19: {return wpdeva_gall_t50(), wpdeva_gall_d19();}; break;
		case 20: {return wpdeva_gall_t50(), wpdeva_gall_d20();}; break;
		case 21: {return wpdeva_gall_t50(), wpdeva_gall_d21();}; break;
		case 22: {return wpdeva_gall_t50(), wpdeva_gall_d22();}; break;
		case 23: {return wpdeva_gall_t50(), wpdeva_gall_d23();}; break;
		case 24: {return wpdeva_gall_t50(), wpdeva_gall_d24();}; break;
        case 25: {return wpdeva_gall_t50(), wpdeva_gall_d25();}; break;
		case 26: {return wpdeva_gall_t50(), wpdeva_gall_d26();}; break;
		case 27: {return wpdeva_gall_t50(), wpdeva_gall_d27();}; break;
		case 28: {return wpdeva_gall_t50(), wpdeva_gall_d28();}; break;								  							  
 	 	case 29: {return wpdeva_gall_t50(), wpdeva_gall_d28();}; break;
	}
}  
function wpdeva_gall_t50() {wpdeva_gall_d_ = new Date();} 
function wpdeva_gall_d00() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = (canv_w + canv_h) / 2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(canv_w / 2, canv_h / 2);
	wpdeva_gall_ctx.lineTo(canv_d + canv_w / 2, canv_h / 2);
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d, 0, wpdeva_gall_k * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2);  
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2 + canv_d);
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d,  Math.PI / 2, Math.PI / 2 + wpdeva_gall_k * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2); 
	wpdeva_gall_ctx.lineTo(canv_w / 2 - canv_d, canv_h / 2);
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d,  Math.PI, Math.PI + wpdeva_gall_k * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(canv_w/2, canv_h/2);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2 - canv_d);
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d,  3 * Math.PI / 2, 3 * Math.PI / 2 + wpdeva_gall_k * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2);
    wpdeva_gall_ctx.fill(); 
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if(wpdeva_gall_k < 90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11;
		 setTimeout(function() {requestAnimationFrame(wpdeva_gall_d00)}, 15);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}	
}
function wpdeva_gall_d01() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = (canv_w + canv_h) / 2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(canv_w / 2, canv_h / 2);
	wpdeva_gall_ctx.lineTo(canv_w / 2, 0);
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d, - Math.PI/2, - Math.PI / 2 + wpdeva_gall_k * Math.PI / 135);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2);     	
	wpdeva_gall_ctx.lineTo(canv_w / 2 + canv_d * Math.cos(Math.PI / 6), canv_h / 2 + canv_d * Math.sin(Math.PI / 6));
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d, Math.PI / 6, Math.PI / 6 + wpdeva_gall_k * Math.PI / 135);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2);             
	wpdeva_gall_ctx.lineTo(canv_w / 2 - canv_d * Math.cos(Math.PI / 6), canv_h / 2 + canv_d * Math.sin(Math.PI / 6));
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d, 5 * Math.PI / 6,5 * Math.PI / 6 + wpdeva_gall_k * Math.PI / 135);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2);	     
    wpdeva_gall_ctx.fill(); 
    var d1 = new Date(), dk=wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < 90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11;
		 setTimeout(function() {requestAnimationFrame(wpdeva_gall_d01)}, 15);
    } else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d02() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = (canv_w + canv_h) / 2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(canv_w / 2, canv_h / 2);
	wpdeva_gall_ctx.lineTo(canv_w / 2 + canv_d * Math.cos(wpdeva_gall_k * Math.PI / 90), canv_h / 2 - canv_d * Math.sin(wpdeva_gall_k * Math.PI / 90));
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d, -wpdeva_gall_k * Math.PI / 90, wpdeva_gall_k * Math.PI / 90);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2);     
    wpdeva_gall_ctx.fill();	 
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if(wpdeva_gall_k < 90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11; 
		requestAnimationFrame(wpdeva_gall_d02);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);
		wpdeva_gall_pak = 0;
	}
} 
function wpdeva_gall_d03() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = (canv_w + canv_h) / 2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(canv_w / 2, canv_h / 2);
	wpdeva_gall_ctx.lineTo(canv_d + canv_w / 2, canv_h / 2);
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, canv_d, 0, 4 * wpdeva_gall_k * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h / 2);     
    wpdeva_gall_ctx.fill();  
    var d1 = new Date(), dk=wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < 90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11; requestAnimationFrame(wpdeva_gall_d03);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d04() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = (canv_w + canv_h) / 2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(0, canv_h);
	wpdeva_gall_ctx.lineTo(0, -canv_h / 2);
	wpdeva_gall_ctx.arc(0, canv_h, canv_d, 3 * Math.PI / 2, wpdeva_gall_k * Math.PI / 180 + 3 * Math.PI / 2);
	wpdeva_gall_ctx.lineTo(0, canv_h);             
	wpdeva_gall_ctx.lineTo(canv_w, 0);
	wpdeva_gall_ctx.lineTo(canv_w, canv_d);
	wpdeva_gall_ctx.arc(canv_w, 0, canv_d, Math.PI / 2,Math.PI / 2 + wpdeva_gall_k * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(canv_w, 0); wpdeva_gall_ctx.lineTo(0, canv_h);     
    wpdeva_gall_ctx.fill();	    
    var d1 = new Date(), dk=wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < 90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11;
		requestAnimationFrame(wpdeva_gall_d04);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d05() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = (canv_w + canv_h) / 2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(0, 0);
	wpdeva_gall_ctx.lineTo(canv_w, 0);
	wpdeva_gall_ctx.lineTo(canv_w, wpdeva_gall_k / canv_w);
	wpdeva_gall_ctx.lineTo(0, 0);	
	wpdeva_gall_ctx.moveTo(canv_w, canv_h);
	wpdeva_gall_ctx.lineTo(0, canv_h);
	wpdeva_gall_ctx.lineTo(0, canv_h-wpdeva_gall_k / canv_w);
	wpdeva_gall_ctx.lineTo(canv_w, canv_h);
    wpdeva_gall_ctx.fill();   
    var d1 = new Date(), dk=wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) * canv_w * canv_h / 1000 - wpdeva_gall_k;
    if( wpdeva_gall_k < canv_w * canv_h) {
		wpdeva_gall_k += dk;
		requestAnimationFrame(wpdeva_gall_d05);
	} else {wpdeva_gall_ctx.setTransform(1,0,0,1,0,0); 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
		wpdeva_gall_ctx.globalCompositeOperation = "source-over";
	}
}
function wpdeva_gall_d06() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = (canv_w + canv_h) / 2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(0, 0);
	wpdeva_gall_ctx.lineTo(wpdeva_gall_k / canv_h, 0);
	wpdeva_gall_ctx.lineTo(canv_w, canv_h);
	wpdeva_gall_ctx.lineTo(0, wpdeva_gall_k / canv_w); 
    wpdeva_gall_ctx.lineTo(0, 0);
    wpdeva_gall_ctx.fill();   
    var d1 = new Date(), dk=wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) * canv_w * canv_h / 1000 - wpdeva_gall_k;
    if( wpdeva_gall_k < canv_w * canv_h) {
		wpdeva_gall_k += dk;
		requestAnimationFrame(wpdeva_gall_d06);
	} else {
		wpdeva_gall_ctx.setTransform(1,0,0,1,0,0); 
		wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
		wpdeva_gall_ctx.globalCompositeOperation = "source-over";
	}
}
function wpdeva_gall_d07() {
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2));    
    wpdeva_gall_ctx.setTransform(Math.cos((wpdeva_gall_k + 180) * Math.PI / 180), Math.sin((wpdeva_gall_k + 180) * Math.PI / 180), -Math.sin((wpdeva_gall_k + 180) * Math.PI / 180), Math.cos((wpdeva_gall_k + 180) * Math.PI / 180), 0, 0);	
    wpdeva_gall_ctx.clearRect(-canv_d, 0, canv_d, canv_d);
	var d1 = new Date();
    if( wpdeva_gall_k < 90) {wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11;
	    requestAnimationFrame(wpdeva_gall_d07);
	} else {
		wpdeva_gall_ctx.setTransform(1,0,0,1,0,0);
		wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);  
		wpdeva_gall_pak = 0;
	}   
}
 function wpdeva_gall_d08() {
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2));    
    wpdeva_gall_ctx.setTransform(Math.cos(wpdeva_gall_k * Math.PI / 180), Math.sin(wpdeva_gall_k * Math.PI / 180), -Math.sin(wpdeva_gall_k * Math.PI / 180), Math.cos(wpdeva_gall_k * Math.PI / 180), canv_w, canv_h);
    wpdeva_gall_ctx.clearRect(-canv_d, 0, canv_d, canv_d);       
    var d1 = new Date();
    if( wpdeva_gall_k < 90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11;
		requestAnimationFrame(wpdeva_gall_d08);
	} else {wpdeva_gall_ctx.setTransform(1,0,0,1,0,0);
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);  
		wpdeva_gall_pak = 0;
	}   
}  
 function wpdeva_gall_d09() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = (canv_w + canv_h) /  2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(0, 0);
	wpdeva_gall_ctx.lineTo(canv_d, 0);
	wpdeva_gall_ctx.arc(0, 0, canv_d, 0, wpdeva_gall_k * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(0, 0);       
	wpdeva_gall_ctx.moveTo(canv_w, canv_h);
	wpdeva_gall_ctx.lineTo(canv_w-canv_d, canv_h);
	wpdeva_gall_ctx.arc(canv_w, canv_h, canv_d, Math.PI,Math.PI+ wpdeva_gall_k * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(canv_w, canv_h);     
    wpdeva_gall_ctx.fill();	    
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k<90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11;
		requestAnimationFrame(wpdeva_gall_d09);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d10() {
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2));    
    wpdeva_gall_ctx.setTransform(Math.cos(wpdeva_gall_k * Math.PI / 180), -Math.sin(wpdeva_gall_k * Math.PI / 180), Math.sin(wpdeva_gall_k * Math.PI / 180), Math.cos(wpdeva_gall_k * Math.PI / 180), canv_w, 0);
    wpdeva_gall_ctx.clearRect(-canv_d, 0, canv_d, -canv_d);
    wpdeva_gall_ctx.setTransform(Math.cos((wpdeva_gall_k + 180) * Math.PI / 180), Math.sin((wpdeva_gall_k + 180) * Math.PI / 180), -Math.sin((wpdeva_gall_k + 180) * Math.PI / 180), Math.cos((wpdeva_gall_k + 180) * Math.PI / 180), 0, 0);
    wpdeva_gall_ctx.clearRect(-canv_d, 0, canv_d, canv_d);
    var d1 = new Date();
    if( wpdeva_gall_k < 90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11;
		requestAnimationFrame(wpdeva_gall_d10);
	} else {wpdeva_gall_ctx.setTransform(1,0,0,1,0,0);
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);
		wpdeva_gall_pak = 0;
	}   
}
function wpdeva_gall_d11() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w / 2, 2) + Math.pow(canv_h, 2)); 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.moveTo(canv_w / 2, canv_h);
	wpdeva_gall_ctx.lineTo(canv_w / 2 - canv_d, canv_h);
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h, canv_d,  Math.PI, Math.PI + (wpdeva_gall_k + 1) * Math.PI / 180);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h);
	wpdeva_gall_ctx.lineTo(canv_w / 2 + canv_d, canv_h);
	wpdeva_gall_ctx.arc(canv_w / 2, canv_h, canv_d, 0, 2 * Math.PI- (wpdeva_gall_k + 1) * Math.PI / 180,true);
	wpdeva_gall_ctx.lineTo(canv_w / 2, canv_h);
    wpdeva_gall_ctx.fill();	 
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < 90) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 11;
		requestAnimationFrame(wpdeva_gall_d11);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
} 
function wpdeva_gall_d12() {
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height;
    wpdeva_gall_ctx.shadowBlur = 10;
    wpdeva_gall_ctx.shadowOffsetX = 15;
    wpdeva_gall_ctx.shadowOffsetY = 15;
    wpdeva_gall_ctx.shadowColor = "white";
    wpdeva_gall_ctx.fillRect(-20, -20, wpdeva_gall_k * (canv_w + 20) / 100, wpdeva_gall_k * (canv_h + 20) / 100);
    wpdeva_gall_ctx.clearRect(-20, -20, wpdeva_gall_k * (canv_w + 20) / 100, wpdeva_gall_k * (canv_h + 20) / 100);
	var d1 = new Date();
    if( wpdeva_gall_k < 100) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 10;
		requestAnimationFrame(wpdeva_gall_d12);
	} else {
		wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);  
		wpdeva_gall_pak=0;
	}
}
function wpdeva_gall_d13() {
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height;
    wpdeva_gall_ctx.shadowBlur = 10;
    wpdeva_gall_ctx.shadowOffsetX = 15;
    wpdeva_gall_ctx.shadowColor = "white";
    wpdeva_gall_ctx.fillRect(-20, -20, wpdeva_gall_k * (canv_w + 20) / 100, (canv_h + 20));
    wpdeva_gall_ctx.clearRect(-20, -20, wpdeva_gall_k * (canv_w + 20) / 100, (canv_h + 20));
	var d1 = new Date();
    if( wpdeva_gall_k < 100) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 10;
		requestAnimationFrame(wpdeva_gall_d13);
	} else {
		wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);  
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d14() {
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height;
    wpdeva_gall_ctx.shadowBlur = 60;
    wpdeva_gall_ctx.shadowOffsetX = 0;
    wpdeva_gall_ctx.shadowColor = "white";
    wpdeva_gall_ctx.fillRect(canv_w / 2 * (1 - wpdeva_gall_k / 100), 0, wpdeva_gall_k * canv_w / 100, canv_h);
    wpdeva_gall_ctx.clearRect(canv_w / 2 * (1 - wpdeva_gall_k / 100), 0, wpdeva_gall_k * canv_w / 100, canv_h);
	var d1 = new Date();
    if( wpdeva_gall_k < 100) {
		wpdeva_gall_k = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 10;
		requestAnimationFrame(wpdeva_gall_d14);
	} else {wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);  
	    wpdeva_gall_pak=0;
	}
}
function wpdeva_gall_d15() {
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height;
    wpdeva_gall_ctx.shadowBlur = 60;
    wpdeva_gall_ctx.shadowOffsetX = 0;
    wpdeva_gall_ctx.shadowOffsetY = 0;
    wpdeva_gall_ctx.shadowColor = "white";
    wpdeva_gall_ctx.fillRect(canv_w / 2 * (1 - wpdeva_gall_k / 100), canv_h / 2 * (1 - wpdeva_gall_k / 100), canv_w * wpdeva_gall_k / 100, canv_h * wpdeva_gall_k / 100);
    wpdeva_gall_ctx.clearRect(canv_w / 2 * (1 - wpdeva_gall_k / 100), canv_h / 2 * (1 - wpdeva_gall_k / 100), canv_w * wpdeva_gall_k / 100, canv_h * wpdeva_gall_k / 100);
    var d1 = new Date(), dk = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 10 - wpdeva_gall_k;
    if( wpdeva_gall_k < 100) {
		wpdeva_gall_k += dk;
		requestAnimationFrame(wpdeva_gall_d15);
	} else {
		wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);  
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d16() { 
    var j, canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)); 
    wpdeva_gall_ctx.globalCompositeOperation = "source-over";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;
	wpdeva_gall_ctx.shadowOffsetX = 30;
    wpdeva_gall_ctx.shadowOffsetY =30;
    wpdeva_gall_ctx.shadowColor = "white";
    wpdeva_gall_ctx.arc(wpdeva_gall_k * canv_w / (4 * canv_d), wpdeva_gall_k * canv_h / (4 * canv_d), wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();		 
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.globalCompositeOperation = "xor";
    wpdeva_gall_ctx.shadowBlur = 0;
    wpdeva_gall_ctx.shadowOffsetX = 0;
    wpdeva_gall_ctx.shadowOffsetY =0;
    wpdeva_gall_ctx.arc(wpdeva_gall_k * canv_w / (4 * canv_d), wpdeva_gall_k * canv_h / (4 * canv_d), wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < canv_d) {wpdeva_gall_k = wpdeva_gall_sol * dk * dk / canv_d;
	    requestAnimationFrame(wpdeva_gall_d16);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d17() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)) / 2;
    wpdeva_gall_ctx.globalCompositeOperation = "source-over";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;
    wpdeva_gall_ctx.shadowColor = "yellow";
    wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();		 
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.shadowBlur = 0;
    wpdeva_gall_ctx.shadowColor = "white";       
    wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < canv_d) {
		wpdeva_gall_k = wpdeva_gall_sol * dk * dk / canv_d;
		requestAnimationFrame(wpdeva_gall_d17);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d18() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)) / 2; 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;
    wpdeva_gall_ctx.shadowColor = "white";
    wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();  
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < canv_d) {
		wpdeva_gall_k = wpdeva_gall_sol * dk * dk / canv_d;
		requestAnimationFrame(wpdeva_gall_d18);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d19() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)) / 2;
    wpdeva_gall_ctx.globalCompositeOperation = "source-over";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;     
    wpdeva_gall_ctx.shadowColor = "white"; 
    wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 0;
    wpdeva_gall_ctx.shadowColor = "white";       
    wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();           
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < canv_d) {
		wpdeva_gall_k = wpdeva_gall_sol * dk * dk / canv_d;
		requestAnimationFrame(wpdeva_gall_d19);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
 function wpdeva_gall_d20() {     
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)) / 2;          
    wpdeva_gall_ctx.setTransform(canv_w * Math.cos(45 * Math.PI / 180) / canv_h, Math.sin(45 * Math.PI / 180), -canv_w * Math.sin(45 * Math.PI / 180) / canv_h, Math.cos(45 * Math.PI / 180), canv_w / 2, canv_h / 2);
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;
    wpdeva_gall_ctx.shadowOffsetX = 0;
    wpdeva_gall_ctx.shadowOffsetY = 0;
    wpdeva_gall_ctx.shadowColor = "white";     
    wpdeva_gall_ctx.fillRect(-wpdeva_gall_k, -wpdeva_gall_k, 2 * wpdeva_gall_k, 2 * wpdeva_gall_k);
    wpdeva_gall_ctx.clearRect(-wpdeva_gall_k, -wpdeva_gall_k, 2 * wpdeva_gall_k, 2 * wpdeva_gall_k);   
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000 - wpdeva_gall_k;   
    if( wpdeva_gall_k < 1.1 * canv_d) {
		wpdeva_gall_k += dk;
		requestAnimationFrame(wpdeva_gall_d20);
	} else {wpdeva_gall_ctx.setTransform(1,0,0,1,0,0); 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
 function wpdeva_gall_d21() {     
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)) / 2;          
    wpdeva_gall_ctx.setTransform(canv_w * Math.cos((70 * wpdeva_gall_k / canv_d + 45) * Math.PI / 180) / canv_h, Math.sin((70 * wpdeva_gall_k / canv_d + 45) * Math.PI / 180), -canv_w * Math.sin((70 * wpdeva_gall_k / canv_d + 45) * Math.PI / 180) / canv_h, Math.cos((70 * wpdeva_gall_k / canv_d + 45) * Math.PI / 180), canv_w / 2, canv_h / 2);
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;
    wpdeva_gall_ctx.shadowOffsetX = 0;
    wpdeva_gall_ctx.shadowOffsetY = 0;
    wpdeva_gall_ctx.shadowColor = "white";     
    wpdeva_gall_ctx.fillRect(-wpdeva_gall_k, -wpdeva_gall_k, 2 * wpdeva_gall_k, 2 * wpdeva_gall_k);
    wpdeva_gall_ctx.clearRect(-wpdeva_gall_k, -wpdeva_gall_k, 2 * wpdeva_gall_k, 2 * wpdeva_gall_k);  
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000 - wpdeva_gall_k;   
    if( wpdeva_gall_k < 1.1 * canv_d) {
		wpdeva_gall_k += dk;
		requestAnimationFrame(wpdeva_gall_d21);
	} else {wpdeva_gall_ctx.setTransform(1,0,0,1,0,0); 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
    function wpdeva_gall_d22() { 
    var j, canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)); 
    wpdeva_gall_ctx.globalCompositeOperation = "source-over";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;
	wpdeva_gall_ctx.shadowOffsetX = -30;
    wpdeva_gall_ctx.shadowOffsetY = 30;
    wpdeva_gall_ctx.shadowColor = "white";       
    wpdeva_gall_ctx.arc(canv_w, 0, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();		 
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.globalCompositeOperation = "xor";
    wpdeva_gall_ctx.shadowBlur = 0;
    wpdeva_gall_ctx.shadowOffsetX = 0;
    wpdeva_gall_ctx.shadowOffsetY =0;      
    wpdeva_gall_ctx.arc(canv_w, 0, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < canv_d) {wpdeva_gall_k = wpdeva_gall_sol * dk * dk / canv_d;
	    requestAnimationFrame(wpdeva_gall_d22);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
} 
function wpdeva_gall_d23() { 
    var j, canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)); 
    wpdeva_gall_ctx.globalCompositeOperation = "source-over";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;	 
    wpdeva_gall_ctx.shadowColor = "yellow";      
    wpdeva_gall_ctx.arc(canv_w / 2, 0, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();		 
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.globalCompositeOperation = "xor";
    wpdeva_gall_ctx.shadowBlur = 0;            
    wpdeva_gall_ctx.arc(canv_w / 2, 0, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < canv_d) {
		wpdeva_gall_k = wpdeva_gall_sol * dk * dk / canv_d;
		requestAnimationFrame(wpdeva_gall_d23);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}	
function wpdeva_gall_d24() { 
    var j, canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)); 		 
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.globalCompositeOperation = "destination-out";            
    wpdeva_gall_ctx.arc(canv_w / 2, canv_h / 2, wpdeva_gall_k, 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < canv_d) {wpdeva_gall_k = wpdeva_gall_sol * dk * dk / canv_d;
	    requestAnimationFrame(wpdeva_gall_d24);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	}
}
function wpdeva_gall_d25() { 
    var canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w / 3, 2) + Math.pow(canv_h / 2, 2)); 
    wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.beginPath();	
	wpdeva_gall_ctx.arc(canv_w / 6, canv_h / 4, wpdeva_gall_k, 0, 2 * Math.PI);	
	wpdeva_gall_ctx.arc(canv_w / 3 + canv_w / 6, canv_h / 4, Math.max(0, wpdeva_gall_k - canv_d / 8), 0, 2 * Math.PI);
	wpdeva_gall_ctx.arc(2 * canv_w / 3 + canv_w / 6, canv_h / 4, Math.max(0, wpdeva_gall_k - canv_d / 7), 0, 2 * Math.PI);
	wpdeva_gall_ctx.moveTo(canv_w / 6, 3 * canv_h / 4);
	wpdeva_gall_ctx.arc(canv_w / 6, 3 * canv_h / 4, Math.max(0, wpdeva_gall_k - canv_d / 6), 0, 2 * Math.PI);	
	wpdeva_gall_ctx.arc(canv_w / 3 + canv_w / 6, 3 * canv_h / 4, Math.max(0, wpdeva_gall_k - canv_d / 5), 0, 2 * Math.PI);
	wpdeva_gall_ctx.arc(2 * canv_w / 3 + canv_w / 6, 3 * canv_h / 4, Math.max(0, wpdeva_gall_k - canv_d / 4), 0, 2 * Math.PI);
    wpdeva_gall_ctx.fill();   
    var d1 = new Date(), dk = wpdeva_gall_sol * canv_d * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000;
    if( wpdeva_gall_k < 5 * canv_d / 4){
		wpdeva_gall_m++;
		wpdeva_gall_k += dk / wpdeva_gall_m;
		requestAnimationFrame(wpdeva_gall_d25);
	} else {
		wpdeva_gall_ctx.setTransform(1,0,0,1,0,0); 
		wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
	    wpdeva_gall_ctx.globalCompositeOperation = "source-over";
	}
}
function wpdeva_gall_d26() { 
    var j, canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)); 
    wpdeva_gall_ctx.globalCompositeOperation = "source-over";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;	
    wpdeva_gall_ctx.shadowColor = "white";
	wpdeva_gall_ctx.moveTo(0, 0);
	wpdeva_gall_ctx.lineTo((1 + wpdeva_gall_k) * canv_w / 2, (1 - wpdeva_gall_k) * canv_h / 2);
    wpdeva_gall_ctx.lineTo(canv_w, canv_h);
    wpdeva_gall_ctx.lineTo((1 - wpdeva_gall_k) * canv_w / 2, (1 + wpdeva_gall_k) * canv_h / 2);
	wpdeva_gall_ctx.lineTo(0, 0);
    wpdeva_gall_ctx.fill();		 
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.shadowBlur = 0;
    wpdeva_gall_ctx.moveTo(0, 0);
	wpdeva_gall_ctx.lineTo((1 + wpdeva_gall_k) * canv_w / 2, (1 - wpdeva_gall_k) * canv_h / 2);
    wpdeva_gall_ctx.lineTo(canv_w, canv_h);
	wpdeva_gall_ctx.lineTo((1 - wpdeva_gall_k) * canv_w / 2,(1 + wpdeva_gall_k) * canv_h / 2);
	wpdeva_gall_ctx.lineTo(0, 0);
    wpdeva_gall_ctx.fill();
    var d1 = new Date(), dk = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000 - wpdeva_gall_k;
    if( wpdeva_gall_k < 1) {
		wpdeva_gall_k += dk;
		requestAnimationFrame(wpdeva_gall_d26);
	} else { 
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
		wpdeva_gall_ctx.globalCompositeOperation = "source-over";
	}
}
function wpdeva_gall_d27() { 
    var j, canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2)); 
    wpdeva_gall_ctx.globalCompositeOperation = "source-over";
    wpdeva_gall_ctx.beginPath();
    wpdeva_gall_ctx.shadowBlur = 100;	
    wpdeva_gall_ctx.shadowColor = "white";
	wpdeva_gall_ctx.moveTo(0, 0);
	wpdeva_gall_ctx.lineTo(canv_w / 2, (1 - wpdeva_gall_k) * canv_h / 2);
	wpdeva_gall_ctx.lineTo(canv_w, 0);
	wpdeva_gall_ctx.lineTo((1 + wpdeva_gall_k) * canv_w / 2, canv_h / 2);
    wpdeva_gall_ctx.lineTo(canv_w, canv_h);
	wpdeva_gall_ctx.lineTo(canv_w / 2, (1 + wpdeva_gall_k) * canv_h / 2);
	wpdeva_gall_ctx.lineTo(0, canv_h);
	wpdeva_gall_ctx.lineTo((1 - wpdeva_gall_k) * canv_w / 2, canv_h / 2);
	wpdeva_gall_ctx.lineTo(0, 0);
    wpdeva_gall_ctx.fill();		 
    wpdeva_gall_ctx.beginPath();
	wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    wpdeva_gall_ctx.moveTo(0, 0);
	wpdeva_gall_ctx.lineTo(canv_w / 2, (1 - wpdeva_gall_k) * canv_h/2);
	wpdeva_gall_ctx.lineTo(canv_w, 0);
	wpdeva_gall_ctx.lineTo((1 + wpdeva_gall_k) * canv_w / 2, canv_h / 2);
    wpdeva_gall_ctx.lineTo(canv_w, canv_h);
    wpdeva_gall_ctx.lineTo(canv_w / 2, (1 + wpdeva_gall_k) * canv_h / 2);
	wpdeva_gall_ctx.lineTo(0, canv_h);
	wpdeva_gall_ctx.lineTo((1 - wpdeva_gall_k) * canv_w / 2, canv_h / 2);
	wpdeva_gall_ctx.lineTo(0, 0);
    wpdeva_gall_ctx.fill();
    var d1 = new Date(), dk = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 1000 - wpdeva_gall_k;
    if( wpdeva_gall_k < 1) {
		wpdeva_gall_k += dk;
		requestAnimationFrame(wpdeva_gall_d27);
	} else { 
		wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h); 
		wpdeva_gall_pak = 0;
		wpdeva_gall_ctx.globalCompositeOperation = "source-over";
	}
} 
function wpdeva_gall_d28() { 
    var j, canv_w = wpdeva_gall_canvas.width, canv_h = wpdeva_gall_canvas.height, canv_d = Math.sqrt(Math.pow(canv_w, 2) + Math.pow(canv_h, 2));  		 
    wpdeva_gall_ctx.beginPath(); 
	wpdeva_gall_ctx.globalCompositeOperation = "destination-out";
    for(j = 0; j < 12; j++) {
	    wpdeva_gall_ctx.moveTo((j + Math.max(0, (wpdeva_gall_k - 1 + 0.1 * j))) * canv_w / 10, 0);
	    wpdeva_gall_ctx.lineTo((j - Math.max(0, (wpdeva_gall_k - 1 + 0.1 * j))) * canv_w / 10, 0); wpdeva_gall_ctx.quadraticCurveTo((j - Math.max(0, (wpdeva_gall_k - 1 + 0.1 * j)) - 0.5) * canv_w / 10, canv_h / 2, (j - Math.max(0, (wpdeva_gall_k -1 + 0.1 * j))) * canv_w / 10, canv_h);
	    wpdeva_gall_ctx.lineTo((j + Math.max(0, (wpdeva_gall_k - 1 + 0.1 * j))) * canv_w / 10, canv_h); wpdeva_gall_ctx.quadraticCurveTo((j + Math.max(0, (wpdeva_gall_k - 1 + 0.1 * j)) - 0.5) * canv_w / 10, canv_h / 2, (j + Math.max(0, (wpdeva_gall_k - 1 + 0.1 * j))) * canv_w / 10, 0);	 
        wpdeva_gall_ctx.fill();
    }
    var d1 = new Date(), dk = wpdeva_gall_sol * (d1.getTime() - wpdeva_gall_d_.getTime()) / 500 - wpdeva_gall_k;
    if(wpdeva_gall_k < 2) {
		wpdeva_gall_k += dk;
		requestAnimationFrame(wpdeva_gall_d28);
	} else {
	    wpdeva_gall_ctx.clearRect(0, 0, canv_w, canv_h);
		wpdeva_gall_pak = 0;
		wpdeva_gall_ctx.globalCompositeOperation = "source-over";
	}
} 