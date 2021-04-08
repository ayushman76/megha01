import footer from '../export/footer.js';


	
	document.querySelector('footer').innerHTML +=`
	   <div class="container">
	       <div class="row">
		       <div class="col-md-4">
			       <div class="footer_widget">
				       <h1>My Navigation</h1>
					   <ul class="nav">
						  <li><a href="#index">${footer[0].nav01}</a></li>
						  <li><a href="#about">${footer[0].nav02}</a></li>
						  <li><a href="#about">${footer[0].nav03}</a></li>
						  <li><a href="#service">${footer[0].nav04}</a></li>
						  <li><a href="#gallery">${footer[0].nav05}</a></li>
						  <li><a href="#contact">${footer[0].nav06}</a></li>
					   </ul>
			       </div>
			   </div>
			   <div class="col-md-4">
			       <div class="footer_widget">
				       <h1>Social Media</h1>
					   <ul class="nav">
						<li>
							    <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Frainbowhospitalbilaspur.in%2F&layout=button_count&size=large&appId=314664339193680&width=88&height=28" width="88" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
							</li>
                            <li>
							    <a data-action="share/whatsapp/share" href="whatsapp://send?text=http://rainbowhospitalbilaspur.in/" title="Meghani Nursing Home whatsapp number">
								<img id="whatsapp" src="https://1.bp.blogspot.com/-710D4dnbKKE/WPOEG8eaRNI/AAAAAAAAB2g/olpVqcQiKdMmGHEjVkcEJWxDVEhs5qr5wCLcB/s1600/Whatsapp-48.png" width="40"></a>
							</li>
                            <li>
							   <a target="_blank" href="tel:+7752400498">
							      <img src="images/meghani_nuring_home-Phone-Number.png" style="width:70px;" alt="meghani nuring home Phone Number Bilaspur Chhattisgarh" >
							   </a>
							</li>
							<li>
							    <a target="_blank" href="mailto:meghaninursinghome@gmail.com">
								    <span class="glyphicon glyphicon-envelope" style="font-size:36px;border:1px solid rgb(41 16 97);    left: 18px;"></span>
								</a>
							</li>
					   </ul>
			       </div>
			   </div>
			    <div class="col-md-4">
			       <div class="Meghani_nursing_home_footer_nav">
				       <h2>Our Address</h2>
					   <ul class="navbar-nav nav pull-right">
							<li ><a href=""><i class="fa fa-map-marker" style="font-size:24px"></i> ${footer[0].side_nav07}</a></li>
							<li ><a href="tel:${footer[0].side_nav08}"><i class="fa fa-phone" style="font-size:24px"></i>  ${footer[0].side_nav08}</a></li>
							<li>
						      <a href="tel:${footer[0].phone01_widget}"><i class="fa fa-phone" style="font-size:24px"></i> ${footer[0].phone01_widget}</a>
						   </li>
						   <li>
						      <a href="tel:${footer[0].phone02_widget}"><i class="fa fa-phone" style="font-size:24px"></i> ${footer[0].phone02_widget}</a>
						   </li>
							<li><a href="mailto:${footer[0].side_nav09}"><i class="fa fa-envelope" style="font-size:24px"></i> ${footer[0].side_nav09}</a></li>
					   </ul>
			       </div>
			   </div>
				
		   </div>
			  
	   </div>
	   <div class="sidefix"> 
				    <a href="https://api.whatsapp.com/send?phone=9893008561&amp;text=Hi, I am visiting your website and I Want a website: www."><img src="images/enquiry.png"></a>
				</div>
	`;	


