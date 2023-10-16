const withAuth = (req, res, next) =>
{
  //If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn)
  {
    res.redirect('/login');
  }
  else //otherwise (i.e. they are logged in, proceed to routing process)
  {
    next();
  }
};

module.exports = withAuth;
