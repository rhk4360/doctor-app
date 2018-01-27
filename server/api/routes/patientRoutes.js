'use strict';
module.exports = function(app) {
  var patientController = require('../controllers/patientController');

  // patient Routes

  app.route('/patient/:patientId')
    .get(patientController.get_patient);
    //.put(todoList.update_a_task)
    //.delete(todoList.delete_a_task);
};