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
    selectTemp: function selectTemp(_, args) {
      var deviceName, findPet, id, result;
      return _regenerator["default"].async(function selectTemp$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              deviceName = args.deviceName;
              _context.next = 3;
              return _regenerator["default"].awrap(_prismaClient.prisma.pets({
                where: {
                  deviceName_in: deviceName
                }
              }));

            case 3:
              findPet = _context.sent;
              id = findPet[0].id;

              if (!(id === undefined)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", null);

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return _regenerator["default"].awrap(_prismaClient.prisma.pet({
                id: id
              }).device());

            case 10:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);
              console.log(_context.t0);
              return _context.abrupt("return", null);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[7, 14]]);
    }
  }
};
exports["default"] = _default;