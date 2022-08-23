import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Verification({ navigation }) {
    return (
        <View style={styles.container} >
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
                width: 320,
                left: 50,
                top: 170,


            }}>Verification Code</Text>
            <Text style={{
                fontFamily: 'Inter-',
                fontSize: 17,
                lineHeight: 24,
                letterSpacing: -0.23999999463558197,
                textAlign: 'center',
                color: "#9CA5BF",
                top: 180
            }}
            >
                Please enter 4-digit code sent to your email
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}
                style={{
                    backgroundColor: "#FFE78F",
                    borderRadius: 15,
                    top: 600,
                    height: 56,
                    width: 343,
                    left: 40,
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

                >Verify</Text>
            </TouchableOpacity>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

})

