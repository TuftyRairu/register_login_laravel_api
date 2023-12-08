import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import globalstyles from './src/config/Styles';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import Main from './src/components/Main';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Recover from './src/components/Recover';
import Homepage from './src/components/Homepage';

const Stack = createNativeStackNavigator();

export default function App() {

  // const fetchApi = async () => {
  //   try {
  //     const res = await axios.get('http://127.0.0.1:8000/');
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   fetchApi()
  // }, [])

  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={Main} />
          <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
          <Stack.Screen options={{
            headerShown: false
          }} name='Register' component={Register} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: '#A9B388',
            },
          }} name='Recovery' component={Recover} />
          <Stack.Screen options={{ headerShown: false }} name='HomePage' component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);
