import React from 'react'
import { Text, TouchableOpacity, Platform, ActivityIndicator,  } from 'react-native';

import settings from '../../settings'

const Button = (props) => {
    return(
        <TouchableOpacity activeOpacity={ props.activeOpacity || .5 } style={[ styles.btnDefault, { backgroundColor : settings.DEFAULT_COLOR }, props.style ]} disabled={ props.disabled } onPress={ ()=> props.disabled ? null : props.onPress() } >
            {
                !props.loading  ?
                    <Text style={[{ color: '#fff', fontSize: 14, fontFamily: 'Lato-Heavy' },   props.txtStyles ]} >{ props.text }</Text> :
                    <ActivityIndicator size={ 'small' } style={ props.activityStyle } color={ props.activityColor || '#fff' }  />
            }
        </TouchableOpacity>
    )
}


const styles = {
    btnDefault : {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    }
}

export default Button
