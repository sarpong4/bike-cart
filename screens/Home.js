import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from "react-native-gesture-handler";

const { height } = Dimensions.get("window")

export default function Home() {
    let [fontsLoaded] = useFonts({
        'Poppins Reg': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins': require('../assets/fonts/Poppins-Bold.ttf'),
    });

    const state = {
        screenHeight: 0,
    };

    const onContentSizeChange = (contentWidth, contentHeight) => {
        state.screenHeight = contentHeight
    }

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        const scrollEnabled = state.screenHeight > height;
        return <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} >
            <View style={{ 
            flex:  1, 
            justifyContent: 'flex-start',
            paddingTop: 55,
            paddingLeft: 15,
            backgroundColor: "white" 
        }}>
                <View style={{ flexDirection: "row" }}>
                    <Ionicons name="ios-menu-outline" size={24} color="rgba(0,0,0,0.65)" />
                    <FontAwesome style={{ paddingHorizontal: 110 }} name="bicycle" size={24} color="rgba(0,0,0,0.65)" />
                    <Ionicons style={{ paddingRight: 10 }} name="ios-search-outline" size={24} color="rgba(0,0,0,0.65)" />
                    <SimpleLineIcons style={{ alignItems: "flex-end"}} name="bell" size={24} color="rgba(0,0,0,0.65)" />
                </View>
                <View style={{ marginTop: 20}}>
                    <Text 
                    style={{ fontFamily: "Poppins Reg", color: "rgba(0, 0, 0, 0.5)", fontSize: 14 }} >
                        The World's  
                        <Text
                        style={{ 
                            fontFamily: "Poppins Reg", 
                            color: "rgba(255, 100, 10, 0.7)",
                            fontWeight: "bold", 
                            fontSize: 19 }}> Best Bike</Text>
                    </Text>
                    <Text
                        style={{
                            marginTop: 15,
                            fontFamily: "Poppins",
                            fontSize: 15,
                        }}
                    >
                        Categories
                    </Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={{ paddingHorizontal: 17, paddingVertical: 5, backgroundColor: "rgba(0, 0, 0, 0.1)", alignItems: "center", borderRadius: 8 }}><Text style={{ fontSize:15, color: "rgba(255, 100, 10, 0.7)"}}>All</Text></TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, paddingVertical: 5, paddingHorizontal: 17,backgroundColor: "rgba(0, 0, 0, 0.1)", alignItems: "center", borderRadius: 8 }}><Text style={{ fontSize:15, color: "rgba(0, 0, 0, 0.5)"}}>Roadbike</Text></TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, paddingVertical: 5, paddingHorizontal: 17,backgroundColor: "rgba(0, 0, 0, 0.1)", alignItems: "center", borderRadius: 8 }}><Text style={{ fontSize:15, color: "rgba(0, 0, 0, 0.5)"}}>Mountain</Text></TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, paddingVertical: 5, paddingHorizontal: 17,backgroundColor: "rgba(0, 0, 0, 0.1)", alignItems: "center", borderRadius: 8 }}><Text style={{ fontSize:15, color: "rgba(0, 0, 0, 0.5)"}}>Urban</Text></TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, paddingVertical: 5, paddingHorizontal: 17,backgroundColor: "rgba(0, 0, 0, 0.1)", alignItems: "center", borderRadius: 8 }}><Text style={{ fontSize:15, color: "rgba(0, 0, 0, 0.5)"}}>Flodable</Text></TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <TouchableOpacity style={{ marginRight:10, paddingHorizontal:18, alignItems:"center", backgroundColor:"rgba(0, 0, 0, 0.06)", paddingVertical: 15, borderRadius:10, }}>
                            <Image style={{ height: 200, width:120, resizeMode: 'contain' }} 
                            source={{uri:"https://images.unsplash.com/photo-1603399301857-4871de8d64d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"}}/>
                            <Text style={{ marginTop:0, fontSize:12, fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.4)"}}>Ignatowski</Text>
                            <Text style={{fontWeight:"bold"}}>GHS 500.00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft:5, paddingHorizontal:18, alignItems:"center", backgroundColor:"rgba(0, 0, 0, 0.06)", paddingVertical: 15, borderRadius:10, }}>
                            <Image style={{ height: 200, width:120, resizeMode: 'contain' }} 
                            source={{uri:"https://images.unsplash.com/photo-1624342430388-2f1e77612bba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"}}/>
                            <Text style={{ marginTop:0, fontSize:12, fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.4)"}}>KBO Bike</Text>
                            <Text style={{fontWeight:"bold"}}>GHS 800.00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <TouchableOpacity style={{ marginRight:10, paddingHorizontal:18, alignItems:"center", backgroundColor:"rgba(0, 0, 0, 0.06)", paddingVertical: 15, borderRadius:10, }}>
                            <Image style={{ height: 200, width:120, resizeMode: 'contain' }} 
                            source={{uri:"https://images.unsplash.com/photo-1585160029224-3294e0aaa857?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"}}/>
                            <Text style={{ marginTop:0, fontSize:12, fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.4)"}}>Tower Electric Bike</Text>
                            <Text style={{fontWeight:"bold"}}>GHS 5,000.00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft:5, paddingHorizontal:18, alignItems:"center", backgroundColor:"rgba(0, 0, 0, 0.06)", paddingVertical: 15, borderRadius:10, }}>
                            <Image style={{ height: 200, width:120, resizeMode: 'contain' }} 
                            source={{uri:"https://images.unsplash.com/photo-1622734547816-47e9afe17021?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"}}/>
                            <Text style={{ marginTop:0, fontSize:12, fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.4)"}}>Super 73 Bike</Text>
                            <Text style={{fontWeight:"bold"}}>GHS 6,200.00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <TouchableOpacity style={{ marginRight:10, paddingHorizontal:18, alignItems:"center", backgroundColor:"rgba(0, 0, 0, 0.06)", paddingVertical: 15, borderRadius:10, }}>
                            <Image style={{ height: 200, width:120, resizeMode: 'contain' }} 
                            source={{uri:"https://images.unsplash.com/photo-1622598473264-81a98f1c7be5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}/>
                            <Text style={{ marginTop:0, fontSize:12, fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.4)"}}>Himiway Bike</Text>
                            <Text style={{fontWeight:"bold"}}>GHS 6,500.00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft:5, paddingHorizontal:18, alignItems:"center", backgroundColor:"rgba(0, 0, 0, 0.06)", paddingVertical: 15, borderRadius:10, }}>
                            <Image style={{ height: 200, width:120, resizeMode: 'contain' }} 
                            source={{uri:"https://images.unsplash.com/photo-1625304664697-30a254733647?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}/>
                            <Text style={{ marginTop:0, fontSize:12, fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.4)"}}>Himiway Bike</Text>
                            <Text style={{fontWeight:"bold"}}>GHS 6,800.00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <TouchableOpacity style={{ marginRight:10, paddingHorizontal:18, alignItems:"center", backgroundColor:"rgba(0, 0, 0, 0.06)", paddingVertical: 15, borderRadius:10, }}>
                            <Image style={{ height: 200, width:120, resizeMode: 'contain' }} 
                            source={{uri:"https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}/>
                            <Text style={{ marginTop:0, fontSize:12, fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.4)"}}>Maldives Stroll Bike</Text>
                            <Text style={{fontWeight:"bold"}}>GHS 5,000.00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft:5, paddingHorizontal:18, alignItems:"center", backgroundColor:"rgba(0, 0, 0, 0.06)", paddingVertical: 15, borderRadius:10, }}>
                            <Image style={{ height: 200, width:120, resizeMode: 'contain' }} 
                            source={{uri:"https://images.unsplash.com/photo-1620711973925-1f67a54528c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}/>
                            <Text style={{ marginTop:0, fontSize:12, fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.4)"}}>Himiway Bike</Text>
                            <Text style={{fontWeight:"bold"}}>GHS 7,200.00</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        </ScrollView>
    }
}