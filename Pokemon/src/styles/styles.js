import{
    StyleSheet
}from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo:{
        flex: 3,
        width: 250,
        resizeMode: 'contain'
    },

    containerInput:{
        flex: 4
    },

    textRegister:{
        fontStyle: 'italic',
        fontSize: 14,
        alignSelf: 'flex-end',
        marginBottom: 5
    },

    textInput:{
        width: 250,
        fontSize: 14,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: '#FFF',
        
    },
    
    containerLoginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#rgba(253, 140, 140, 1)',
        padding: 10,
        width: 250

    }
    ,
    textLoginButton:{
        color: '#FFF',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10
       
    },
    lineBlack:{
        backgroundColor: '#2b2b2b',
        height: 0.5,
        width:250
    },

    line:{
        backgroundColor: '#2b2b2b',
        height: 0.5,
        flex: 1
    },

    row:{
        flexDirection: 'row',
        alignItems:'center',
        width: 250,
        justifyContent: 'center'
    },
    
    textConnectWith:{
        fontSize: 12,
        margin: 5,
        flex: 2,
        textAlign: 'center'

    },

    iconSocial:{
        width: 70,
        height: 70,
        flex: 1,
        margin: 5,
        resizeMode:'contain'
    },
    iconSocialGG:{
        width: 60,
        height: 60,
        flex: 1,
        margin: 5,
        resizeMode:'contain'
    }
});

export default Styles;