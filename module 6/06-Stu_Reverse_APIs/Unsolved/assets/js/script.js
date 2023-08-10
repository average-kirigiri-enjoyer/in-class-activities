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
// // retrieves the relevant data as a JSON string which is then converted to and returned as an array of objects
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// returns the relevant data as a JSON string
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
// the AJAX and fetch requests return the data as an array of objects
// note that the fetch request retrieves the data as a JSON string, which is then parsed within the request code