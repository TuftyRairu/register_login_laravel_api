import { View } from 'react-native'
import React from 'react'
import { Button, TextInput, Text } from 'react-native-paper'

export default function Recover({ navigation }) {
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
                        borderBottomWidth: 1,
                        borderColor: '#B99470',
                        padding: 30,
                        fontSize: 50,
                        textAlign: 'center',
                        fontFamily: 'Kanit_400Regular',
                        color: '#FEFAE0',
                    }}
                >Account Recovery</Text>
            <TextInput 
                    mode='outlined'
                    placeholder='Email Address'
                    style={{
                        marginVertical: 15,
                        width: '80%',
                    }}
                    error={false}
                    theme={{ fonts: { regular: 'Apple Color Emoji' } }}
                />
            <Button 
                    mode="contained"
                    icon="send"
                    buttonColor='#B99470'
                    textColor='#FEFAE0'
                    style={{
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.navigate("HomePage")}
                >
                    <Text style={{width: '60%', color: '#FEFAE0', fontSize: 18, fontFamily: 'Kanit_300Light'}}>Submit</Text>
                </Button>
        </View>
    )
}