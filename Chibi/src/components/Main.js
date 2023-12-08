import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';
import { Kanit_300Light } from "@expo-google-fonts/kanit";
import { useFonts } from "expo-font";

export default function Main({ navigation }) {

    const [fontsLoaded] = useFonts({
        Kanit_300Light,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View 
            style={{
                flex: 1, 
                backgroundColor: '#5F6F52',
                justifyContent: 'center',
                alignItems: 'center',   
                flexDirection: 'column',
            }}
        >
            <Image 
                    style={{
                        width: 280, 
                        height: 280,
                        marginBottom: 20,
                    }}
                    source={require('../images/chibilogo.png')}
            />
            <Text style={{
                    marginBottom: 80,
                    color: '#FEFAE0',
                    fontFamily: "Kanit_300Light",
                    fontSize: 30,
                    textAlign: 'center',
                }}
            >Konnichiwa!!{"\n"}Music Daisuke!</Text>

            <TouchableOpacity 
                style={{    
                    borderColor: '#B99470',
                    borderWidth: 1,
                    width: 250,
                    height: 50,
                }}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={{
                    color: '#FEFAE0',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}>Press Here My Friend!</Text>
            </TouchableOpacity>
        </View>
    )
}