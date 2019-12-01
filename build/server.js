"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

require("./env");

var _url = _interopRequireDefault(require("url"));

var _graphqlYoga = require("graphql-yoga");

var _morgan = _interopRequireDefault(require("morgan"));

var _schema = _interopRequireDefault(require("./schema"));

var _passport = require("./passport");

var _prismaClient = require("../generated/prisma-client");

var port = process.env.PORT || 4000;
var server = new _graphqlYoga.GraphQLServer({
  schema: _schema["default"],
  context: function context(_ref) {
    var request = _ref.request;
    return {
      request: request
    };
  }
});
server.express.use((0, _morgan["default"])("dev"));
server.express.use(_passport.authenticateJWT);
server.start({
  port: port
}, function () {
  console.log("Server running on ".concat(port));
});
server.express.get("/api", function _callee(req, res) {
  var parsedObject, query, QueryArray, QueryKeyValue, findPet, id, _QueryKeyValue$, _, deviceName, _QueryKeyValue$2, __, Temp, result;

  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          parsedObject = _url["default"].parse(req.url);
          query = parsedObject.query;
          QueryArray = query.split("&");
          QueryKeyValue = [];
          QueryArray.map(function (index) {
            QueryKeyValue.push(index.split("="));
          });
          _context.next = 8;
          return _regenerator["default"].awrap(_prismaClient.prisma.pets({
            where: {
              deviceName_in: QueryKeyValue[0][1]
            }
          }));

        case 8:
          findPet = _context.sent;

          if (findPet === undefined) {
            res.send("등록된 계정이 없습니다");
          }

          id = findPet[0].id;
          _QueryKeyValue$ = (0, _slicedToArray2["default"])(QueryKeyValue[0], 2), _ = _QueryKeyValue$[0], deviceName = _QueryKeyValue$[1];
          _QueryKeyValue$2 = (0, _slicedToArray2["default"])(QueryKeyValue[1], 2), __ = _QueryKeyValue$2[0], Temp = _QueryKeyValue$2[1];
          console.log(deviceName);
          console.log(Temp);
          _context.prev = 15;
          _context.next = 18;
          return _regenerator["default"].awrap(_prismaClient.prisma.createTemp({
            Temp: parseFloat(Temp),
            deviceName: deviceName,
            pet: {
              connect: {
                id: id
              }
            }
          }));

        case 18:
          result = _context.sent;
          res.send("\uC131\uACF5!!!!!:deviceName-".concat(deviceName, " \n Temp-").concat(Temp));
          _context.next = 26;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](15);
          console.log(_context.t0);
          res.send("잘못된 방식입니다");

        case 26:
          _context.next = 31;
          break;

        case 28:
          _context.prev = 28;
          _context.t1 = _context["catch"](0);
          res.send("잘못된 접근입니다 -Park");

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28], [15, 22]]);
});