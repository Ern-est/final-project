const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aec8cedb4fmsh41c629cb209e5c9p1d71bbjsn0289c3bf9237',
		'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
	}
};

fetch('https://ajith-holy-bible.p.rapidapi.com/GetBooks', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	const API_URL = 'https://api.scripture.api.bible/v1/bibles';

fetch(API_URL, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'api-key': '007bba49094613342f64c73d7eb6aedc'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
  document.getElementById("btn btn-outline-success").addEventListener("click", function() {
    window.location.href = "https://www.pdfdrive.com/";
  });
  document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from being submitted
    window.location.href = "http://www.moringaschool.com";
  });
  
  