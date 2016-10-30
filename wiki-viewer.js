
//store search term 
//use search input to make call to wikipedia api 
//return wikipedia article 

var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?'

function randomPage() {
	//click buttom to see random wikipedia article
	window.location='https://en.wikipedia.org/wiki/Special:Random';
}
console.log(randomPage());