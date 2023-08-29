var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      responseText.textContent = "status: " + response.status;
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
