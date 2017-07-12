// JavaScript Document
var wpdeva_gall_window_h = window.innerHeight;
var wpdeva_gall_window_w = document.body.clientWidth;
var wpdeva_gall_wrap_w = document.getElementById("wpdeva_gall_wrap").clientWidth;
jQuery(document).ready(function(){
	jQuery("#wpdeva_gall_popup_settings_").css({"height": (wpdeva_gall_window_h - 260) + "px"});
    jQuery( window ).resize(function(){
        wpdeva_gall_window_w = document.body.clientWidth;                       
        wpdeva_gall_window_h = window.innerHeight;		
	    wpdeva_gall_wrap_w = document.getElementById("wpdeva_gall_wrap").clientWidth;
	    wpdeva_gall_wrap_h = document.getElementById("wpdeva_gall_wrap").clientHeight;			
        jQuery("#wpdeva_gall_popup_settings_").css({"height":(wpdeva_gall_window_h - 160) + "px"});		
    });
}); 
jQuery(document).ready(function(){
    jQuery("#wpdeva_gall_close_icon_setting").click(function(){        
		jQuery("#wpdeva_gall_popup_settings").hide();        
    });
}); 
jQuery(document).ready(function(){
    jQuery("#wpdeva_gall_close_icon_").click(function(){        
		jQuery("#wpdeva_gall_popup_settings").hide();        
    });
}); 
//adminum settingnere slaidov bacel pakelu funkcianer
jQuery(document).ready(function(){
    jQuery("#wpdeva_gall_open_icon_setting").click(function(){
		jQuery("#wpdeva_gall_popup_settings").show();
		jQuery(".wpdeva_gall_table_klass").show();
		jQuery("#wpdeva_gall_popup_settings").css({"left": "182px", "top": "81px"});
		jQuery("#wpdeva_gall_popup_settings_").css({"height": (wpdeva_gall_window_h - 160) + "px"});
    });
});
jQuery(document).ready(function(){	
    jQuery("#wpdeva_gall_popup_setting_").hover(function(){
        jQuery("#wpdeva_gall_popup").css("opacity", "0.5"); 
     },
    function(){
         jQuery("#wpdeva_gall_popup").css("opacity", "1");
    });			
});
document.getElementById("wpdeva_gall_popup_settings_").appendChild(document.getElementById("wpdeva_gall_admin_form"));       
var wpdeva_gall_tables = document.getElementsByClassName("wpdeva_gall_table_klass");	                   	         
function wpdeva_gall_show_tables() { 
    var j;
    for(j = 0; j < wpdeva_gall_tables.length; j++) {
        wpdeva_gall_tables[j].style.display = 'inline';
    }
}
function wpdeva_gall_hide_tables() { 
    var j;
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