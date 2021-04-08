//IMPORT NAV FROM EXPORT SCRIPT
import Slider from "../export/slider.js";

//CREATE OBJECTS FOR SLIDER

var heading = new Slider("Welcome to Meghani Nursing Home");
var tag = new Slider("Sadar Bazaar Bilaspur in fornt of CIMS Chowk");
var para = new Slider("Dr. Deepak Menghani Is One Of The Leading And Experienced General Surgeon Of Bilaspur. He Has Vast Experience In The Field Of Surgery Since Last 15 Years. He Has Attended The Various National  And International Conference In The Filed Of Laparoscopic Surgery. Dr. Menghani Is Also Specialist Piles  Hernia Surgery In Menghani Nursing Home Has The Latest Laser For Piles Surgery.");
var button = new Slider("View Treatments");

//ACCESS SECTION FROM INDEX 

document.querySelector('section').innerHTML+=`

   <div class="container">
       <div class="row">
	         <div class="col-md-6">
			      <div class="my_content">
					  <h1><strong>${heading.content}</strong></h1>
					  <span class="mark"><strong><i class="fa fa-map-marker locate"></i> ${tag.content}</strong></span>
					  <p>${para.content}</p>
					  <a href="treatment.html" class="my_btn">${button.content}</a>
			      </div>
			 </div>
			 <div class="col-md-6">
			     <div class="my_imgs">
				       <img src="images/dr_deepak_meghani_bilaspur01.png" class="img-responsive doctor">
					   <img src="images/nurs01.png" class="img-responsive nurs">
				 </div>
			 </div>
	   </div>
   </div>
`;