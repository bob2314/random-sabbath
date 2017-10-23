var uniqueRandomArray = require('unique-random-array');
var metalNamesSabbath = require("./black-sabbath.json");


module.exports = {
  all: metalNamesSabbath,
  random: uniqueRandomArray(metalNamesSabbath)
};
