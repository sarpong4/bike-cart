import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const header = require('../assets/header_image.png');

export default function Login() {
    let [fontsLoaded] = useFonts({
        'Titillium Reg': require('../assets/fonts/TitilliumWeb-SemiBold.ttf'),
        'Titillium': require('../assets/fonts/TitiliumWeb-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return <View style=
            {{ 
                flex:  1, 
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundColor: "white" 
            }}>
            <Image source={header}
            style={{ 
                width: 200, 
                height: 200,
                borderRadius: 20,
                marginBottom: 50,
                transform: [{rotate: '-30deg'}]
            }} />
            <Text style={{ color: 'rgba(0,0,0,0.8)', fontSize: 24, fontFamily: "Titillium Reg" }}>Welcome To</Text>
            <Text style={{ 
                color: 'black', 
                fontSize: 30, 
                fontWeight: 500,
                fontFamily: "Titillium"
                }}>
                Power Bike Shop
            </Text>
            <TouchableOpacity 
                style={{ 
                    alignItems: "center",
                    backgroundColor: "#e3e3e3", 
                    borderRadius: 10,
                    flexDirection: 'row',
                    padding: 10, 
                    paddingHorizontal: 60, 
                    marginTop: 20,
                }}>
                <AntDesign name="google" size={24} color="rgb(255, 100, 10)" style={{ marginRight: 15 }} />
                <Text style={{ fontSize: 20 }} >
                    Login with Gmail
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{ 
                    backgroundColor: "black", 
                    borderRadius: 10,
                    flexDirection: 'row',
                    padding: 10, 
                    paddingHorizontal: 60, 
                    marginTop: 20 
                }}>
                <AntDesign name="apple1" size={24} color="white" style={{ marginRight: 15 }} />
                <Text style={{ fontSize: 20, color: "white" }}>
                Login with Apple
                </Text>
            </TouchableOpacity>
            <Text style={{
                marginTop: 10,
                fontWeight: '500',
                color: 'grey'
            }}>
                Not a member? <TouchableOpacity>
                    <Text style={{color: "orange", fontWeight: "bold"}}>Sign up</Text>
                    </TouchableOpacity>
            </Text>
        </View>
    }
}