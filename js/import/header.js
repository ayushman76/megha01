//IMPORT HEADER SCRIPT FROM EXPORT FOLDER
import Header from "../export/header.js";

//CREATE OBJECTS FOR HEADER CLASS
var tab01 = new Header("<i class='fa fa-envelope locate' style='font-size:22px'></i> meghaninursinghome@gmail.com"," meghaninursinghome@gmail.com");
var tab02 = new Header("07752493493","07752493493");
var tab03 = new Header("9111493493","9111493493");
var tab04 = new Header("7024791212","7024791212");

//CREATE ARREY FROM HEADER OBJECTS
var header_arr = [tab02,tab03,tab04]

//ACCESS HEADER FROM INDEX FileUpload

document.querySelector('header').innerHTML+=`
   <div class="container">
        <div class="row">
		     <div class="col-md-3">
			       <div class="logo_item">
				        <img src="${tab01.logo("images/icon/logo_meghani_nursing_home.png")}" alt="Meghani nursing home bilaspur">
				   </div>
			 </div>
			 <div class="col-md-9">
			      <div class="header_widgets">
				        <ul class="navbar-nav nav">
						<li><a href="tel:${tab01.tablink}">${tab01.tabcontent}</a></li>
						</ul>
				  </div>
			 </div>
		</div>
   </div>
`;

for(var i in header_arr){
	document.querySelector('.header_widgets>ul').innerHTML+=`
	    <li><a href="tel:${header_arr[i].tablink}"><i class="fa fa-phone locate" style="font-size:22px"></i> ${header_arr[i].tabcontent}</a></li>
	`;
}