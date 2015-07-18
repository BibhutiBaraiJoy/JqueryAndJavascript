//window load method or page load event
var contactList =[{"fName":"joy","lName":"Rony","emailNo":"pinku","mobileNo":"Tinku","address":"Diltu",}];

		window.onload = function() {
			
		  var stringHtml=" <tr><th>SN</th><th>First-name</th><th>Last-name</th><th>Mobil</th><th>Email</th><th>Address</th><th>Action</th></tr>";
								if(localStorage.length>=1)
								{
									
									for ( var i = 0, len = localStorage.length; i < len; i++ ) {
										var test = 'contactList'+i ;
										var object = JSON.parse(localStorage.getItem('contactList'+i));
										var test = 'contactList'+i ;
										stringHtml += "<tr>"+"<td>"+ i +"<td>" + object.fName + 
										"</td>" + "<td>" + object.lName + 
										"</td>" +"<td>" + object.mobileNo + 
										"</td>" + "<td>" + object.email +
										"</td>" +"<td>" + object.address + 
										"</td>" + "<td>" + 
										'<button id = "editButton" onclick="editContact( '+test+' )" type="button">Edit</button>' +
										'<button id = "deleteButton" data-key="' + test + '" onclick ="deleteContact(this)" type="button">Delete</button> </td></tr>' ;
											
										}										
									}			

					document.getElementById("output").innerHTML = stringHtml;	
		};

//window load method or page load event


// validation 
	//text field validation
	      var specialKeys = new Array();
			specialKeys.push(8); //Backspace
			function IsNumeric(e) {
				var keyCode = e.which ? e.which : e.keyCode
				var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
				document.getElementById("error").style.display = ret ? "none" : "inline";
				return ret;
        }
	//text field validation
//validation

  //Delete Contact
		function deleteContact(element){
				var test = element.getAttribute("data-key");
				var contNo = new contactNumber('output');
				
				contNo.deleteContact(test);
		}
	

  //Delete Contact
  
  
  // search Contact
			function searchContact(){
				var contNo = new contactNumber('output');
		    	contNo.searchContact($('#mobileNoSr').val());
				console.log($('#mobileNoSr').val());
			}
  // search Contact
  
  // Add contact
			function addContact(){
				var contNo = new contactNumber('output');
				contNo.addContact($('#fName').val(),$('#lName').val(),$('#mobileNo').val(),$('#email').val(),$('#address').val() );
			}
	// Add contact
//Refresh Contact
		function refreshContact(){
			location.reload();
			
		}
//Refresh Contact
// Clear local memory
		function clearContact(){
			localStorage.clear();
			location.reload();
			
		}

// Clear local memory


// module pattern in JavaScript 
			var contactNumber = function(output){
				var person = document.getElementById(output);
				//console.log(person);
				
		        return {
					addContact: function(fName,lName,mobileNo,email,address) {
						var contNo = {
							fName:fName,
							lName:lName,
							email:email,
							mobileNo:mobileNo,
							address:address
						};
						contactList.length = 0;
						for ( var i = 0, len = localStorage.length; i < len; i++ ) {
								var object = JSON.parse(localStorage.getItem('contactList'+i));
								contactList.push(object);
								}
							contactList.push(contNo);
							localStorage.clear();
							localStorage.length=0;
							for( var j = 0 ; j < contactList.length ; j++)
							{
								localStorage.setItem("contactList"+localStorage.length++,JSON.stringify(contactList[j]));
							}
							var stringHtml=" <tr><th>SN</th><th>First-name</th><th>Last-name</th><th>Mobil</th><th>Email</th><th>Address</th><th>Action</th></tr>";
								if(localStorage.length>=1)
								{
									
									for ( var i = 0, len = localStorage.length; i < len; i++ ) {
										var test = 'contactList'+i ;
										var object = JSON.parse(localStorage.getItem('contactList'+i));
										var test = 'contactList'+i ;
										stringHtml += "<tr>"+"<td>"+ i +"<td>" + object.fName + 
										"</td>" + "<td>" + object.lName + 
										"</td>" +"<td>" + object.mobileNo + 
										"</td>" + "<td>" + object.email +
										"</td>" +"<td>" + object.address + 
										"</td>" + "<td>" + 
										'<button id = "editButton" onclick="editContact( '+test+' )" type="button">Edit</button>' +
										'<button id = "deleteButton" data-key="' + test + '" onclick ="deleteContact(this)" type="button">Delete</button> </td></tr>' ;
											
										}										
									}			

					document.getElementById("output").innerHTML = stringHtml;	
						
					},
					
					deleteContact:function(test){
						var index = 0;
						for (var i = 0; i < localStorage.length; i++){
								var key = localStorage.key(i);
								if(key === test)
								index = i;
								}
						  contactList.length = 0;
						for ( var i = 0, len = localStorage.length; i < len; i++ ) {
								var object = JSON.parse(localStorage.getItem('contactList'+i));
								contactList.push(object);
								}
							contactList.splice (index, 1);
							localStorage.clear();
							localStorage.length=0;
							for( var j = 0 ; j < contactList.length ; j++)
							{
								localStorage.setItem("contactList"+localStorage.length++,JSON.stringify(contactList[j]));
							}
							var stringHtml=" <tr><th>SN</th><th>First-name</th><th>Last-name</th><th>Mobil</th><th>Email</th><th>Address</th><th>Action</th></tr>";
								if(localStorage.length>=1)
								{
									
									for ( var i = 0, len = localStorage.length; i < len; i++ ) {
										var test = 'contactList'+i ;
										var object = JSON.parse(localStorage.getItem('contactList'+i));
										var test = 'contactList'+i ;
										stringHtml += "<tr>"+"<td>"+ i +"<td>" + object.fName + 
										"</td>" + "<td>" + object.lName + 
										"</td>" +"<td>" + object.mobileNo + 
										"</td>" + "<td>" + object.email +
										"</td>" +"<td>" + object.address + 
										"</td>" + "<td>" + 
										'<button id = "editButton" onclick="editContact( '+test+' )" type="button">Edit</button>' +
										'<button id = "deleteButton" data-key="' + test + '" onclick ="deleteContact(this)" type="button">Delete</button> </td></tr>' ;
											
										}										
									}			

					document.getElementById("output").innerHTML = stringHtml;	
					},	
					
					searchContact: function(mobileNo) {				
						for ( var i = 0, len = localStorage.length; i < len; i++ ) {
								var test = 'contactList'+i ;
								var object = JSON.parse(localStorage.getItem(test));
								var stringHtml=" <tr><th>SN</th><th>First-name</th><th>Last-name</th><th>Mobil</th><th>Email</th><th>Address</th><th>Action</th></tr>";
								if( object.mobileNo == mobileNo)
									{		
										stringHtml += "<tr>"+"<td>"+ i +"<td>" + object.fName + 
										"</td>" + "<td>" + object.lName + 
										"</td>" +"<td>" + object.mobileNo + 
										"</td>" + "<td>" + object.email +
										"</td>" +"<td>" + object.address + 
										"</td>" + "<td>" + 
										'<button id = "editButton" onclick="editContact( '+test+' )" type="button">Edit</button>' +
										'<button id = "deleteButton" data-key="' + test + '" onclick ="deleteContact(this)" type="button">Delete</button> </td></tr>' ;
												
									}

								}

						person.innerHTML = stringHtml;	

					}
					
				};
				

			};
			
			// module pattern in JavaScript 



