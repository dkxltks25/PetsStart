"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

//.env 파일 정의
_dotenv["default"].config(_path["default"].join(__dirname, ".env"));