import React, { Component } from  'react';

import { View, TouchableOpacity, Image, Text } from 'react-native';

import settings from  '../settings'

class CustomBox extends Component {
    render(){
        let props = this.props
        return(
            <TouchableOpacity
                onPress={ ()=>  props.onPress(props) }
                key={ props.index }
                disabled={ props.disabled }
                style={[ buttonStyle ]} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={ ()=>  props.onPress(props) }
                        disabled={ props.disabled }
                        style={[ boxStyles, { backgroundColor: !props.active ? 'transparent' : settings.DEFAULT_COLOR }]}>
                        {
                            !props.active ? null :
                            <Image
                                resizeMode="contain"
                                style={{ height: 10, width: 12 }}
                                source={ require('../assets/icons/checkbox.png') } />
                        }
                    </TouchableOpacity>

                    <Text style={[ optionName, { fontWeight: (props.active) ? '800' : '400',  color: props.disabled ? '#d0d0d0' : 'rgb(68,68,68)'  }]}>

                        { props.name }

                    </Text>

                </View>
                {
                    props.price == 0
                        ? null
                        : <Text
                            style={[ priceStyle, { fontWeight: (props.active) ? '800' : '400' }]}>
                            +${ props.price }
                        </Text>
                }
            </TouchableOpacity>
        )
    }
}

const buttonStyle = { backgroundColor: '#fff', height: 54, justifyContent: 'space-between', paddingLeft: 4, paddingRight: 15, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'rgb(239,239,244)', borderBottomWidth: 1 };

const optionName = { fontSize: 15, color: 'rgb(68,68,68)', fontFamily: 'Lato-Medium' };

const priceStyle = { color: 'rgb(73,73,73)', fontSize: 14, fontFamily: 'Lato-Heavy', };

const boxStyles = { height: 18, width: 18, justifyContent: 'center', alignItems: 'center', borderColor: settings.DEFAULT_COLOR, borderWidth: 2, borderRadius: 3, marginHorizontal: 10 }


export default CustomBox
