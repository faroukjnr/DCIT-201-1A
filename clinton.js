import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}from'@react-navigation/native-stack';
import login from "./screens/login";
import Home from "./screens/Home";
export default function App() {
  const MainNavigator= createNativeStackNavigator();
  return (
    <View style={{flex :1}}>
    <NavigationContainer>
    <MainNavigator.Navigator screenOptions={{headerShown:"false"}}initialRouteName="login">
    <MainNavigator.Screen name="login" component={login}/>
    <MainNavigator.Screen name="Home" component={Home}/>
    
    
    </MainNavigator.Navigator>
    </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({  container: {
    flex: 1,
  },
});
