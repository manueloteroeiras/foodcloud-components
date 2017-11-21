'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props) {
    var stylus = !props.textError ? {} : { borderBottomColor: 'red', borderBottomWidth: 2 };
    return _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(_reactNative.TextInput, _extends({
            style: _extends({}, styles.input, props.customStyle, stylus),
            onChangeText: function onChangeText(text) {
                return props.onChange(text);
            },
            value: props.value,
            autoCorrect: false,
            returnKeyType: props.returnKeyType,
            ref: props.ref,
            keyboardType: props.keyboardType,
            autoCapitalize: props.autoCapitalize,
            placeholder: props.placeholder,
            onEndEditing: props.onEndEditing,
            selectionColor: props.selectionColor || '#fff',
            placeholderTextColor: props.placeholderTextColor || '#8a8a8a',
            underlineColorAndroid: 'rgba(0,0,0,0)'
        }, props)),
        !props.textError ? null : _react2.default.createElement(
            _reactNative.Text,
            { style: styles.textError },
            ' ',
            props.textError,
            ' '
        )
    );
};

var styles = {
    input: {
        height: 56,
        borderBottomColor: '#cecece',
        backgroundColor: 'rgba(35,35,35,0.8)',
        fontSize: 14,
        color: '#fff',
        marginTop: 10,
        fontWeight: '600',
        fontFamily: 'Lato-Heavy',
        marginBottom: 0,
        padding: 10,
        paddingLeft: 18,
        borderRadius: 3
    },
    textError: {
        color: 'red'
    }
};

exports.default = Input;