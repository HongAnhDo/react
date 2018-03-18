import React, {Component} from 'react';
import {
    View, 
    Text,
    TouchableOpacity
}from 'react-native';


export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            thamso: this.props.navigation
        }

    }

    render(){
        return(
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home</Text>

                <TouchableOpacity style = {{backgroundColor: 'green'}}
                 onPress = {()=>{this.props.navigation.navigate('ManHinh_Detail', {thamso: 'Hong Anh Do'})}}>
                    <Text style = {{color: '#fff', fontSize: 20, padding: 10}}> Go to Detail </Text>
                </TouchableOpacity>
            </View>
        );
    }
}