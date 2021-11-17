import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons"
export default function login({navigation}){
return(
    <View style={{ flex :1 ,justifyContent:"center", alignItems:"center",backGroundcolor:"green"}}>
    <Image
    style={{ 
        width : 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
    }}
     source={{uri :'https://media.istockphoto.com/photos/stack-of-books-on-the-table-of-public-library-picture-id1193274889?s=612x612'}} />
    <Text style={{color :"rgba(0,0,0,0.8)",fontSize:24}}>BON ARRIVER TO </Text>
    <Text style={{ color:"orange",fontSize:30,fontStyle:'italic'}}>CLINTON BOOKSHOP</Text>
    <TouchableOpacity style={{backgroundColor: "yellow", padding:10, paddingHorizontal:60, marginTop:20,borderRadius:10,}}>
    <View style={{flexDirection:"row"}}>
    <Image
    style={{height:20,resizeMode:"contain"}}
     source={{url:"https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/gmail_new_logo-512.png"}}/>
    <Text style={{fontSize :17}}>login with Gmail</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor: "black", padding:10, paddingHorizontal:60, marginTop:20, borderRadius:10,}}>
    <View style={{flexDirection:"row"}}>
    <AntDesign name="apple1" size={24} color="white" />
    <Text style={{fontSize :20, color:"white"}}>login with Apple </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
        navigation.navigate('Signup')
    }}>
    <Text style={{marginTop:10,color:"red"}}>Not a member?<Text style={{color:"black"}}> Sign Up</Text></Text>
    </TouchableOpacity>
    </View> 
);

}
