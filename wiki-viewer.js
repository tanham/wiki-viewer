//retrieve random wikipedia page on click 
window.onload = function randomButton() {
	var randomPage = document.getElementById('random');
	randomPage.addEventListener('click', randomButton, false);

	function randomButton() {
		window.location.assign('https://en.wikipedia.org/wiki/Special:Random');
	}
}


window.onload = function storeInput(){
	
	var searchButton = document.getElementById('search');
	
	searchButton.addEventListener('click', doThing, false);
	
	function doThing() {
		var searchTerm = document.getElementById('input').value;
		console.log(searchTerm);

		var customUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + 
		'&format=json&callback=?';

		getXhr(customUrl, function(request){
	    	var response = request.target.responseText;
	    	console.log(response);
		});
	}
};
		

function getXhr(url, success) {
	    var xhr = new XMLHttpRequest();
	    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); 
	    xhr.open('GET', url);
	    xhr.onload = success;
	    xhr.send();
	    return xhr;
	}
	























