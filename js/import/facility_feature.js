import Treatments from "../export/facility_feature.js";

//CREATE OBJECTS FOR TREATMENTS CLASS

var treat01 = new Treatments("<i class='fas fa-hourglass-start' style='font-size:30px'></i>","24 Hour Emergency");
var treat02 = new Treatments("<i class='fas fa-x-ray' style='font-size:30px'></i>","X-ray");
var treat03 = new Treatments("<i class='fas fa-user-md' style='font-size:30px'></i>","Pathology Service")
var treat04 = new Treatments("<i class='fas fa-procedures' style='font-size:30px'></i>","Procedures Wards")

//CREATE OBJECT ARRES 
 
var treat_arr = [treat01,treat02,treat03,treat04];

document.querySelector('.feature_facility').innerHTML+=`
    <div class="container">
	     <div class="row">
		      <h5 class="text-center">Our Facilities</h5>
		 </div>
	</div>
`;

for(var i in treat_arr){
	document.querySelector('.feature_facility>.container>.row').innerHTML+=`
	    <div class="col-md-3">
			<div class="myFetures_item my_facility">
				<span>${treat_arr[i].img}</span>
				<p>${treat_arr[i].name}</p>
			</div>
		</div>
	`;
}