
function randomButton() {
	//retrieve random wikipedia page on click 
	var randomPage = document.getElementById('random');
	randomPage.addEventListener('click', redirect, false);

	function redirect() {
		window.location.assign('https://en.wikipedia.org/wiki/Special:Random');
	}
}

window.onload = function start(){
	randomButton();

	var searchButton = document.getElementById('search');
	
	searchButton.addEventListener('click', storeInput, false);
	
	function storeInput() {
		var searchTerm = document.getElementById('input').value;	

		var customUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + searchTerm;

		loadJSON(customUrl, function response(data) {
			var output = document.getElementById('output');
			output.innerHTML = '';

			for(var i = 0; i < data[1].length; i++) {
				//var output = document.getElementById('output');
				output.innerHTML = '<li><a href= '+data[3][i]+'>'+data[1][i]+'</a><p>'+data[2][i]+'</p></li>' + output.innerHTML ;
			}
		});

	}


function loadJSON(url, callback) {
	var wikiViewer = new XMLHttpRequest();
		wikiViewer.open('GET', url, true);
		wikiViewer.onreadystatechange = function () {
			if (wikiViewer.readyState === XMLHttpRequest.DONE) {
        		var json = JSON.parse(wikiViewer.responseText)
        		callback(json);
			}
		};
		wikiViewer.send(null);
	}
}