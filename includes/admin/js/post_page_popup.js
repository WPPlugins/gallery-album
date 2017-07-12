wpda_gall_post_page_popup={
	tree_info:{},
	lost_elements:[],
	default_gallery_id:'all',
	default_album_id:'all',
	gallery_slect_id:'select_gallery',
	album_select_id:'select_album',
	start:function(){
		this.set_checkbox_checked();
		this.open_close_sections();		
		this.construct_galleryies();
	},
	construct_galleryies:function(){
		var self=this;
		jQuery('#'+self.gallery_slect_id+' option').remove()
		if(self.default_gallery_id=='all'){
			jQuery('#'+self.gallery_slect_id).append('<option selected value="all">All</option>')
		}else{
			jQuery('#'+self.gallery_slect_id).append('<option  value="all">All</option>')
		}
		if(self.default_gallery_id=='all_'){
			jQuery('#'+self.gallery_slect_id).append('<option selected value="all_">All start with button</option>')
		}else{
			jQuery('#'+self.gallery_slect_id).append('<option  value="all_">All start with button</option>')
		}
		jQuery.each(self.tree_info,function(index,value){
			if(self.default_gallery_id==index){
				jQuery('#'+self.gallery_slect_id).append('<option selected value="'+index+'">'+value['name']+'</option>')
			}else{
				jQuery('#'+self.gallery_slect_id).append('<option value="'+index+'">'+value['name']+'</option>')
			}
		})
		self.construct_albums(self.default_gallery_id);
		jQuery('#'+self.gallery_slect_id).change(function(){
			self.construct_albums(jQuery(this).val());
		})
	},
	construct_albums:function(gallery_id){
		var self=this;
		jQuery('#'+self.album_select_id+' option').remove()
		if(self.album_select_id=='all'){
			jQuery('#'+self.album_select_id).append('<option selected value="all">All</option>')
		}else{
			jQuery('#'+self.album_select_id).append('<option  value="all">All</option>')
		}
		if(typeof(self.tree_info[gallery_id])!='undefined')
		jQuery.each(self.tree_info[gallery_id]['albums'],function(index,value){
			if(index!='name'){
				if(self.default_album_id==index){
					jQuery('#'+self.album_select_id).append('<option selected value="'+index+'">'+value+'</option>')
				}else{
					jQuery('#'+self.album_select_id).append('<option value="'+index+'">'+value+'</option>')
				}
			}
		})
	},
	open_close_sections:function(){
		jQuery('.main_parametrs_group_div > .head_panel_div').click(function(){	
			if(jQuery(this).parent().hasClass('closed_params')){
				jQuery(this).siblings().slideDown( "normal" )
				jQuery(this).parent().removeClass('closed_params');
			}
			else{
				jQuery(this).siblings().slideUp( "normal",function(){jQuery(this).parent().addClass('closed_params');} )
			}		
		})
		this.click_checkbox_iside_header();
	},
	click_checkbox_iside_header:function(){
		var self=this;
		jQuery('.gallery_checkbox,.alboms_checkbox').click(function(event){	
			if(jQuery(this).hasClass("gallery_checkbox")){
				if(jQuery(this).prop("checked")){
					jQuery(this).closest('.main_parametrs_group_div').find(".alboms_checkbox").prop("checked",true);
				}else{
					jQuery(this).closest('.main_parametrs_group_div').find(".alboms_checkbox").prop("checked",false);
				}
			}
			if(jQuery(this).hasClass("alboms_checkbox")){
				if(jQuery(this).prop("checked")){					
					jQuery(this).closest('.main_parametrs_group_div').find(".gallery_checkbox").prop("checked",true);
				}else{	
					/*if(!jQuery(this).closest('.main_parametrs_group_div').find(".alboms_checkbox:checked").length>0){
						jQuery(this).closest('.main_parametrs_group_div').find(".gallery_checkbox").prop("checked",false);
					}*/
				}
			}
			self.regenerete_tree();
			event.stopPropagation();
		});
		jQuery('.ch_button').click(function(event){	
			event.stopPropagation();
		});
		self.regenerete_tree();
	},
	regenerete_tree:function(){
		var all_checked_gallerys=jQuery(".gallery_checkbox:checked");
		var new_tree={};
		var lost_elements=[];
		jQuery(".gallery_checkbox:checked").each(function(){
			index_of_gallery=jQuery(this).val();
			new_tree[index_of_gallery]={};
			new_tree[index_of_gallery]["name"]=jQuery(this).attr("data-name");
			new_tree[index_of_gallery]["albums"]={}			
			jQuery(this).closest('.main_parametrs_group_div').find(".alboms_checkbox:checked").each(function(){
				var index_of_albom=jQuery(this).val();
				new_tree[index_of_gallery]["albums"][index_of_albom]=jQuery(this).attr("data-name");
			})
		})
		jQuery(".ch_button input:not(:checked)").each(function(){
			index_of_gallery=jQuery(this).val();
			lost_elements.push(index_of_gallery);			
		})
		this.tree_info=new_tree;
		this.lost_elements=lost_elements;
		this.construct_galleryies();
	},
	set_checkbox_checked:function(){
		for(i=0;i<this.lost_elements.length;i++){
			console.log(this.lost_elements[i])
			jQuery(".ch_button input[value="+this.lost_elements[i]+"]").prop("checked",false);
		}
	}

}
jQuery(document).ready(function(){
	wpda_gall_post_page_popup.start();
})