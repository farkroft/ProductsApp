'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataUri = exports.multerUploads = undefined;

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _datauri = require('datauri');

var _datauri2 = _interopRequireDefault(_datauri);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const multer = require('multer')
var storage = _multer2.default.memoryStorage();
var multerUploads = (0, _multer2.default)({ storage: storage }).single('image');
var dUri = new _datauri2.default();

/**
 * @description This function converts the buffer to data url
 * @param {Object} req containing the field object
 * @returns {String} The data url from the string buffer
 */
var dataUri = function dataUri(req) {
  return dUri.format(_path2.default.extname(req.file.originalname).toString(), req.file.buffer);
};

exports.multerUploads = multerUploads;
exports.dataUri = dataUri;