"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _fragments = require("../../../../fragments");

var _default = {
  Mutation: {
    insertTemp: function insertTemp(_, args) {
      var temp, deviceName, findPet, id, result;
      return _regenerator["default"].async(function insertTemp$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = args.temp, deviceName = args.deviceName;
              _context.next = 3;
              return _regenerator["default"].awrap(_prismaClient.prisma.pets({
                where: {
                  deviceName_in: deviceName
                }
              }));

            case 3:
              findPet = _context.sent;

              if (!(findPet === undefined)) {
                _context.next = 6;
                break;
              }

              throw "등록된 계정이 없습니다";

            case 6:
              id = findPet[0].id;
              _context.prev = 7;
              _context.next = 10;
              return _regenerator["default"].awrap(_prismaClient.prisma.createTemp({
                Temp: temp,
                deviceName: deviceName,
                pet: {
                  connect: {
                    id: id
                  }
                }
              }));

            case 10:
              result = _context.sent;
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](7);
              console.error(_context.t0);
              return _context.abrupt("return", false);

            case 17:
              console.log(findPet);
              return _context.abrupt("return", true);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[7, 13]]);
    }
  }
};
exports["default"] = _default;