import React from 'react'
import { Text, View, Dimensions, Platform, ImageBackground, TextInput } from 'react-native';

import Input from "./Input";

import settings from '../../settings'

const NavBarFoodCloud = (props) => {
    return(
        <ImageBackground
            source={ require('../../assets/Images/navbar_bg.png') }
            style={[ styles.Navbar, props.customStyle,
                {
                    height: Platform.OS == 'android' ? props['renderInput'] ? 120 : 80 : props['renderInput'] ? 100 : 64,
                    paddingTop: Platform.OS == 'android' ? 20 : 13,
                }]}>
            <Text style={[{ color: '#fff', fontSize: 15, fontFamily: 'Lato-Heavy', marginTop: Platform.OS == 'android' ? 5 : 0, backgroundColor: 'rgba(0,0,0,0)' },   props.txtStyles ]} >{ props.title }</Text>
            { props['renderInput'] ? props.renderInput() : null }
        </ImageBackground>
    )
}


const styles = {
    Navbar : {
        justifyContent: 'center',
        height: Platform.OS == 'android' ? 120 : 100,
        paddingTop: Platform.OS == 'android' ? 20 : 13,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        width: Dimensions.get('window').width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(239,239,244)'

    }
}

export default NavBarFoodCloud
