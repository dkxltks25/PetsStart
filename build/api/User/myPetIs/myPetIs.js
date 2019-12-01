"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    myPetIs: function myPetIs(_, __, _ref) {
      var request, user, result;
      return _regenerator["default"].async(function myPetIs$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request;
              (0, _middlewares.isAuthenticated)(request);
              user = request.user;
              _context.prev = 3;
              _context.next = 6;
              return _regenerator["default"].awrap(_prismaClient.prisma.$exists.pet({
                user: {
                  id: "1234"
                }
              }));

            case 6:
              result = _context.sent;

              if (!(result === true)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", true);

            case 11:
              return _context.abrupt("return", false);

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              return _context.abrupt("return", false);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 14]]);
    }
  }
};
exports["default"] = _default;