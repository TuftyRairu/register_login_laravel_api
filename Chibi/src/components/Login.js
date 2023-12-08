import { View, TouchableOpacity } from 'react-native'
import { TextInput, Text, Button } from 'react-native-paper';
import { Image } from '@rneui/base';
import React from 'react'
import { Kanit_400Regular, Kanit_300Light } from "@expo-google-fonts/kanit";
import { useFonts } from "expo-font";
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
// import client from '../api/client';

export default function Login({ navigation }) {
    const [showPass, setShowPass] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({
        email: '',
        password: '',
    });

    const [error, setError] = React.useState('');

    const { email, password } = userInfo

    const handleOnChangetext = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
    }

    const isValidForm = () => {
        if (!isValidObjField(userInfo)) return updateError('Required all fields!', setError)

        if (!isValidEmail(email)) return updateError('Invalid Email!', setError)

        if (!password.trim() || password.length < 8) return updateError('Password is too short!', setError)

        return true;
    }

    const submitForm = async () => {
        if (isValidForm()) {
            try {
                const response = await fetch("http://192.168.8.166:8000/api/login", {
                    method: "POST",
                    headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: userInfo.email,
                      password: userInfo.password
                    }),
                })
            
                const result = await response.json();
                console.log("Success:", result);
                if(response.status === 200){
                    await navigation.navigate("HomePage");

                    userInfo.email = '',
                    userInfo.password = ''
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }

    const [fontsLoaded] = useFonts({
        Kanit_400Regular,
        Kanit_300Light,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                paddingVertical: 60,
                backgroundColor: '#5F6F52',
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    marginTop: 50,
                    marginRight: 70,
                    alignItems: 'flex-end',
                }}
            >
                <Image
                    style={{
                        width: 120,
                        height: 120,
                    }}
                    source={require('../images/chibilogo.png')}
                />
            </View>
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
            >Signin</Text>

            <View
                style={{
                    paddingTop: 5,
                    paddingHorizontal: 30,
                    marginTop: 10,
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        width: 383.5,
                    }}
                >
                    {error ? <Text style={{ textAlign: 'center', color: 'red', fontSize: 18, fontFamily: 'Kanit_400Regular' }}>{error}</Text> : null}
                </View>
                <TextInput
                    mode='outlined'
                    autoCapitalize='none'
                    placeholder='Email'
                    value={email}
                    onChangeText={(value) => handleOnChangetext(value, 'email')}
                    style={{
                        marginBottom: 15,
                        marginTop: 40,
                    }}
                    theme={{ fonts: { regular: 'Apple Color Emoji' } }}
                />
                <TextInput
                    mode='outlined'
                    autoCapitalize='none'
                    placeholder='Password'
                    secureTextEntry={!showPass}
                    value={password}
                    onChangeText={(value) => handleOnChangetext(value, 'password')}
                    right={
                        <TextInput.Icon
                            icon={showPass ? "eye-off" : "eye"}
                            onPress={() => setShowPass(!showPass)}
                        />
                    }
                    style={{
                        marginTop: 15,
                        marginBottom: 25,
                        fontFamily: 'Kanit_300Light',
                    }}
                />
            </View>
            <View
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    marginRight: 35,
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: '#FEFAE0',
                        marginHorizontal: 2,
                        fontFamily: 'Kanit_300Light',
                        fontSize: 15,
                    }}
                >Forgot your</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Recovery")}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'blue',
                            marginHorizontal: 2,
                            fontFamily: 'Kanit_300Light',
                            fontSize: 16,
                        }}
                    >Password</Text>
                </TouchableOpacity>
                <Text
                    style={{
                        textAlign: 'center',
                        color: '#FEFAE0',
                        marginHorizontal: 2,
                        fontSize: 15,
                    }}
                >?</Text>
            </View>
            <View
                style={{
                    paddingHorizontal: 80,
                    paddingVertical: 20,
                }}
            >
                <Button
                    mode="contained"
                    icon="login"
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
                    onPress={submitForm}
                >
                    <Text style={{ width: '60%', color: '#FEFAE0', fontSize: 18, fontFamily: 'Kanit_300Light' }}>Login</Text>
                </Button>
                <Button
                    mode="outlined"
                    icon="door"
                    textColor='#B99470'
                    style={{
                        borderColor: '#B99470',
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.pop()}
                >
                    <Text style={{ width: '60%', color: '#B99470', fontSize: 18, fontFamily: 'Kanit_300Light' }}>Exit</Text>
                </Button>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#FEFAE0',
                            marginHorizontal: 3,
                            fontFamily: 'Kanit_300Light',
                            fontSize: 15,
                        }}
                    >Don't have an Account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'blue',
                                marginHorizontal: 3,
                                fontFamily: 'Kanit_300Light',
                                fontSize: 17,
                            }}
                        >Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}