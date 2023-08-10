var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// returns the relevant data as an array of objects
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// returns the relevant data as an array of objects
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// returns the relevant data as a json string
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
// XML returns the data as a json string
// ajax and fetch both return the data as an array of objects
// they basically do the same thing except fetch is kinda like a pentuim single-core single-thread processor
// where it can only do one thing at a time, whereas ajax is more like my ryzen 7 5700x 8-core 16-threaded processor, it can do up to 16 things at once!
// fetch uses javascript which is the pentium single core, and you have to parse the jason data with a then statement after you retrieve the data