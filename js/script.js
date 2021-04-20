
	function calculateYear() {
	
		var number = document.getElementById("number").value;
		
		if (number == "" || number == 0) {
			
			window.alert("Please type your correct age!");
			return;
		}

      
		var date = new Date().getFullYear();
		
		var birthyear = date - number;
		
		document.getElementById("year").style.display = "block";
		document.getElementById("year").innerHTML = "<b>Your birth year is  </b>"+birthyear;
		
	}

	
	document.getElementById("year").style.display = "none";
	document.getElementById("button").onclick = function() {  calculateYear();  };



    


	function calculateAge(){

		const selectedDob = document.getElementById("dob").value;
		const userDob =  new Date(selectedDob);
		const selectedDob_2 = document.getElementById("dob-from").value;
		const dateFrom =  new Date(selectedDob_2);
         const userYear = userDob.getFullYear();
		 const dateFromYear = dateFrom.getFullYear();
		 if(dateFromYear < userYear){
             window.alert("Please select valid date for Age At field")
			 return;
		 }

	
		let diffi = Math.abs(Number(dateFrom) - Number(userDob));
		let diff = Math.floor(diffi/3.1536E+10);
	

	    
		let show = function show(){

			document.getElementById("age").className="visible";
			document.querySelector("#age").innerHTML = `<h2>Your will be ${diff} years old </h2>`;
		}

		function reset() {
         			
		    document.getElementById("dob").value = "";
			document.getElementById("dob-from").value = "";
				
	    }
       	

		function inputValidationHandler() {
         
		    let selectVal = selectedDob;
			let selectVal_2 = selectedDob_2;
				
				if ( ( selectVal== "" || selectVal == undefined) && ( selectVal_2== "" || selectVal_2 == undefined)) {
					
					window.alert("Please select a valid date!");
				
		 		}else if ( selectVal== "" || selectVal == undefined) {
					
					window.alert("Please select a valid date of birth!");
					
		 		}else if ( selectVal_2== "" || selectVal_2 == undefined) {
					
		 			window.alert("Please select a valid date at!");
					
		 		}else{
					document.getElementsByClassName(".visible").className="hidden";
					setInterval(show,1000);
					clearInterval(show,2000);
					reset();
				}

			
		}


		 inputValidationHandler();
		
	
	
	
		
	}

    let calBtn = document.getElementById("calculate-btn");
	calBtn.addEventListener("click",()=>{
		
		calculateAge();
	

	});

	

   
	
	
