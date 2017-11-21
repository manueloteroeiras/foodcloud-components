import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Dimensions, StatusBar, Platform, Keyboard } from 'react-native';

const { width, height } = Dimensions.get('window')

export default class ModalCustom extends Component {
    constructor(props){
        super(props);

        this.handleKeyboardHide = this.handleKeyboardHide.bind(this)
    }

    componentDidMount() {
        Keyboard.addListener('keyboardWillHide', this.handleKeyboardHide);
        Keyboard.addListener('keyboardDidHide', this.handleKeyboardHide);
    }

    handleKeyboardHide(){
        if (!this.props.notClose) {
            this.props.close();
        }
    }

    render(){
        let props = this.props;
        return(
            <Modal
              animationType={"fade"}
              transparent={props.transparent}
              visible={props.visible}
              {...props}>

                <KeyboardAvoidingView
                    behavior={ props.behavior || 'height' }
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={Platform.select({ios: 0, android: 25})}>

                    <TouchableOpacity activeOpacity={ 1 } style={{ backgroundColor: 'rgba(0,0,0,.8)', flex: 1 }} onPress={()=> this.handleKeyboardHide() }>

                            { props.children }

                    </TouchableOpacity>

                </KeyboardAvoidingView>

            </Modal>
        )
    }


}
