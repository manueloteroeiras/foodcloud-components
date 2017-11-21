'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = function Counter(props) {
    return _react2.default.createElement(
        _reactNative.View,
        { style: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } },
        _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                    return props.count > 1 ? props.odd() : null;
                }, style: { height: 46.5, backgroundColor: '#fff', borderBottomLeftRadius: 22, borderTopLeftRadius: 22, width: 45, paddingLeft: 25, justifyContent: 'center' } },
            _react2.default.createElement(
                _reactNative.Text,
                { style: { fontSize: 20, fontWeight: '800' } },
                '-'
            )
        ),
        _react2.default.createElement(
            _reactNative.Text,
            {
                style: { padding: 10, backgroundColor: '#fff', fontSize: 16, width: 45, textAlign: 'center', height: 46.5, paddingTop: 13 } },
            props.count
        ),
        _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                    return props.count < 10 ? props.add() : null;
                }, style: { height: 46.5, padding: 10, backgroundColor: '#fff', borderBottomRightRadius: 22, borderTopRightRadius: 22, width: 45 } },
            _react2.default.createElement(
                _reactNative.Text,
                { style: { fontSize: 20, fontWeight: '500' } },
                '+'
            )
        )
    );
};

exports.default = Counter;