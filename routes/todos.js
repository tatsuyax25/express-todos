const express = require('express');
const router = express.Router();
// Require the Todo model
const Todo = require('../models/todo');
const app = require('../server');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/todos', function (req, res) {
  res.render("todos/index", {
    todos: todoDb.getAll(),
  });
});

module.exports = router;
