import React, {Component} from 'react';
import {
    View, 
    Text,
    AppRegistry
}from 'react-native';

import {HomeStack} from './Router'

export default class App extends Component{
    
    render(){
        return(
            <HomeStack />
        );
    }
}

