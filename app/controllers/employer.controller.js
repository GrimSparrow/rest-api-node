const db = require("../models");
const Employer = db.employers;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Employer
    const employer = new Employer({
      name: req.body.name,
      position: req.body.position,
      description: req.body.description,
      about: req.body.about,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      vk: req.body.vk,
      youtube: req.body.youtube
    });
  
    // Save Tutorial in the database
    employer
      .save(employer)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Employer."
        });
      });
  };

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Employer.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Employer with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Employer with id=" + id });
      });
  };

// Update a Employer by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Employer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Employer with id=${id}. Maybe Employer was not found!`
          });
        } else res.send({ message: "Employer was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Employer with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employer.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Employer with id=${id}. Maybe Employer was not found!`
          });
        } else {
          res.send({
            message: "Employer was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Employer with id=" + id
        });
      });
  };

// Delete all Employers from the database.
exports.deleteAll = (req, res) => {
    Employer.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Employers were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Employers."
        });
      });
  };