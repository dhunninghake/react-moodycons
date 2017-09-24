'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Moodycon = exports.icons = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Moodycon = function Moodycon(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? 'grinning' : _ref$name,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 50 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 50 : _ref$height,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill;
  return _react2.default.createElement(
    'svg',
    {
      role: 'img',
      width: width,
      height: height,
      fill: fill,
      viewBox: '0 0 25 25',
      'aria-labelledby': name,
      xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'title',
      { id: name },
      name,
      ' icon'
    ),
    _react2.default.createElement('path', { d: _icons2.default[name] })
  );
};

exports.icons = _icons2.default;
exports.Moodycon = Moodycon;