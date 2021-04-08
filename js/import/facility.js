import Facility from '../export/facility.js';

var  tab01 = new Facility('images/icon/medical_treatment.png','Medical Treatment','We Offer Medical Treatments','');
var  tab02 = new Facility('images/icon/emergency_service.png','Emergency Help','We Offer Emergency Help','');
var  tab03 = new Facility('images/icon/medical_dr.png','Medical Professionals','We Have Medical Professionals.','');
var  tab04 = new Facility('images/icon/doctor.png','Qualified Doctors','We Have Qualified Doctors','');

var about_arr = [tab01,tab02,tab03,tab04];

document.querySelector('article').innerHTML+=`
    <div class="container">
	     <div class="row">
		      <h2 class="text-center">We Offer Specialized</h2>
			  <h3 class="text-center"><strong>Orthopedics To Meet Your Needs</strong></h3>
		 </div>
	</div>
`;
for(var i in about_arr){
	document.querySelector('article>.container>.row').innerHTML+=`
	   <div class="col-md-3">
	       <div class="my_facility ">
		         <img src="${about_arr[i].img}" alt="${about_arr[i].alt}">
				 <p class="head"><strong>${about_arr[i].head}</strong></p>
				 <p>${about_arr[i].para}</p>
		   </div>
	   </div>
	`
	}