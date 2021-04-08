//IMPORT NAV CLASS FROM EXPORT SCRIPT
import Nav from "../export/nav.js";

//CREATE OBJECTS FOR NAV CLASS

var nav01  = new Nav("Home","index.html");
var nav02 = new Nav("About us","about.html");

var nav04 = new Nav("Treatments","treatment.html");
var nav05 = new Nav("Gallery","gallery.html");
var nav06 = new Nav("Contact us","contact.html");

//CRAETE NAV ARREY FOR NAV 

var nav_arr = [nav01,nav02,nav04,nav05,nav06];

//ACCESS NAV FROM INDEX.HTML
document.querySelector('nav').innerHTML+=`
  <div class="container">
       <div class="row">
	         <div class="col-md-12">
			      <div class="nav_item">
				       <ul class="navbar-nav nav"></ul>
				  </div>
				  <i class="fa fa-bars bars" onclick="clic()"></i>
			 </div>
	   </div>
  </div>
`;

for (var i in nav_arr){
	document.querySelector('.nav_item>ul').innerHTML+=`
	   <li><a href="${nav_arr[i].tablink}">${nav_arr[i].tabcontent}</a></li>
	`;
}