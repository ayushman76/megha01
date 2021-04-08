import service from '../export/treatment_feature.js';
 

var arr = new service('images/appendix_treatment_meghani_nursing_home_in_bilaspur.jpg','Appendix');
var arr01 = new service('images/gallbladder-stone-treatment_meghani_nursing_home_in_bilaspur.jpg','Gall Bladder Stone');

var arr02 = new service('images/bache_dani_operation_meghani_nursing_home_bilaspur.jpg','Bache Dani Operation (LAVH)');

var arr03 = new service('images/gs11_open-inguinal-hernia-bilaspur_meghani_nursing_home.png','Harnia');
// var t_arr0 = new service('images/hydrocele_treatment_in_bilaspur_meghani_nursing_home_and_surgical_centre.jpg','Hydrocele Treatment');

// var t_arr01 = new service('images/stomach _related_problems_treatment_in_bilaspur_meghani_nursing_home_bilaspur.jpg','Stomach Related Problems');

// var t_arr02 = new service('images/24_hour_emegency_service_in_meghani_nursing_home.png','24 Hours Emergency Care');

// var t_arr03 = new service('images/ndvh_treatment_in_meghnai_nursing_home_by_dr.deepak_meghani_bilaspur_chhattisgarh.jpg','NDVH Treatment');

// var s_arr = new service('images/prostate_operation_meghani_nursing_home_treatment.jpg','Prostate Operation');

// var s_arr01 = new service('images/viu_treatment_in_megani_nursing_home_bilaspur_chattisgarh.png','VIU (Visual Internal Urethrotomy)');

// var s_arr02 = new service('images/uretroscopy_treatment_in_bilaspur_chhatisgarh.jpg','Ureteroscopy (URS)');

// var s_arr03 = new service('images/male_cystoscopy_treatment_in_bilaspur_chattishgarh.png','Cystoscopy');




var my_arr = [arr,arr01,arr02,arr03];

document.querySelector('.treatment_featur').innerHTML +='<div class="container head"><div class="row"><h4 class="text-center">Service (Laparoscopic Surgery)</h4></div></div>';

for(var i in my_arr){
	document.querySelector('.treatment_featur>.container>.row').innerHTML +=`
	   <div class="col-md-3">
	       <div class="myService">
		       <img src="${my_arr[i].img}" alt="${my_arr[i].img}" class="img-thumbnail">
			   <p class="head01"><strong>${my_arr[i].details}</strong></p>
		   </div>
	   </div>
	`;
}



