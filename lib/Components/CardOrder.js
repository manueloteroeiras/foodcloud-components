'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ = require('./');

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTakeAway = function isTakeAway(order) {
    return typeof order.deliveredMethod === 'string' ? true : order.deliveredMethod.type === 'takeAway' ? true : false;
};

var renderStatusText = function renderStatusText(order) {
    if (order.status == "READY") {
        if (!(0, _moment2.default)(order.deliveredDate).isBefore(new Date())) {
            return _react2.default.createElement(
                _reactNative.Text,
                {
                    style: { fontSize: 14, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)', textAlign: 'center', marginTop: 10 } },
                isTakeAway(order) ? 'Listo' : 'En Viaje'
            );
        } else {
            return _react2.default.createElement(
                _reactNative.Text,
                {
                    style: { fontSize: 14, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)', textAlign: 'center', marginTop: 10 } },
                'Finalizado'
            );
        }
    }
    if (order.status == "CANCELED") {
        return _react2.default.createElement(
            _reactNative.Text,
            {
                style: { fontSize: 14, fontFamily: 'Lato-Medium', color: 'rgb(138,138,138)', textAlign: 'center', marginTop: 10 } },
            'Cancelado'
        );
    }
    return _react2.default.createElement(
        _reactNative.Text,
        {
            style: { fontSize: 14, fontFamily: 'Lato-Medium', color: 'rgb(138,138,138)', textAlign: 'center', marginTop: 10 } },
        'Entrega estimada: ',
        (0, _moment2.default)(order.deliveredDate).format('HH:mm A')
    );
};

var renderStatus = function renderStatus(order) {
    var status = order.status;

    return _react2.default.createElement(
        _reactNative.View,
        { style: styles.status },
        _react2.default.createElement(
            _reactNative.View,
            { style: { height: 50, flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: 'rgb(231,237,244)', borderTopWidth: 1, borderTopColor: 'rgb(231,237,244)', paddingTop: 10, paddingBottom: 10 } },
            _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'rgb(231,237,244)' } },
                _react2.default.createElement(_reactNative.View, { style: { width: 50, height: 5, borderRadius: 5, marginBottom: 10, backgroundColor: status == "TO_CONFIRM" || status == "PREPEARING" || status == "READY" ? _settings2.default.DEFAULT_COLOR : 'rgb(216,216,216)' } }),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: { fontSize: 9, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)' } },
                    'A CONFIRMAR'
                )
            ),
            _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'rgb(231,237,244)' } },
                _react2.default.createElement(_reactNative.View, { style: { width: 50, height: 5, borderRadius: 5, marginBottom: 10, backgroundColor: status == "PREPEARING" || status == "READY" ? _settings2.default.DEFAULT_COLOR : 'rgb(216,216,216)' } }),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: { fontSize: 9, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)' } },
                    'EN PREPARACION'
                )
            ),
            _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                _react2.default.createElement(_reactNative.View, { style: { width: 50, height: 5, borderRadius: 5, marginBottom: 10, backgroundColor: status == "READY" ? _settings2.default.DEFAULT_COLOR : 'rgb(216,216,216)' } }),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: { fontSize: 9, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)' } },
                    isTakeAway(order) ? 'LISTO PARA RETIRAR' : 'DELIVERY'
                )
            )
        ),
        renderStatusText(order)
    );
};

var renderContent = function renderContent(order) {
    console.log(order);
    return _react2.default.createElement(
        _reactNative.View,
        { style: styles.content },
        _react2.default.createElement(
            _reactNative.View,
            { style: { flexDirection: 'row', justifyContent: 'space-between' } },
            _react2.default.createElement(
                _reactNative.Text,
                { style: { fontFamily: 'Lato-Heavy', fontSize: 15, color: 'rgb(73,73,73)', lineHeight: 22.5 } },
                order.subsidiary['name'] || ''
            ),
            _react2.default.createElement(
                _reactNative.Text,
                { style: { fontFamily: 'Lato-Heavy', fontSize: 14, color: 'rgb(73,73,73)', lineHeight: 22.5 } },
                '#',
                order.orderID || ''
            )
        ),
        !order.products ? null : order.products.map(function (product, key) {
            return _react2.default.createElement(
                _reactNative.View,
                { key: product.name + '-' + key, style: { flexDirection: 'column' } },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: [styles.text, { lineHeight: 21 }] },
                    product.count,
                    ' ',
                    product.name
                )
            );
        })
    );
};

var renderHeader = function renderHeader(order) {
    var dayUpper = (0, _moment2.default)(order.deliveredDate).format('dddd').substring(0, 1).toUpperCase();
    var day = (0, _moment2.default)(order.deliveredDate).format('dddd').substr(1);

    return _react2.default.createElement(
        _reactNative.View,
        { style: styles.header },
        isTakeAway(order) ? _react2.default.createElement(
            _reactNative.View,
            { style: { flexDirection: 'row' } },
            _react2.default.createElement(_reactNative.Image, { source: require('../assets/icons/take_away.png'), resizeMode: 'contain', style: { height: 15, width: 14, marginRight: 5 } }),
            _react2.default.createElement(
                _reactNative.Text,
                { style: [styles.text, styles.small, { color: 'rgb(73,73,73)' }] },
                'TAKE AWAY'
            )
        ) : _react2.default.createElement(
            _reactNative.View,
            { style: { flexDirection: 'row' } },
            _react2.default.createElement(_reactNative.Image, { source: require('../assets/icons/delivery.png'), resizeMode: 'contain', style: { height: 15, width: 14, marginRight: 5 } }),
            _react2.default.createElement(
                _reactNative.Text,
                { style: [styles.text, styles.small, { color: 'rgb(73,73,73)' }] },
                'DELIVERY'
            )
        ),
        _react2.default.createElement(
            _reactNative.Text,
            { style: [styles.text, styles.small, { color: 'rgb(73,73,73)' }] },
            '' + dayUpper + day + ' ' + (0, _moment2.default)(order.createdOn).format('DD/MM') + ' ' + (0, _moment2.default)(order.createdOn).format('HH:mm') + ' hs'
        )
    );
};

var CardOrder = function CardOrder(props) {
    return _react2.default.createElement(
        _reactNative.View,
        { key: props.index, style: { paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff', marginBottom: 15 } },
        renderHeader(props.order),
        renderContent(props.order),
        renderStatus(props.order)
    );
};

var styles = {
    header: {
        height: 33,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderBottomColor: 'rgb(231,237,244)',
        borderBottomWidth: 1
    },

    content: {
        flex: 1,
        // paddingLeft: 10,
        // paddingRight: 10,
        // borderTopColor: 'rgb(231,237,244)',
        // borderBottomWidth: 1,
        // borderBottomColor: 'rgb(231,237,244)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },

    status: {
        // borderTopColor: 'rgb(231,237,244)',
        // borderTopWidth: .5,
        height: 90,
        backgroundColor: '#fff'
    },

    text: {
        fontFamily: 'Lato-Medium',
        fontSize: 14,
        color: 'rgb(138,138,138)'
    },

    small: {
        fontFamily: 'Lato-Medium',
        fontSize: 11,
        color: 'rgb(138,138,138)'
    },

    bold: {
        fontFamily: 'Lato-Heavy',
        fontSize: 15,
        marginBottom: 5,
        color: 'rgb(68,68,68)'
    }
};

exports.default = CardOrder;