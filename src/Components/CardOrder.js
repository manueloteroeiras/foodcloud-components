import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';

import moment from 'moment';

import { Button } from './'

import settings from '../settings'

const isTakeAway = (order)=>{
  return typeof(order.deliveredMethod) === 'string' ? true : order.deliveredMethod.type === 'takeAway' ? true : false
}

const renderStatusText = (order) =>{
    if (order.status == "READY") {
        if(!moment(order.deliveredDate).isBefore(new Date()) ){
            return(
                <Text
                    style={{ fontSize: 14, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)', textAlign: 'center', marginTop: 10 }}>
                    { isTakeAway(order) ? 'Listo' : 'En Viaje' }
                </Text>
            )
        }
        else {
            return(
                <Text
                    style={{ fontSize: 14, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)', textAlign: 'center', marginTop: 10 }}>
                    Finalizado
                </Text>
            )
        }

    }
    if (order.status == "CANCELED") {
        return(
            <Text
                style={{ fontSize: 14, fontFamily: 'Lato-Medium', color: 'rgb(138,138,138)', textAlign: 'center', marginTop: 10 }}>
                Cancelado
            </Text>
        )
    }
    return(
        <Text
            style={{ fontSize: 14, fontFamily: 'Lato-Medium', color: 'rgb(138,138,138)', textAlign: 'center', marginTop: 10 }}>
            Entrega estimada: { moment(order.deliveredDate).format('HH:mm A') }
        </Text>
    )
}

const renderStatus = (order) =>{
    let { status } = order;
    return(
        <View style={ styles.status }>
            <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: 'rgb(231,237,244)',borderTopWidth: 1, borderTopColor: 'rgb(231,237,244)', paddingTop: 10, paddingBottom: 10  }} >

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'rgb(231,237,244)', }} >
                    <View  style={{ width: 50, height: 5, borderRadius: 5, marginBottom: 10, backgroundColor: (status == "TO_CONFIRM" || status == "PREPEARING" || status == "READY") ? settings.DEFAULT_COLOR : 'rgb(216,216,216)' }} />
                    <Text style={{ fontSize: 9, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)' }}>A CONFIRMAR</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'rgb(231,237,244)', }} >
                    <View  style={{ width: 50, height: 5, borderRadius: 5, marginBottom: 10, backgroundColor: (status == "PREPEARING" || status == "READY") ? settings.DEFAULT_COLOR : 'rgb(216,216,216)' }} />
                    <Text style={{ fontSize: 9, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)' }}>EN PREPARACION</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <View  style={{ width: 50, height: 5, borderRadius: 5, marginBottom: 10, backgroundColor: (status == "READY") ? settings.DEFAULT_COLOR : 'rgb(216,216,216)' }} />
                    <Text style={{ fontSize: 9, fontFamily: 'Lato-Medium', color: 'rgb(68,68,68)' }}>{ isTakeAway(order) ? 'LISTO PARA RETIRAR' : 'DELIVERY' }</Text>
                </View>

            </View>

            {
                renderStatusText(order)
            }

        </View>
    )
}

const renderContent =(order) =>{
    console.log(order);
    return(
        <View style={ styles.content } >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Lato-Heavy', fontSize: 15, color: 'rgb(73,73,73)', lineHeight: 22.5 }} >{ order.subsidiary['name'] || '' }</Text>
                <Text style={{ fontFamily: 'Lato-Heavy', fontSize: 14, color: 'rgb(73,73,73)', lineHeight: 22.5 }} >#{ order.orderID || '' }</Text>
            </View>
            {
                (!order.products) ? null :
                order.products.map((product, key)=>{
                    return(
                        <View key={ `${product.name }-${ key }` } style={{ flexDirection: 'column' }} >
                            <Text style={[ styles.text, { lineHeight: 21 } ]} >{ product.count } { product.name }</Text>
                        </View>
                    )
                })
            }

        </View>
    )
}

const renderHeader = (order) =>{
    let dayUpper  = moment(order.deliveredDate).format('dddd').substring(0,1).toUpperCase()
    let day  = moment(order.deliveredDate).format('dddd').substr(1);


    return(
        <View style={ styles.header } >
            {
                isTakeAway(order) ?
                <View style={{ flexDirection: 'row' }}>
                    <Image source={ require('../assets/icons/take_away.png') } resizeMode='contain' style={{ height: 15, width:14, marginRight: 5 }} />
                    <Text style={[ styles.text, styles.small, { color: 'rgb(73,73,73)' } ]}>TAKE AWAY</Text>
                </View>
                :
                <View style={{ flexDirection: 'row' }}>
                    <Image source={ require('../assets/icons/delivery.png') } resizeMode='contain' style={{ height: 15, width:14, marginRight: 5 }} />
                    <Text style={[ styles.text, styles.small,  { color: 'rgb(73,73,73)' } ]}>DELIVERY</Text>
                </View>
            }


            <Text style={[ styles.text, styles.small, { color: 'rgb(73,73,73)' } ]}>
                {`${ dayUpper }${ day } ${ moment(order.createdOn).format('DD/MM') } ${ moment(order.createdOn).format('HH:mm') } hs`}
            </Text>
        </View>
    )
}



const CardOrder = (props)=>{
    return(
        <View key={ props.index } style={{ paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff', marginBottom: 15 }} >
            { renderHeader(props.order) }

            { renderContent(props.order) }

            { renderStatus(props.order) }
        </View>
    )
}

const styles = {
    header: {
        height: 33,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderBottomColor: 'rgb(231,237,244)',
        borderBottomWidth: 1,
    },

    content: {
        flex: 1,
        // paddingLeft: 10,
        // paddingRight: 10,
        // borderTopColor: 'rgb(231,237,244)',
        // borderBottomWidth: 1,
        // borderBottomColor: 'rgb(231,237,244)',
        paddingHorizontal :10,
        paddingVertical :10,
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
}

export default CardOrder
