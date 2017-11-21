import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';

const Counter = (props) =>{
    return(
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
            <TouchableOpacity onPress={ ()=> (props.count > 1)? props.odd() : null } style={{ height: 46.5, backgroundColor: '#fff', borderBottomLeftRadius: 22, borderTopLeftRadius: 22, width: 45, paddingLeft: 25, justifyContent: 'center' }} >
            <Text style={{ fontSize: 20, fontWeight: '800' }} >
                -
            </Text>
            </TouchableOpacity>

            <Text
                style={{ padding: 10, backgroundColor: '#fff', fontSize: 16, width: 45, textAlign: 'center', height: 46.5, paddingTop: 13}} >
                { props.count }
            </Text>

            <TouchableOpacity onPress={ ()=> (props.count < 10)? props.add() : null } style={{ height: 46.5, padding: 10, backgroundColor: '#fff', borderBottomRightRadius: 22, borderTopRightRadius: 22, width: 45 }} >
            <Text style={{ fontSize: 20, fontWeight: '500' }} >
                +
            </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter