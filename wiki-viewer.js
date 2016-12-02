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

		var customUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + 
		'&format=json&callback=?';

		var otherUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm;

		var baseUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';


		loadJSON(otherUrl, function response(data) {
			var output = document.getElementById('output');
			output.innerHTML = '';

			for(var i = 0; i < data[1].length; i++) {
				//var output = document.getElementById('output');
				output.innerHTML = '<li><a href= '+data[3][i]+'>'+data[1][i]+'</a><p>'+data[2][i]+'</p></li>' + output.innerHTML ;
			}
		});

	}

function getXhr(url, success) {
	    var xhr = new XMLHttpRequest();
	    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); 
	    xhr.open('GET', url);
	    xhr.onload = success;
	    xhr.send();
	    return xhr;
	}


function loadJSON(url, callback) {
	var wikiViewer = new XMLHttpRequest();
		wikiViewer.open('GET', url, true)
		wikiViewer.onreadystatechange = function () {
			if (wikiViewer.readyState === XMLHttpRequest.DONE) {
        		var json = JSON.parse(wikiViewer.responseText)
        		callback(json);
			}
		};
		wikiViewer.send(null);
	}
}