// JavaScript Document
$(document).ready(function(e) {
    $("#submit").on('click', function(){
		var name = $.trim($("#name").val()); // name
		var cname = $.trim($("#cname").val()); // name
		var email = $.trim($("#email").val()) // email
		var phone = $.trim($("#mobile").val()) // phone
		var query = $.trim($("#enquiry").val()) // query 
		var errCnt = 0;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; // Email Validation
		var mob = phone.length; // mobile validation
		if(name == "" || name == null){
			$("#name").css('border', '2px solid #66bb6a');
			$("#name").attr("placeholder","Enter Your Name");
			$("#name").fadeIn().fadeIn();
			errCnt++;
		}else{
			$("#name").css('border', '1px solid #CCCCCC');
		}
		if(email == "" || email == null){
			$("#email").css('border', '2px solid #66bb6a');
			$("#email").attr("placeholder","Enter Your Email Id.");
			$("#email").fadeIn().fadeIn();
			errCnt++;
		}else if(!emailReg.test(email)){
			$("#email").css('border', '2px solid #66bb6a');
			$("#email").fadeIn().fadeIn();
			errCnt++;
		}else{
			$("#email").css('border', '1px solid #CCCCCC');
		}if((isNaN(phone)) || phone == ""){
			$("#mobile").css('border', '2px solid #66bb6a');
			$("#mobile").attr("placeholder","Enter Your Mobile No.");
			$("#mobile").fadeIn().fadeIn();
			errCnt++;
		}else if(mob < 6){
		   $("#mobile").css('border', '1px solid #66bb6a');
		   $("#mobile").fadeIn().fadeIn();
		   errCnt++;
		}else{
			$("#mobile").css('border', '1px solid #CCCCCC');
		}if(query == "" || query == null){
			$("#enquiry").css('border', '2px solid #66bb6a');
			$("#enquiry").attr("placeholder","Enter Your Requirement");
			$("#enquiry").fadeIn().fadeIn();
			errCnt++;
		} else{
			$("#enquiry").css('border', '1px solid #CCCCCC');
		}
		if(errCnt > 0) return false; else{
			
			var datastring = 'name='+ name + '&email=' + email + '&cname=' + cname + '&mobile=' + phone + '&enquiry=' + query;
			
			$.ajax({
			type: "POST",
			url: "enquiry-mailer.php",  
			data: datastring,
			cache:false, 
			timeout:5000, 
			async: false,
			beforeSend: function(){
				$('#result').html('Please Wait...');
			},
			complete: function(){
				$('#result').hide();
			},
			success: function(data){
				$.fancybox.close();
			    swal('Thank you', 'Your message has been succesfully sent', 'success');
				$('form').find('input[type=text]').val(""); 
				$('#enquiry').val("");
				$('#success').html(data);
						
			},
			});
			return false;
			return true;
		} 
	});
});
