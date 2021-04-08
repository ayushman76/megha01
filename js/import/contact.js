import contact from '../export/contact.js';

document.querySelector('.article02').innerHTML +='<div class="container"><div class="row"><h5 class="text-center">Talk With Us</h5></div></div>';

 document.querySelector('.article02>.container>.row').innerHTML +=`
   <div class="col-md-6">
       <div class="myContect">
	       <h3 class="text-center">Contact Form</h3>
	         <form>
			        <div class="form-group">
					      ${contact[1].phone}
					</div>
					 <div class="form-group">
					      ${contact[1].email}
					</div>
					 <div class="form-group">
					      ${contact[1].Date}
					</div>
					 <div class="form-group">
					      ${contact[1].Time}
					</div>
					 <div class="form-group">
					      ${contact[1].Desease}
					</div>
					<div class="form-group">
					      ${contact[1].Submit}
					</div>
			 </form>
	    
	   </div>
   </div>
   <div class="col-md-6">
       <div class="myContect">
	        <table class="table table-light">
                            <h1 class="text-center color-white">Our Timing</h1>
                            <tbody>
                                <tr>
                                    <td>Monday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>

                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Tuesday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Wednesday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Thursday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Friday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Saturday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Monday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td>6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Sunday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td>6:00Pm to 8:00Pm</td>

                                </tr>

                            </tbody>
                     </table>
	          </div>
        </div>
   
`; 