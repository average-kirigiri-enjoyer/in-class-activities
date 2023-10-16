// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// this file is part of the controller, as it handles routing for user input from the view
const router = require('express').Router();

//when the user makes a get request to the relative URL '/', a handlebars template will be rendered & returned
router.get('/', async (req, res) => {
//all refers to the all.handlebars file in the views/layouts folder, which has its data rendered
  res.render('all');
});

module.exports = router;
