var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML

      for (user = 0; user < data.length; user++)
      {
        var userName = document.createElement("h3");
        var userURL = document.createElement("p");
        userName.textContent = data[user].login;
        userURL.textContent = data[user].url;
        userContainer.append(userName);
        userContainer.append(userURL);
      }
    });
}
fetchButton.addEventListener('click', getApi);

