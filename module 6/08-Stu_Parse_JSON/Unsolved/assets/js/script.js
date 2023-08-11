// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response

    for (issue = 0; issue < 5; issue++)
    {
      console.log(data[issue].url);
      console.log(data[issue].user.login);
    }
    // TODO: Console log each issue's URL and each user's login
  });
