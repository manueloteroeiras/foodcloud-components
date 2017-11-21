import React, { Component } from  'react';

import { View, TouchableOpacity, Image, Text, ImageBackground, Dimensions } from 'react-native';


import settings from  '../settings'

import Swipeout from 'react-native-swipeout'

const { height, width } = Dimensions.get('window')

class Toast extends Component {

    renderStatus(status){
      if (status === 'CANCELED') {
        return(
          <View style={{ flexDirection: 'row' , justifyContent: 'flex-end', }}>
            <Text style={{ color: 'red', fontFamily: 'Lato-Heavy', fontSize: 9, textAlign: 'right' }} >{ 'CANCELADO' }</Text>
          </View>
        )
      }
      return (
        <View style={{ flexDirection: 'row',  backgroundColor: (status == 'TO_CONFIRM') ? 'rgb(237,41,57)' : (status == 'PREPEARING') ? '#f5a623' : 'rgb(0,175,135)' , justifyContent: 'flex-end', padding: 3, borderRadius: 3, paddingHorizontal: 5  }}>
          <Text style={{ color: '#fff', fontFamily: 'Lato-Heavy', fontSize: 9, textAlign: 'right' }} >{ get_text(status) }</Text>
        </View>
      )
    }

    renderClose(status){
      if (status != 'READY' && status != 'CANCELED') return null
      return(
        <TouchableOpacity onPress={ ()=> this.props.dismiss() } style={{ position: 'absolute', right: 0, top: 0, padding: 5, zIndex: 99999 }}>
          <Image style={{ height: 15, width: 15, }} source={ require('../assets/icons/clean-input.png') } />
        </TouchableOpacity>
      )

    }

    render(){
      const swipeoutBtns = [
        { text: '' },
      ]

        if(!this.props.data['status']) return null
        return(
          <ImageBackground resizeMode="cover" style={{ height: 100, padding: 10, position: 'absolute', bottom: 44, width: width }} source={ require('../assets/icons/shadow.png') }>
            <Swipeout
                backgroundColor={ '#fff' }
                onOpen={ ()=> this.props.dismiss() }
                sensitivity={ 80 }
                autoClose={ true }
                right={swipeoutBtns}
                style={{ padding: 0, backgroundColor: 'red', margin: 0}}>

              <TouchableOpacity
                  onPress={ ()=> this.props.onPress() }
                  disabled={ this.props.disabled }
                  style={{ backgroundColor: '#fff', borderRadius: 5, height: 76, marginTop: 4 }} >

                  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingHorizontal: 20 }}>
                    <Image style={{ height: 40, width: 40, borderRadius: 7.5 }} source={{ uri: this.props.data.img }} />

                    <View style={{ flexDirection: 'column', flex: 1, marginLeft: 15 }}>
                      <Text style={{ color: '#444', fontFamily: 'Lato-Heavy', fontSize: 15 }} >{ this.props.data.title }</Text>
                      <Text style={{ color: '#8a8a8a', fontFamily: 'Lato-Medium', fontSize: 14 }} >{ this.props.data.local }</Text>
                    </View>


                    { this.renderStatus(this.props.data.status) }

                    { this.renderClose(this.props.data.status) }

                  </View>
              </TouchableOpacity>

            </Swipeout>
          </ImageBackground>
        )
    }
}

const get_text = (status) =>{
  switch (status) {
    case 'TO_CONFIRM':
      return 'A CONFIRMAR'
    case 'PREPEARING':
      return 'EN PROCESO'
    case 'READY':
      return 'FINALIZADO'
    default:
      return ''
  }
}


export default Toast
