'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _settings = require('../../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderImage = function renderImage(props) {
    if (!props.local.logo) return null;

    return _react2.default.createElement(
        _reactNative.ImageBackground,
        {
            resizeMode: 'contain',
            style: { height: 45, width: 45, borderRadius: 12 },
            source: require('../../assets/Images/logo-placeholder.png') },
        _react2.default.createElement(_reactNative.Image, { style: { height: 45, width: 45, borderRadius: 12 }, source: { uri: props.local.logo } })
    );
};

var Card = function (_Component) {
    _inherits(Card, _Component);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

        _this.state = {
            distance: ''
        };
        return _this;
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            return _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                    key: props.index,
                    style: _extends({}, styles.btnDefault, props.style),
                    disabled: props.disabled,
                    onPress: function onPress() {
                        return props.onPress();
                    } },
                _settings2.default.PROJECT != 'Foodcloud' ? null : renderImage(props),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: { justifyContent: 'center', flex: 4, paddingLeft: 10, paddingTop: 5 } },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.text },
                        props.local.name
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: { flexDirection: 'row' } },
                        renderCategories(props.local.category)
                    ),
                    props.schedules
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: { justifyContent: 'center' } },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: { textAlign: 'right', fontFamily: 'Lato-Medium', fontSize: 11, marginRight: 10, color: 'rgb(143,142,148)', marginTop: 3.5 } },
                        props.distance > 1 ? props.distance.toFixed(1) + 'km' : (props.distance * 1000).toFixed(0) + 'm'
                    )
                ),
                !props.discount || props.discount < 1 ? null : _react2.default.createElement(
                    _reactNative.View,
                    { style: { height: 15, backgroundColor: _settings2.default.DEFAULT_COLOR, width: 50, borderRadius: 25, justifyContent: 'center', right: 15, top: 15, position: 'absolute', paddingHorizontal: 3 } },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: { textAlign: 'center', margin: 0, fontSize: 11, color: '#fff', fontFamily: 'Lato-Heavy', backgroundColor: 'rgba(0,0,0,0)' } },
                        props.discount,
                        '% Off'
                    )
                )
            );
        }
    }]);

    return Card;
}(_react.Component);

exports.default = Card;


var renderCategories = function renderCategories(categories) {
    if (!categories) return null;
    return categories.map(function (category, key) {
        return _react2.default.createElement(
            _reactNative.Text,
            { key: key, style: styles.subtext },
            key > 0 ? ' \u2022 ' + category.name : category.name
        );
    });
};

var styles = {
    btnDefault: {
        padding: 10,
        paddingBottom: 15,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 2,
        height: 90,
        flexDirection: 'row'
    },
    text: {
        color: 'rgb(73,73,73)',
        fontSize: 15,
        fontFamily: 'Lato-Heavy',
        fontWeight: '700'
    },
    subtext: {
        color: 'rgb(138,138,138)',
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        marginTop: 2
    }
};