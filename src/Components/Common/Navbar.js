import React from 'react'
import { Text, View, Dimensions, Platform, TouchableOpacity, Image } from 'react-native';

import settings from '../../settings'

const Navbar = (props) => {
    return(
        <View
            style={[ styles.Navbar, props.customStyle ]}>
            { !props.leftIcon ? null : props.renderLeft() }
            <Text style={[{ color: '#fff', fontSize: 15, fontFamily: 'Lato-Heavy', marginTop: Platform.OS == 'android' ? 5 : 0, },   props.txtStyles ]} >{ props.title }</Text>
        </View>
    )
}


const styles = {
    Navbar : {
        justifyContent: 'center',
        height: Platform.OS == 'android' ? 80 : 64,
        paddingTop: Platform.OS == 'android' ? 20 : 13,
        alignItems: 'center',
        backgroundColor: settings.NAVBAR_DEFAULT_COLOR,
        width: Dimensions.get('window').width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(239,239,244)'

    }
}

export default Navbar
