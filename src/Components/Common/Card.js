import React, { Component } from 'react'
import { Text, TouchableOpacity, Image, View, ImageBackground } from 'react-native';

import settings from '../../settings'

const renderImage = (props) =>{
    if(!props.local.logo) return null

    return (
        <ImageBackground
            resizeMode='contain'
            style={{ height: 45, width: 45, borderRadius: 12 }}
            source={ require('../../assets/Images/logo-placeholder.png') }>
            <Image style={{ height: 45, width: 45, borderRadius: 12 }} source={{ uri: props.local.logo }} />
        </ImageBackground>
    )
}


export default class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            distance : ''
        }
    }


    render(){
        let props = this.props;
        return(
            <TouchableOpacity
                key={  props.index }
                style={{ ...styles.btnDefault, ...props.style }}
                disabled={ props.disabled }
                onPress={ ()=> props.onPress() }>

                { settings.PROJECT != 'Foodcloud' ? null : renderImage(props) }

                <View style={{ justifyContent: 'center', flex: 4, paddingLeft: 10, paddingTop: 5 }} >
                    <Text style={ styles.text } >{props.local.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        { renderCategories(props.local.category) }
                    </View>

                    { props.schedules }
                </View>

                <View style={{ justifyContent: 'center' }} >
                    <Text style={{ textAlign: 'right', fontFamily: 'Lato-Medium', fontSize: 11, marginRight: 10, color: 'rgb(143,142,148)', marginTop: 3.5 }} >{ props.distance > 1 ? `${ props.distance.toFixed(1) }km` : `${ (props.distance * 1000).toFixed(0) }m` }</Text>
                </View>


               {
                   (!props.discount || props.discount < 1) ? null :
                   <View style={{height: 15, backgroundColor: settings.DEFAULT_COLOR, width: 50,   borderRadius: 25, justifyContent: 'center', right: 15, top: 15, position: 'absolute', paddingHorizontal: 3 }} >
                        <Text style={{  textAlign: 'center',margin :0, fontSize: 11, color: '#fff', fontFamily: 'Lato-Heavy', backgroundColor : 'rgba(0,0,0,0)' }} >{ props.discount }% Off</Text>
                    </View>
               }

            </TouchableOpacity>
        )
    }
}

const renderCategories = (categories) =>{
    if (!categories) return null
    return categories.map((category, key) =>{
        return <Text key={ key } style={ styles.subtext }>{ (key > 0) ? ` • ${ category.name }` : category.name }</Text>
    })
}



const styles = {
    btnDefault : {
        padding: 10,
        paddingBottom: 15,
        backgroundColor : '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop : 2,
        height: 90,
        flexDirection: 'row'
    },
    text : {
        color:  'rgb(73,73,73)',
        fontSize: 15,
        fontFamily: 'Lato-Heavy',
        fontWeight: '700'
    },
    subtext : {
        color:  'rgb(138,138,138)',
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        marginTop: 2,
    }
}
