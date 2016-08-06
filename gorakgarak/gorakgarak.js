$(document).ready(function() {
    $('.ui.dropdown').dropdown();
});


function onRequest(item) {

	switch(item) {
		case 'r' :
			var target_address = "http://localhost:4848/single?appid=C%3A%5CUsers%5Ckohry%5CDocuments%5CQlik%5CSense%5CApps%5CExecutive%20Dashboard.qvf&sheet=FaQeFa&opt=currsel";
			break;	
		case 'p' :
			var target_address = "http://localhost:4848/single?appid=C%3A%5CUsers%5Ckohry%5CDocuments%5CQlik%5CSense%5CApps%5CExecutive%20Dashboard.qvf&sheet=PfKsJK&opt=currsel";
			break;
	}

	document.getElementById('iframe_content').src = target_address;

} //end function onRequest()