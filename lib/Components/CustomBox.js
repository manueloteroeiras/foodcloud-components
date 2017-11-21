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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomBox = function (_Component) {
    _inherits(CustomBox, _Component);

    function CustomBox() {
        _classCallCheck(this, CustomBox);

        return _possibleConstructorReturn(this, (CustomBox.__proto__ || Object.getPrototypeOf(CustomBox)).apply(this, arguments));
    }

    _createClass(CustomBox, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            return _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                    onPress: function onPress() {
                        return props.onPress(props);
                    },
                    key: props.index,
                    disabled: props.disabled,
                    style: [buttonStyle] },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: { flexDirection: 'row', alignItems: 'center' } },
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return props.onPress(props);
                            },
                            disabled: props.disabled,
                            style: [boxStyles, { backgroundColor: !props.active ? 'transparent' : _settings2.default.DEFAULT_COLOR }] },
                        !props.active ? null : _react2.default.createElement(_reactNative.Image, {
                            resizeMode: 'contain',
                            style: { height: 10, width: 12 },
                            source: require('../assets/icons/checkbox.png') })
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [optionName, { fontWeight: props.active ? '800' : '400', color: props.disabled ? '#d0d0d0' : 'rgb(68,68,68)' }] },
                        props.name
                    )
                ),
                props.price == 0 ? null : _react2.default.createElement(
                    _reactNative.Text,
                    {
                        style: [priceStyle, { fontWeight: props.active ? '800' : '400' }] },
                    '+$',
                    props.price
                )
            );
        }
    }]);

    return CustomBox;
}(_react.Component);

var buttonStyle = { backgroundColor: '#fff', height: 54, justifyContent: 'space-between', paddingLeft: 4, paddingRight: 15, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'rgb(239,239,244)', borderBottomWidth: 1 };

var optionName = { fontSize: 15, color: 'rgb(68,68,68)', fontFamily: 'Lato-Medium' };

var priceStyle = { color: 'rgb(73,73,73)', fontSize: 14, fontFamily: 'Lato-Heavy' };

var boxStyles = { height: 18, width: 18, justifyContent: 'center', alignItems: 'center', borderColor: _settings2.default.DEFAULT_COLOR, borderWidth: 2, borderRadius: 3, marginHorizontal: 10 };

exports.default = CustomBox;