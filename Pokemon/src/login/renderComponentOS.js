import React, {Component} from 'react';
import{
    Platform,
    TextInput
}from 'react-native';

import Styles from '../styles/styles';


export function renderTextInputUsername(This){
    if(Platform.OS === "android"){
        return <TextInput onChangeText ={(value) =>This.setState({username: value}) } 
            underlineColorAndroid = {'transparent'} multiline = {false} style = {Styles.textInput} placeholder = "USERNAME" placeholderTextColor = {"#fff"}/>;
    }else{
        return  <TextInput onChangeText ={(value) =>This.setState({username: value}) } multiline = {false} 
        style = {Styles.textInput} placeholder = "USERNAME" placeholderTextColor = {"#fff"}/>;
    }
}

export function renderTextInputPassword(){
    if(Platform.OS === "android"){
        return <TextInput underlineColorAndroid = {'transparent'} multiline = {false}  onChangeText ={(value) =>This.setState({password: value}) } 
        style = {Styles.textInput} placeholder = "PASSWORD" placeholderTextColor = {"#fff"}  secureTextEntry = {true}/>;
    }else{
        return  <TextInput multiline = {false} style = {Styles.textInput} onChangeText ={(value) =>This.setState({password: value}) } 
        placeholder = "PASSWORD" placeholderTextColor = {"#fff"}  secureTextEntry = {true}/>;
    }
}