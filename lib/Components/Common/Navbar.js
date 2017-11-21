'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _settings = require('../../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(props) {
    return _react2.default.createElement(
        _reactNative.View,
        {
            style: [styles.Navbar, props.customStyle] },
        !props.leftIcon ? null : props.renderLeft(),
        _react2.default.createElement(
            _reactNative.Text,
            { style: [{ color: '#fff', fontSize: 15, fontFamily: 'Lato-Heavy', marginTop: _reactNative.Platform.OS == 'android' ? 5 : 0 }, props.txtStyles] },
            props.title
        )
    );
};

var styles = {
    Navbar: {
        justifyContent: 'center',
        height: _reactNative.Platform.OS == 'android' ? 80 : 64,
        paddingTop: _reactNative.Platform.OS == 'android' ? 20 : 13,
        alignItems: 'center',
        backgroundColor: _settings2.default.NAVBAR_DEFAULT_COLOR,
        width: _reactNative.Dimensions.get('window').width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(239,239,244)'

    }
};

exports.default = Navbar;