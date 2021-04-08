//IMPORT ABOUT FROM EXPORT JS

import About from "../export/about.js";

//CREATE OBJECTS FOR ABOUT CLASS
var heading = new About("About Us");
var heading01 = new About("Health Care With Dedication And Precision")
var para = new About ("<strong> Dr. Deepak Menghani Is One Of The Leading And Experienced General Surgeon Of Bilaspur.</strong> He Has Vast Experience In The Field Of Surgery Since Last 15 Years. He Has Attended The Various <strong>National  And International Conference</strong> In The Filed Of <strong>Laparoscopic Surgery.</strong> Dr. Menghani Is Also <strong>Specialist Piles &amp; Hernia Surgery In Menghani Nursing Home Has The Latest <strong>Laser For Piles Surgery.</strong> Menghani Nursing Home Is One Of The Oldest Setup Of <strong>Hospital In Bilaspur Chhattisgarh .</strong> </strong>");
var para01 = new About("<strong>Dr. Deepak Menghani</strong> Offers Services Like <strong>Piles, appendix </strong>, <strong> Uterus,</strong> <strong> hernia, </strong> <strong> Gallbladder,</strong> <strong>kidney Stone,</strong> <strong>Ureter Stone,</strong> <strong>Bladder Stone.</strong>");
var button = new About("Get Appointment")

document.querySelector(".about").innerHTML+=`
     <div class="container">
	      <div class="row">
		         <div class="col-md-6">
				      <div class="myAboutContent my_content">
					        <h4>${heading.content}</h4>
							<h5 class="head_tag"><strong>${heading01.content}</strong></h5>
							<p>${para.content}</p>
							<p>${para01.content}</p>
							<a href="contact.html" class="my_btn">${button.content}</a>
					  </div>
				 </div>
				 <div class="col-md-6">
				       <div class="myAboutImage pad-10">
					          <img src="${heading.images("images/meghani_nursing_home_bilaspur.png")}"alt="" class="img-thumbnail">
					   </div>
				 </div>
		  </div>
	 </div>
`;