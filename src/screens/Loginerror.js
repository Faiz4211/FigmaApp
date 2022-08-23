import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Loginerror({ navigation }) {
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
                    placeholder='Pattrick@email.com'
                    placeholderTextColor="#9CA5BF"
                />
            </View>
            <View style={styles.input1}>
                <TextInput
                    placeholder='•••••••••••••••••'
                    placeholderTextColor="#C94F59"
                />
            </View>

            <View style={styles.forgotbtn}>
                <Text style={{
                    fontFamily: 'Inter',
                    fontSize: 13,
                    lineHeight: 18,
                    letterSpacing: -0.07800000160932541,
                    textAlign: 'left',
                    color: "#C94F59",
                    left: 10,
                }}>
                    Oops! Incorrect Password
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Forget")}
                >
                    <Text style={{
                        fontFamily: 'Inter-Bold',
                        fontSize: 13,
                        lineHight: 18,
                        letteSpacing: -0.07800000160932541,
                        textAlign: 'right',
                        color: "#3E1A00",
                        right: 10,
                    }}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
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
        top: 240,
    },
})
