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
  Mutation: {
    registerPet: function registerPet(_, args, _ref) {
      var request, name, age, species, _args$height, height, _args$weight, weight, deviceName, sex, user;

      return _regenerator["default"].async(function registerPet$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request;
              (0, _middlewares.isAuthenticated)(request);
              name = args.name, age = args.age, species = args.species, _args$height = args.height, height = _args$height === void 0 ? "" : _args$height, _args$weight = args.weight, weight = _args$weight === void 0 ? "" : _args$weight, deviceName = args.deviceName, sex = args.sex;
              user = request.user;
              _context.prev = 4;
              _context.next = 7;
              return _regenerator["default"].awrap(_prismaClient.prisma.createPet({
                name: name,
                age: age,
                species: species,
                height: height,
                weight: weight,
                deviceName: deviceName,
                sex: sex,
                user: {
                  connect: {
                    id: user.id
                  }
                }
              }));

            case 7:
              return _context.abrupt("return", true);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0);
              return _context.abrupt("return", false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[4, 10]]);
    }
  }
};
exports["default"] = _default;