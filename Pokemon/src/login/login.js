import React, {Component} from 'react';
import{
    View,
    Image,
    ImageBackground,
    Text,
    TextInput, 
    TouchableHighlight,
    Platform
} from 'react-native';

import Styles from '../styles/styles';
import {renderTextInputUsername, renderTextInputPassword} from './renderComponentOS';


export default class DemoPokemon extends Component{

    constructor(props){
        super(props);

        background = require('../../src/images/background.jpg');
        logo = require('../../src/images/logo.png');

        iconFacebook = require('../../src/icons/icon_facebook.png');
        iconGooglePlus = require('../../src/icons/icon_gg.png');
        iconTwitter = require('../../src/icons/icon_twitter.png');

        this.state = {
            username: "",
            password: ""
        }
    }
    _onPress(){
        alert(this.state.username);

    }

    
    render(){
        return(
            <ImageBackground style = {Styles.container} source = {background}>
                <View style = {{flex:1}}>
                    <Image style = {Styles.logo} source = {logo}/>

                    <View style = {Styles.containerInput}>
                        <Text style = {Styles.textRegister}>REGISTER</Text>

                        {renderTextInputUsername(this)}
                        <View style = {Styles.lineBlack}/>
                        {renderTextInputPassword(this)}

                        <TouchableHighlight  onPress = {this._onPress.bind(this)} style = {Styles.containerLoginButton} >
                            <Text style = {Styles.textLoginButton}>LOGIN</Text>
                        </TouchableHighlight>

                        <View style = {Styles.row}>
                           <View style = {Styles.line} />
                           <Text style = {Styles.textConnectWith}>OR CONNECT WITH</Text>
                           <View style = {Styles.line} />

                        </View>

                        <View style = {Styles.row}>
                            <Image style = {Styles.iconSocial} source = {iconFacebook}/>
                            <Image style = {Styles.iconSocialGG} source = {iconGooglePlus}/>
                            <Image style = {Styles.iconSocial} source = {iconTwitter}/>
                        </View>

                    </View>

                </View>

                   
            </ImageBackground>
 
        );
    };
}

