"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _middlewares = require("../../../middlewares");

var _util = require("../../../util");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    requestSecret: function requestSecret(_, args, _ref) {
      var request, email, loginSecret;
      return _regenerator["default"].async(function requestSecret$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request;
              email = args.email;
              loginSecret = (0, _util.secretGenerator)();
              _context.prev = 3;
              console.log(loginSecret);
              _context.next = 7;
              return _regenerator["default"].awrap(_prismaClient.prisma.updateUser({
                data: {
                  loginSecret: loginSecret
                },
                where: {
                  email: email
                }
              }));

            case 7:
              return _context.abrupt("return", true);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              console.log(_context.t0);
              return _context.abrupt("return", false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 10]]);
    }
  }
};
exports["default"] = _default;