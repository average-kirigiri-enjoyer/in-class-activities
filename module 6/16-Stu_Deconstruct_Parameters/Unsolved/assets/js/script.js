fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
//the per_page parameter determines how many objects are displayed on the page; 10 per page, in this case
//the state=open parameter will filter out objects that are not set to open
//the sort parameter determines how the objects will be sorted, which, in this case, will be sorted based on their creation date
//the direction parameter specifies how the sort parameter will be executed, in this case, descending order