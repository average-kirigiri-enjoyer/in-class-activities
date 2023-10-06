// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
//when the user makes a get request to the relative URL '/', a handlebars template will be rendered & returned
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
//all refers to the all.handlebars file in the views/layouts folder, which is then rendered
  res.render('all');
});

module.exports = router;
