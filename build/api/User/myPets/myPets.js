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
    myPets: function myPets(_, __, _ref) {
      var request, user;
      return _regenerator["default"].async(function myPets$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request;
              (0, _middlewares.isAuthenticated)(request);
              user = request.user;
              _context.next = 5;
              return _regenerator["default"].awrap(_prismaClient.prisma.pets({
                where: {
                  user: {
                    id: user.id
                  }
                }
              }));

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;