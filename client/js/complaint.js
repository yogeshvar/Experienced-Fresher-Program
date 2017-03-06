$(document).ready(function(){
    $('#issue').focus();
});
function mail()
{
    //var username   = document.getElementById("issue").value;
    var complient   = document.getElementById("complient").value;
     var SERVER_URL = "http://localhost:3000/login/";
     var complient={complient: complient};
     var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				window.location.assign('request.html');
			}
		};
		xhr.open("POST",SERVER_URL,true);
		xhr.send(complient);	
}

