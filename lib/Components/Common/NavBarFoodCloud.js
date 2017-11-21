'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _settings = require('../../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBarFoodCloud = function NavBarFoodCloud(props) {
    return _react2.default.createElement(
        _reactNative.ImageBackground,
        {
            source: require('../../assets/Images/navbar_bg.png'),
            style: [styles.Navbar, props.customStyle, {
                height: _reactNative.Platform.OS == 'android' ? props['renderInput'] ? 120 : 80 : props['renderInput'] ? 100 : 64,
                paddingTop: _reactNative.Platform.OS == 'android' ? 20 : 13
            }] },
        _react2.default.createElement(
            _reactNative.Text,
            { style: [{ color: '#fff', fontSize: 15, fontFamily: 'Lato-Heavy', marginTop: _reactNative.Platform.OS == 'android' ? 5 : 0, backgroundColor: 'rgba(0,0,0,0)' }, props.txtStyles] },
            props.title
        ),
        props['renderInput'] ? props.renderInput() : null
    );
};

var styles = {
    Navbar: {
        justifyContent: 'center',
        height: _reactNative.Platform.OS == 'android' ? 120 : 100,
        paddingTop: _reactNative.Platform.OS == 'android' ? 20 : 13,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        width: _reactNative.Dimensions.get('window').width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(239,239,244)'

    }
};

exports.default = NavBarFoodCloud;