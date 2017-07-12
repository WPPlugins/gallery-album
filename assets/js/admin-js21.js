// JavaScript Document
var wpdeva_gall_window_h = window.innerHeight;
var wpdeva_gall_window_w = document.body.clientWidth;
var wpdeva_gall_wrap_w = document.getElementById("wpdeva_gall_wrap").clientWidth;
 
//adminum settingnere slaidov bacel pakelu funkcianer
jQuery(document).ready(function(){
   
		jQuery("#wpdeva_gall_popup_settings").show();
		jQuery(".wpdeva_gall_table_klass").show();
		jQuery("#wpdeva_gall_popup_settings").css({"right": "420px", "top": "81px"});
		jQuery("#wpdeva_gall_popup_settings_").css({"height": (wpdeva_gall_window_h - 160) + "px"});
  
});

document.getElementById("wpdeva_gall_popup_settings_").appendChild(document.getElementById("wpdeva_gall_admin_form"));       
