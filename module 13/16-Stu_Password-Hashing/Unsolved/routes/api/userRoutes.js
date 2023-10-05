const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
//handles POST requests to the relative path /login
router.post('/login', async (req, res) => {
  try {
    //attempts to find a user in the database where the email matches that of the request
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      //if a matching user is not found, respond with a 404 status code, an error message, and eject from the function
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

    //checks if the password included in the request matches that of the user associated with email included in the request
    //this is done SECURELY (with bcrypt)
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      //if the password comparison returned false (i.e. they didn't match), respond with a 404 status code, an error message, and eject from the function
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    //otherwise (i.e. the passwords do match), respond with a 400 status code an a message informing the user they have been logged in
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    //if an internal server error occurs, respond with a status code 500 & the data regarding that error
    res.status(500).json(err);
  }
});

module.exports = router;
