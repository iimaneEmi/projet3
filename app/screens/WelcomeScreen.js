import React from 'react';
import { ImageBackgroundBase, SafeAreaView, StyleSheet, View, Text, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';


function WelcomeScreen(props) {

    return (
        // <></>
       <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.Logocontainer}>
            <Text style={styles.tagline} > your serivce</Text>

            </View>
        <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="register" color="secondary" />

                </View>
          
        </ImageBackground>
   

       
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:"flex-end",
    },
    buttonsContainer:{
        padding:20,
 

    },
    tagline:{
        alignItems:"center",

        textAlign: 'center',
        fontSize:25,
        fontWeight:"600",

    },
    
    registerButton:{
        width: '100%',
        height:70,
        backgroundColor: "#4ecdc4",
    },
    Logocontainer:{
        position: "absolute",
        top:70,
        alignItems:"center",


    }
    
});

export default WelcomeScreen;