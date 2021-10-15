import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DashedLine from 'react-native-dashed-line';

export default function Cart() {
    let [fontsLoaded] = useFonts({
        'Poppins Reg': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins': require('../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return <View style={{flex:1}}>
            <ScrollView>
                <View>
                    <View style={{
                        alignItems: 'flex-start',
                        paddingTop: 60,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity style={{paddingRight: 120}}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
                        <View>
                            <Text style={{fontFamily:"Poppins Reg", fontWeight: "bold", fontSize:18 }}>Cart list</Text>
                            <Text style={{fontFamily:"Poppins Reg", color:"rgba(0, 0, 0, 0.6)", fontSize:12 }}>(3 items)</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 20,
                        paddingLeft: 20,
                    }}>
                        <Image style={{
                            height: 100,
                            width: 100, 
                            borderRadius: 15,

                        }}
                        source={{uri:"https://images.unsplash.com/photo-1585160029224-3294e0aaa857?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"}} />
                        <View style={{ paddingTop: 5, paddingLeft: 10, }}>
                            <Text style={{ fontFamily: "Poppins Reg", fontSize:15, color:"rgba(0, 0, 0, 0.6)" }}>Tower Electric Bike</Text>
                            <Text style={{ fontFamily: "Poppins Reg", fontSize:10, color:"rgba(0, 0, 0, 0.4)" }}>Mountain Bike</Text>
                            <Text style={{ fontFamily: "Poppins", paddingTop:15, fontSize:16, color:"rgba(255, 100, 10, 0.7)" }}>GHS 
                            <Text style={{color:"black"}}> 5,000.00</Text></Text>
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 5, }}>
                            <TouchableOpacity><AntDesign name="minuscircle" size={20} color="black" /></TouchableOpacity>
                        </View>
                        <Text style={{ fontSize:18, justifyContent: 'center', paddingLeft: 10, paddingRight: 5, paddingTop: 38}}>1</Text>
                        <View style={{ justifyContent: 'center', paddingLeft: 5, paddingBottom:35 }}>
                                <View>
                                <TouchableOpacity style={{
                                    marginRight: 30,
                                    paddingBottom: 10,
                                }}><AntDesign name="delete" size={24} color="rgba(255, 100, 10, 0.7)" /></TouchableOpacity>
                            </View>
                            <TouchableOpacity><AntDesign name="pluscircle" size={20} color="rgba(255, 100, 10, 0.7)" /></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 20,
                        paddingLeft: 20,
                    }}>
                        <Image style={{
                            height: 100,
                            width: 100, 
                            borderRadius: 15,

                        }}
                        source={{uri:"https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
                        <View style={{ paddingTop: 5, paddingLeft: 10, }}>
                            <Text style={{ fontFamily: "Poppins Reg", fontSize:15, color:"rgba(0, 0, 0, 0.6)" }}>Maldives Stroll Bike</Text>
                            <Text style={{ fontFamily: "Poppins Reg", fontSize:10, color:"rgba(0, 0, 0, 0.4)" }}>Roadbike</Text>
                            <Text style={{ fontFamily: "Poppins", paddingTop:15, fontSize:16, color:"rgba(255, 100, 10, 0.7)" }}>GHS 
                            <Text style={{color:"black"}}> 5,000.00</Text></Text>
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 5, }}>
                            <TouchableOpacity><AntDesign name="minuscircle" size={20} color="black" /></TouchableOpacity>
                        </View>
                        <Text style={{ fontSize:18, justifyContent: 'center', paddingLeft: 10, paddingRight: 5, paddingTop: 38}}>1</Text>
                        <View style={{ justifyContent: 'center', paddingLeft: 5, paddingBottom:35 }}>
                                <View>
                                <TouchableOpacity style={{
                                    marginRight: 30,
                                    paddingBottom: 10,
                                }}><AntDesign name="delete" size={24} color="rgba(255, 100, 10, 0.7)" /></TouchableOpacity>
                            </View>
                            <TouchableOpacity><AntDesign name="pluscircle" size={20} color="rgba(255, 100, 10, 0.7)" /></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 20,
                        paddingLeft: 20,
                    }}>
                        <Image style={{
                            height: 100,
                            width: 100, 
                            borderRadius: 15,

                        }}
                        source={{uri:"https://images.unsplash.com/photo-1625304664697-30a254733647?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
                        <View style={{ paddingTop: 5, paddingLeft: 10, }}>
                            <Text style={{ fontFamily: "Poppins Reg", fontSize:15, color:"rgba(0, 0, 0, 0.6)" }}>Himiw Electric Bike</Text>
                            <Text style={{ fontFamily: "Poppins Reg", fontSize:10, color:"rgba(0, 0, 0, 0.4)" }}>Urban Bike</Text>
                            <Text style={{ fontFamily: "Poppins", paddingTop:15, fontSize:16, color:"rgba(255, 100, 10, 0.7)" }}>GHS 
                            <Text style={{color:"black"}}> 6,800.00</Text></Text>
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 5, }}>
                            <TouchableOpacity><AntDesign name="minuscircle" size={20} color="black" /></TouchableOpacity>
                        </View>
                        <Text style={{ fontSize:18, justifyContent: 'center', paddingLeft: 10, paddingRight: 5, paddingTop: 38}}>1</Text>
                        <View style={{ justifyContent: 'center', paddingLeft: 5, paddingBottom:35 }}>
                                <View>
                                <TouchableOpacity style={{
                                    marginRight: 30,
                                    paddingBottom: 10,
                                }}><AntDesign name="delete" size={24} color="rgba(255, 100, 10, 0.7)" /></TouchableOpacity>
                            </View>
                            <TouchableOpacity><AntDesign name="pluscircle" size={20} color="rgba(255, 100, 10, 0.7)" /></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        marginTop: 40,
                        paddingLeft: 20,
                        borderRadius: 10,
                        marginHorizontal: 10,
                    }}>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <View style={{
                            justifyContent: 'flex-start',}}>
                                <Text style={{ paddingRight:90, fontFamily: "Poppins Reg", paddingTop:15, fontSize:16, color:"rgba(0, 0, 0, 0.3)" }}>Subtotal</Text>
                            </View>
                            <View style={{
                            justifyContent: 'flex-end',}}>
                                <Text style={{ paddingRight:15, fontFamily: "Poppins", paddingTop:15, fontSize:16, color:"rgba(255, 100, 10, 0.7)" }}>GHS <Text style={{color:"black"}}>16,800.00</Text></Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <View style={{
                            justifyContent: 'flex-start',}}>
                                <Text style={{ paddingRight:50, fontFamily: "Poppins Reg", paddingTop:15, fontSize:16, color:"rgba(0, 0, 0, 0.3)" }}>Shipping fee</Text>
                            </View>
                            <View style={{
                            justifyContent: 'flex-end',}}>
                                <Text style={{ paddingRight:20, fontFamily: "Poppins", paddingTop:15, fontSize:16, color:"rgba(255, 100, 10, 0.7)" }}>GHS <Text style={{color:"black"}}>800.00</Text></Text>
                            </View>
                        </View>
                        {/* <View style={{ padding: '5%', height: '100%' }}>
                            <DashedLine dashLength={7} dashColor='rgba(0, 0, 0, 0.3)' />
                        </View> */}
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <View style={{
                            justifyContent: 'flex-start',}}>
                                <Text style={{ paddingRight:110, fontFamily: "Poppins Reg", paddingTop:15, fontSize:16, color:"rgba(0, 0, 0, 0.3)" }}>Total</Text>
                            </View>
                            <View style={{
                            justifyContent: 'flex-end',}}>
                                <Text style={{ paddingRight:15, fontFamily: "Poppins", paddingTop:15, fontSize:16, color:"rgba(255, 100, 10, 0.7)" }}>GHS <Text style={{color:"black"}}>17,600.00</Text></Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor: "rgba(255, 100, 10, 0.8)",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            marginTop: 15,
                        }}>
                            <Text style={{ color:"white", fontFamily:"Poppins Reg", fontSize:16, padding:10, }}>Proceed To Checkout</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                    flexDirection: "row",
                    alignContent: 'center',
                }}>
                    <View style={{
                    backgroundColor: "rgba(0, 0, 0, 0.06)",
                    paddingRight: 100,
                    borderRadius: 20,
                    paddingTop: 20,
                    paddingLeft: 25
                }}><TouchableOpacity><AntDesign name="home" size={24} color="black" /></TouchableOpacity></View>
                    <View style={{
                    }}>
                        <TouchableOpacity><Ionicons name="mic-circle" size={60} color="black" /></TouchableOpacity>
                    </View>
                    <View style={{
                    backgroundColor: "rgba(0, 0, 0, 0.06)",
                    paddingLeft: 100,
                    borderRadius: 20,
                    paddingTop: 20,
                    paddingRight: 25
                }}><TouchableOpacity><FontAwesome name="shopping-bag" size={24} color="rgba(255, 100, 10, 0.7)" /></TouchableOpacity></View>
            </View>
        </View>
    }
}