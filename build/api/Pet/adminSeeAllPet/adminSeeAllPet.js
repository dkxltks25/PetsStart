"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    adminSeeAllPet: function adminSeeAllPet() {
      return _prismaClient.prisma.pets();
    }
  }
};
exports["default"] = _default;