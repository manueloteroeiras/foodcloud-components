import React from 'react'
import { Text, TextInput, View } from 'react-native';


const Input = (props) => {
    let stylus = ( !props.textError ) ? {} : { borderBottomColor: 'red', borderBottomWidth: 2 }
    return(
          <View>
              <TextInput 
                style={{ ...styles.input, ...props.customStyle, ...stylus }}
                onChangeText={(text) => props.onChange(text) }
                value={props.value}
                autoCorrect={ false }
                returnKeyType={ props.returnKeyType }
                ref={ props.ref }
                keyboardType={ props.keyboardType }
                autoCapitalize={ props.autoCapitalize }
                placeholder={ props.placeholder }
                onEndEditing={ props.onEndEditing }
                selectionColor={ props.selectionColor || '#fff' }  
                placeholderTextColor={ props.placeholderTextColor || '#8a8a8a' }
                underlineColorAndroid={'rgba(0,0,0,0)' }
                { ...props }
            />
            { ( !props.textError ) ? null : <Text style={ styles.textError } > { props.textError } </Text> }
          </View>
    )
}


const styles = {
    input : {
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
    textError : {
        color: 'red'
    }
}

export default Input