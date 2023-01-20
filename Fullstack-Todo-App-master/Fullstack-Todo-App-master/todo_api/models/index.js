var mongoose = require("mongoose");
var url = process.env.DATABASEURL || "mongodb://localhost/todo-api";

mongoose.set('debug', true);
mongoose.connect(url);


mongoose.Promise = Promise;

module.exports.Todo = require("./todo");