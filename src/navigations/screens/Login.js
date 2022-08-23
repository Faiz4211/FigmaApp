import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={{
                position: 'absolute',
                width: 108,
                height: 100,
                left: 160,
                top: 55,

            }}
                source={require("../images/logo.png")}></Image>
            <Text style={{
                fontFamily: 'Inter-Bold',
                fontSize: 35,
                color: "#3E1A00",
                lineHeight: 40,
                fontWeight: 'bold',
                letterSpacing: -0.23999999463558197,
                textAlign: 'center',
                height: 41,
                width: 99,
                left: 160,
                top: 160,


            }}>Sign In</Text>
            <Text style={{

                fontFamily: 'Inter-Bold',
                fontSize: 17,
                lineHeight: 22,
                letterSpacing: -0.23999999463558197,
                textAlign: 'center',
                top: 180,
                color: "#9CA5BF"

            }}>I’m happy to see you again</Text>

            <View style={styles.input}>
                <TextInput
                    placeholder='Email'

                />
            </View>
            <View style={styles.input1}>
                <TextInput
                    placeholder='Password'

                />
            </View>



            <View style={styles.forgotbtn}>
                <TouchableOpacity
                >
                    <Text style={{
                        fontFamily: 'Inter-Bold',
                        fontSize: 13,
                        lineHight: 18,
                        letteSpacing: -0.07800000160932541,
                        textAlign: 'right',
                        color: "#3E1A00",
                    }}>
                        Forgot password?
                    </Text>

                </TouchableOpacity>
            </View>


            <View style={styles.viewText}>

                <Text style={{
                    fontFamily: 'Inter-Bold',
                    fonWeight: 'bold',
                    fontSize: 20,
                    lineHeight: 20,
                    texAlign: 'center',
                    color: "#9CA5BF",
                    top: 300,

                }}

                >Or Login With </Text>

            </View>
            <View style={styles.icons}>
                <Image source={require('../images/facebook-logo.png')}></Image>
                <Image source={require('../images/google-logo.png')}></Image>

            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("LoginActive")}
                style={{
                    backgroundColor: "#FFE78F",
                    borderRadius: 15,
                    marginTop: 400,
                    height: 56,
                    width: 343,
                    left: 35


                }}>
                <Text style={{
                    position: 'absolute',
                    height: 22,
                    left: 16,
                    right: 16,
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 17,
                    lineHeight: 22,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    letterSpacing: -0.408,
                    color: "#3E1A00",
                    top: 15,

                }}

                >Sign In</Text>
            </TouchableOpacity>
            <View style={styles.Text}>
                <Text
                    style={{
                        color: "#9CA5BF",

                    }}
                >Don’t have an account? </Text>

                <Text
                    style={{
                        fontFamily: 'Inter-Bold',
                        fontSize: 15,
                        fontWeight: 'bold',
                        lineHeight: 20,
                        letterSpacing: -0.23999999463558197,
                        color: "#3E1A00"
                    }}>Create account</Text>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    input: {
        top: 220,
        marginLeft: 10,
        marginRight: 10,
        height: 65,
    },
    input1: {
        top: 225,
        marginLeft: 10,
        marginRight: 10,
        height: 65,
    },

    forgotbtn: {
        height: 18,
        width: 112,
        left: 300,
        top: 300,
        top: 250,
    },

    viewText: {
        textAlign: 'center',
        left: 170,


    },
    icons: {
        top: 350,
        width: 77,
        height: 56,
        left: 180,
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    Text: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: 20,
        width: 250,
        left: 90

    }

})
