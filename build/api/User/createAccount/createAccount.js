"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    createAccount: function createAccount(_, args) {
      var username, email, _args$name, name, password, Result;

      return _regenerator["default"].async(function createAccount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = args.username, email = args.email, _args$name = args.name, name = _args$name === void 0 ? "Testing" : _args$name, password = args.password;
              _context.next = 3;
              return _regenerator["default"].awrap(_prismaClient.prisma.$exists.user({
                email: email
              }));

            case 3:
              Result = _context.sent;
              console.log(Result);

              if (!Result) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", false);

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return _regenerator["default"].awrap(_prismaClient.prisma.createUser({
                username: username,
                email: email,
                name: name,
                password: password
              }));

            case 10:
              return _context.abrupt("return", true);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](7);
              return _context.abrupt("return", false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[7, 13]]);
    }
  }
};
exports["default"] = _default;