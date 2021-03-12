module.exports = app => {
    const bug_reports = require("../controllers/bug_report.controller.js");
  
    var router = require("express").Router();
  
    // Create a new report
    router.post("/", bug_reports.create);
  
    // retrieve all reports
    router.get("/", bug_reports.findAll);
  
    // retrieve all published reports
    router.get("/published", bug_reports.findAllPublished);
  
    // retrieve a single report by id
    router.get("/:id", bug_reports.findOne);
  
    // Update a bug report with id
    router.put("/:id", bug_reports.update);
  
    // delete a report with id
    router.delete("/:id", bug_reports.delete);
  
    // delete a;; reports
    router.delete("/", bug_reports.deleteAll);
  
    app.use('/api/bug_reports', router);
  };