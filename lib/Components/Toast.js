'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _reactNativeSwipeout = require('react-native-swipeout');

var _reactNativeSwipeout2 = _interopRequireDefault(_reactNativeSwipeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var Toast = function (_Component) {
  _inherits(Toast, _Component);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: 'renderStatus',
    value: function renderStatus(status) {
      if (status === 'CANCELED') {
        return _react2.default.createElement(
          _reactNative.View,
          { style: { flexDirection: 'row', justifyContent: 'flex-end' } },
          _react2.default.createElement(
            _reactNative.Text,
            { style: { color: 'red', fontFamily: 'Lato-Heavy', fontSize: 9, textAlign: 'right' } },
            'CANCELADO'
          )
        );
      }
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flexDirection: 'row', backgroundColor: status == 'TO_CONFIRM' ? 'rgb(237,41,57)' : status == 'PREPEARING' ? '#f5a623' : 'rgb(0,175,135)', justifyContent: 'flex-end', padding: 3, borderRadius: 3, paddingHorizontal: 5 } },
        _react2.default.createElement(
          _reactNative.Text,
          { style: { color: '#fff', fontFamily: 'Lato-Heavy', fontSize: 9, textAlign: 'right' } },
          get_text(status)
        )
      );
    }
  }, {
    key: 'renderClose',
    value: function renderClose(status) {
      var _this2 = this;

      if (status != 'READY' && status != 'CANCELED') return null;
      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { onPress: function onPress() {
            return _this2.props.dismiss();
          }, style: { position: 'absolute', right: 0, top: 0, padding: 5, zIndex: 99999 } },
        _react2.default.createElement(_reactNative.Image, { style: { height: 15, width: 15 }, source: require('../assets/icons/clean-input.png') })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var swipeoutBtns = [{ text: '' }];

      if (!this.props.data['status']) return null;
      return _react2.default.createElement(
        _reactNative.ImageBackground,
        { resizeMode: 'cover', style: { height: 100, padding: 10, position: 'absolute', bottom: 44, width: width }, source: require('../assets/icons/shadow.png') },
        _react2.default.createElement(
          _reactNativeSwipeout2.default,
          {
            backgroundColor: '#fff',
            onOpen: function onOpen() {
              return _this3.props.dismiss();
            },
            sensitivity: 80,
            autoClose: true,
            right: swipeoutBtns,
            style: { padding: 0, backgroundColor: 'red', margin: 0 } },
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: function onPress() {
                return _this3.props.onPress();
              },
              disabled: this.props.disabled,
              style: { backgroundColor: '#fff', borderRadius: 5, height: 76, marginTop: 4 } },
            _react2.default.createElement(
              _reactNative.View,
              { style: { flexDirection: 'row', alignItems: 'center', flex: 1, paddingHorizontal: 20 } },
              _react2.default.createElement(_reactNative.Image, { style: { height: 40, width: 40, borderRadius: 7.5 }, source: { uri: this.props.data.img } }),
              _react2.default.createElement(
                _reactNative.View,
                { style: { flexDirection: 'column', flex: 1, marginLeft: 15 } },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#444', fontFamily: 'Lato-Heavy', fontSize: 15 } },
                  this.props.data.title
                ),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#8a8a8a', fontFamily: 'Lato-Medium', fontSize: 14 } },
                  this.props.data.local
                )
              ),
              this.renderStatus(this.props.data.status),
              this.renderClose(this.props.data.status)
            )
          )
        )
      );
    }
  }]);

  return Toast;
}(_react.Component);

var get_text = function get_text(status) {
  switch (status) {
    case 'TO_CONFIRM':
      return 'A CONFIRMAR';
    case 'PREPEARING':
      return 'EN PROCESO';
    case 'READY':
      return 'FINALIZADO';
    default:
      return '';
  }
};

exports.default = Toast;