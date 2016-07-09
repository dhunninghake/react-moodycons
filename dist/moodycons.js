(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './icons'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./icons'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.icons);
    global.moodycons = mod.exports;
  }
})(this, function (exports, _react, _icons) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _icons2 = _interopRequireDefault(_icons);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
      _classCallCheck(this, Icon);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
    }

    _createClass(Icon, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'svg',
          {
            width: this.props.width,
            height: this.props.height,
            fill: this.props.fill,
            viewBox: '0 0 25 25',
            xmlns: 'http://www.w3.org/2000/svg' },
          _react2.default.createElement('path', { d: _icons2.default[this.props.name] })
        );
      }
    }]);

    return Icon;
  }(_react.Component);

  Icon.propTypes = {
    name: _react.PropTypes.string.isRequired,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    fill: _react.PropTypes.string
  };
  Icon.defaultProps = {
    name: 'grinning',
    width: 50,
    height: 50,
    fill: 'currentColor'
  };
  exports.default = Icon;
});