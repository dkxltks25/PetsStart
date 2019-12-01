"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.secretGenerator = void 0;

var _word = require("./word");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var secretGenerator = function secretGenerator() {
  var randomNumber = Math.floor(Math.random() * _word.adjectives.length);
  return "".concat(_word.adjectives[randomNumber], " ").concat(_word.nonus[randomNumber]);
};

exports.secretGenerator = secretGenerator;

var generateToken = function generateToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_SECRET);
};

exports.generateToken = generateToken;