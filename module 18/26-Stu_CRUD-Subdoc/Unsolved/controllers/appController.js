const { Application, User } = require('../models');

module.exports = {
  async getApplications(req, res) {
    try {
      const applications = await Application.find();
      res.json(applications);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleApplication(req, res) {
    try {
      const application = await Application.findOne({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with that ID' });
      }

      res.json(application);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the createApplication method
  async createApplication(req, res) {
    try {
      //attempts to create a new object in the Application table using data in the request body
      const application = await Application.create(req.body);

      //finds and updates an object in the User table with an ID matching that of
      //the userId in the request body, and adds the application's ID to the object dataset
      //i.e. when a user creates an application, add the application's ID to the appropriate user
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { applications: application._id } },
        { new: true }
      );

      //if the user cannot be found, return a 404 status messeage
      if (!user) {
        return res.status(404).json({
          message: 'Application created, but found no user with that ID',
        })
      }

      //otherwise, return a success message
      res.json('Created the application 🎉');
    } catch (err) { //catch any errors that occur, log them to the console, and return them as JSON
      console.log(err);
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the updateApplication method
  async updateApplication(req, res) {
    try {
      //updates an object in the application collection with an id matching that of the request parameter, using data from the request body
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      //if no application could be found with the given ID, return an appropriate error message
      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      //otherwise, return the application
      res.json(application);
    } catch (err) { //catch any errors that occur, log them to the console, and return them as JSON
      console.log(err);
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the deleteApplication method
  async deleteApplication(req, res) {
    try {
      //deletes an object in the application table with an ID matching that of the request parameter
      const application = await Application.findOneAndRemove({ _id: req.params.applicationId });

      //if no object could be found with the given ID, return an appropriate error message
      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      //if an application was found, attempt to remove the now-deleted application's ID from the appropriate user
      const user = await User.findOneAndUpdate(
        { applications: req.params.applicationId },
        { $pull: { applications: req.params.applicationId } },
        { new: true }
      );

      //if a user was not found, return an appropriate error message
      if (!user) {
        return res.status(404).json({
          message: 'Application created but no user with this id!',
        });
      }

      //otherwise, return a success message
      res.json({ message: 'Application successfully deleted!' });
    } catch (err) { //catch any errors that occur, log them to the console, and return them as JSON
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the addTag method
  async addTag(req, res) {
    try {
      //attempts to add a tag to an object in the application collection with an ID matching that of the request parameters, using tag data from the request body
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $addToSet: { tags: req.body } },
        { runValidators: true, new: true }
      );

      //if no object could be found with the given ID, return an appropriate error message
      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      //otherwise, return the application
      res.json(application);
    } catch (err) { //catch any errors that occur, log them to the console, and return them as JSON
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the addTag method
  async removeTag(req, res) {
    try {
      //attempt to remove a tag from an object in the application table with an ID matching that of the request parameters, removing the tag with the ID matching that of another request parameter
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $pull: { tags: { tagId: req.params.tagId } } },
        { runValidators: true, new: true }
      );

      //if no object could be found with the given ID, return an appropriate error message
      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      //otherwise, return the application
      res.json(application);
    } catch (err) { //catch any errors that occur, log them to the console, and return them as JSON
      res.status(500).json(err);
    }
  },
};
