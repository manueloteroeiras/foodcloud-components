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

var Button = function Button(props) {
    return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { activeOpacity: props.activeOpacity || .5, style: [styles.btnDefault, { backgroundColor: _settings2.default.DEFAULT_COLOR }, props.style], disabled: props.disabled, onPress: function onPress() {
                return props.disabled ? null : props.onPress();
            } },
        !props.loading ? _react2.default.createElement(
            _reactNative.Text,
            { style: [{ color: '#fff', fontSize: 14, fontFamily: 'Lato-Heavy' }, props.txtStyles] },
            props.text
        ) : _react2.default.createElement(_reactNative.ActivityIndicator, { size: 'small', style: props.activityStyle, color: props.activityColor || '#fff' })
    );
};

var styles = {
    btnDefault: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    }
};

exports.default = Button;