"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _util = require("../../../util");

var _default = {
  Mutation: {
    confirmSecret: function confirmSecret(_, args) {
      var email, password, user;
      return _regenerator["default"].async(function confirmSecret$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = args.email, password = args.password;
              _context.next = 3;
              return _regenerator["default"].awrap(_prismaClient.prisma.user({
                email: email
              }));

            case 3:
              user = _context.sent;
              console.log(password);
              console.log(user);

              if (!(user.password === password)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", (0, _util.generateToken)(user.id));

            case 10:
              throw Error("잘못된 이메일입니다");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;