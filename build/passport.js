"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateJWT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _prismaClient = require("../generated/prisma-client");

var _passportJwt = require("passport-jwt");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

_dotenv["default"].config({
  path: _path["default"].join(__dirname, ".env")
});

var jwtOption = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

var verifyUser = function verifyUser(payload, done) {
  var user;
  return _regenerator["default"].async(function verifyUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _regenerator["default"].awrap(_prismaClient.prisma.user({
            id: payload.id
          }));

        case 3:
          user = _context.sent;

          if (!(user !== null)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", done(null, user));

        case 8:
          return _context.abrupt("return", done(null, false));

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", done(_context.t0, false));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var authenticateJWT = function authenticateJWT(req, res, next) {
  return _passport["default"].authenticate("jwt", {
    session: false
  }, function (error, user) {
    if (user) {
      req.user = user;
    }

    next();
  })(req, res, next);
};

exports.authenticateJWT = authenticateJWT;

_passport["default"].use(new _passportJwt.Strategy(jwtOption, verifyUser));

_passport["default"].initialize();