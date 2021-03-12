const db = require("../models");
const Bug_Report = db.bug_reports;
const Op = db.Sequelize.Op;

// Create and Save a new bug report
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create new report
    const bug_report = {
      title: req.body.title,
      issue: req.body.issue,
      assigned_to: req.body.assigned_to,
      resolution: req.body.resolution,
      last_updated: req.body.last_updated,
      published: req.body.published ? req.body.published : false
    };
  
    // save report to the database
    Bug_Report.create(bug_report)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the bug report."
        });
      });
  };

// Retrieve all reports from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Bug_Report.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving report."
        });
      });
  };

// Find a single bug report with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Bug_Report.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving bug_report with id=" + id
        });
      });
  };

// Update a bug report by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Bug_Report.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "bug report was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update bug report with id=${id}. Maybe report was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating bug report with id=" + id
        });
      });
  };

// Delete a Bug report with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Bug_Report.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "bug report was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete bur report with id=${id}. Maybe the data object was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete bug report with the id=" + id
        });
      });
  };

// Delete all bur reports from postgress.
exports.deleteAll = (req, res) => {
    Bug_Report.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} bug report deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all bug reports."
        });
      });
  };
// find all bug reports
exports.findAllPublished = (req, res) => {
    Bug_Report.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bug reports."
        });
      });
  };