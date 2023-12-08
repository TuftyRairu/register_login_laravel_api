import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'

export default function Homepage({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#5F6F52',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
                    style={{
                        padding: 30,
                        fontSize: 50,
                        textAlign: 'center',
                        fontFamily: 'Kanit_400Regular',
                        color: '#FEFAE0',
                    }}
                >Welcome!</Text>
            <TouchableOpacity 
                style={{    
                    borderColor: '#B99470',
                    borderWidth: 1,
                    width: 250,
                    height: 50,
                }}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={{
                    color: '#FEFAE0',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}>Logout!</Text>
            </TouchableOpacity>
        </View>
    )
}