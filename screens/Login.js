import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
    return <View style={{ flex:  1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{uri: "https://images.unsplash.com/photo-1457299999196-427a06ea646d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}}
        style={{ 
            width: 170, 
            height: 170,
            borderRadius: 10,
            marginBottom: 20,
        }} />
        <Text style={{ color: 'rgba(0,0,0,0.8)', fontSize: 24,  }}>Welcome To</Text>
        <Text style={{ 
            color: 'black', 
            fontSize: 30, 
            fontWeight: 500,
            }}>
            Power Bike Shop
        </Text>
        <TouchableOpacity 
            style={{ 
                backgroundColor: "#e3e3e3", 
                borderRadius: 10,
                flexDirection: 'row',
                padding: 10, 
                paddingHorizontal: 60, 
                marginTop: 20,
            }}>
            <AntDesign name="google" size={24} color="black" style={{ marginRight: 15 }} />
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
    </View>
}