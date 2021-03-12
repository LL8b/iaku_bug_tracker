module.exports = (sequelize, Sequelize) => {
    const Bug_Report = sequelize.define("bug_report", {
      title: {
        type: Sequelize.STRING
      },
      issue: {
        type: Sequelize.STRING
      },
      assigned_to: {
        type: Sequelize.STRING
      },
      resolution: {
        type: Sequelize.STRING
      },
      last_updated: {
        type: Sequelize.BOOLEAN
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Bug_Report;
  }