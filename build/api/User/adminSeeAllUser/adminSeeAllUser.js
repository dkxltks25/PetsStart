"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    adminSeeAllUser: function adminSeeAllUser(_, __) {
      return _regenerator["default"].async(function adminSeeAllUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _prismaClient.prisma.users());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;