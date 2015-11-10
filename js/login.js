function login(){
	
	console.log("login clicked");
	var request = $.ajax({
  	url: "http://54.86.194.168:2016/login",
  	method: "POST",
  	data: {
			"username": $("#username").val(),
			"password": $("#password").val()
		}
	});
 
	request.done(function( msg ) {
  	console.log("success",msg);
	window.location = 'http://54.86.194.168:8080/home.html'; 
	});
 
	request.fail(function( jqXHR, textStatus ) {
  	console.log("fail");
  	window.location = 'http://54.86.194.168:8080/';
	});

}

