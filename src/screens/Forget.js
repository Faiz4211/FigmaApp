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
                width: 243,
                left: 100,
                top: 171,
            }}>Forget Password</Text>
            <Text style={{
                fontFamily: 'Inter-Bold',
                fontSize: 17,
                lineHeight: 22,
                letterSpacing: -0.23999999463558197,
                textAlign: 'center',
                top: 180,
                color: "#9CA5BF"
            }}>Enter Your Email Here</Text>

            <View style={styles.input}>
                <TextInput
                    label='Email'
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("ForgetPass")}
                style={{
                    backgroundColor: "#FFE78F",
                    borderRadius: 15,
                    marginTop: 600,
                    height: 56,
                    width: 343,
                    left: 35,
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
                >Next</Text>
            </TouchableOpacity>
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

})
